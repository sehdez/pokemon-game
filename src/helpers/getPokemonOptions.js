import pokemonApi from '@/api/pokemonApi'

const getPokemons = () => {

    const pokemonArr = Array.from ( Array(650) )
    return pokemonArr.map( ( _ , index ) => index +1 )

}


const getPokemonOptions = async () => {

    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    const pokemones = await getPokemonNames( mixPokemons.splice(0,4) )

    return pokemones

}

const getPokemonNames = async( [ a,b,c,d ]= [] )=> {

    // const pokemonUno = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ a }`)
    const [ p1,p2,p3,p4 ] = await Promise.all([
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
        ])
        

        return [
            {name: p1.data.name, id: a },
            {name: p2.data.name, id: b },
            {name: p3.data.name, id: c },
            {name: p4.data.name, id: d }
        ]

}


export default getPokemonOptions