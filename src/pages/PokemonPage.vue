<template>
    <div v-if="!pokemon" >
        <h2>Cargando...</h2>
    </div>
  <div v-else>
      <h1> Who is this Pokemon?</h1>
      <PokemonPicture :pokemon="pokemon.id" :show-pokemon ="showPokemon" />

      <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer" v-if="!showPokemon" />
      <div v-else >
          <div v-if="win">
              <h3>You win </h3>
          </div>
          <div v-else>
              <h3>You lose </h3>
              <h4>The pokemon is {{ pokemon.name }}</h4>
          </div>
          <button @click="newGame">New game</button>
      </div>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components:{
        PokemonOptions,
        PokemonPicture,
    },
    data(){
        return{
            pokemonsArr:[],
            pokemon: null,
            showPokemon: false,
            msg: '',
            win: false
        }
    },
    methods:{
        async mixPokemons(){
        this.pokemonsArr = await getPokemonOptions()   

        const rndInt = Math.floor( Math.random() * 4)
        this.pokemon = this.pokemonsArr[rndInt]
        },
        checkAnswer( event ){
            this.showPokemon = true
            this.msg = (event === this.pokemon.id )
                        ? this.win = true
                        : this.win = false
        },
        newGame(){
            this.pokemonsArr =[],
            this.pokemon = null,
            this.showPokemon = false,
            this.msg = '',
            this.win = false,
            this.mixPokemons()
        }
    },
    mounted (){
        this.mixPokemons()
        
    }

}
</script>

<style>

</style>