

const useFetch = (props) => {
    let urlAPI='https://pokeapi.co/api/v2/pokemon?limit=151';
    
        const fetchData=(urlAPI)=>{
            fetch(urlAPI)
            .then(response => response.json())
            .then(allpokemon => setData(allpokemon.results))
        }

        useEffect((urlAPI) => {
            props.setData(fetchData(urlAPI));    
        }, [])
            

    return { status, data };
};
