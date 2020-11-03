const useFetch = (url) => {
    /* 'https://pokeapi.co/api/v2/pokemon?limit=151' */
    const cache = useRef({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    const initialState = {
        status: 'idle',
        error: null,
        data: [],
    };
    
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCHING':
                return { ...initialState, status: 'fetching' };
            case 'FETCHED':
                return { ...initialState, status: 'fetched', data: action.payload };
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return state;
        }
    }, initialState);
    
    useEffect(() => {
        if (!url) return;
  
        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[url]) {
                const data = cache.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.current[url] = data;
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            }
        };
    

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };

    }, [url]);

    return { status, data };
};
