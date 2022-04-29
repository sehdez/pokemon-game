(function(){"use strict";var n={1292:function(n,o,e){var t=e(9242),r=e(3396);function i(n,o,e,t,i,s){const a=(0,r.up)("PokemonPage");return(0,r.wg)(),(0,r.j4)(a)}var s=e(7139);const a={key:0},m=(0,r._)("h2",null,"Cargando...",-1),u=[m],c={key:1},p=(0,r._)("h1",null," Who is this Pokemon?",-1),k={key:1},l={key:0},h=(0,r._)("h3",null,"You win ",-1),d=[h],f={key:1},w=(0,r._)("h3",null,"You lose ",-1);function g(n,o,e,t,i,m){const h=(0,r.up)("PokemonPicture"),g=(0,r.up)("PokemonOptions");return i.pokemon?((0,r.wg)(),(0,r.iD)("div",c,[p,(0,r.Wm)(h,{pokemon:i.pokemon.id,"show-pokemon":i.showPokemon},null,8,["pokemon","show-pokemon"]),i.showPokemon?((0,r.wg)(),(0,r.iD)("div",k,[i.win?((0,r.wg)(),(0,r.iD)("div",l,d)):((0,r.wg)(),(0,r.iD)("div",f,[w,(0,r._)("h4",null,"The pokemon is "+(0,s.zw)(i.pokemon.name),1)])),(0,r._)("button",{onClick:o[0]||(o[0]=(...n)=>m.newGame&&m.newGame(...n))},"New game")])):((0,r.wg)(),(0,r.j4)(g,{key:0,pokemons:i.pokemonsArr,onSelection:m.checkAnswer},null,8,["pokemons","onSelection"]))])):((0,r.wg)(),(0,r.iD)("div",a,u))}const v={class:"options-container"},P=["onClick"];function y(n,o,e,t,i,a){return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.pokemons,(o=>((0,r.wg)(),(0,r.iD)("li",{key:o.id,onClick:e=>n.$emit("selection",o.id)},(0,s.zw)(o.name),9,P)))),128))])])}var b={props:{pokemons:{type:Array,require:!0}},data(){return{}},methods:{}},_=e(89);const O=(0,_.Z)(b,[["render",y],["__scopeId","data-v-7801ad20"]]);var A=O;const D={class:"pokemon-container"},j=["src"],x=["src"];function C(n,o,e,t,i,s){return(0,r.wg)(),(0,r.iD)("div",D,[(0,r._)("img",{class:"hidden-pokemon",src:s.imgSrc,alt:"Pokemon"},null,8,j),e.showPokemon?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"fade-in",src:s.imgSrc,alt:"Pokemon"},null,8,x)):(0,r.kq)("",!0)])}var $={props:{pokemon:{type:Number,required:!0},showPokemon:{type:Boolean,required:!0,default:!1}},computed:{imgSrc(){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon}.svg`}}};const S=(0,_.Z)($,[["render",C],["__scopeId","data-v-7733a0fd"]]);var q=S,M=e(6265),Z=e.n(M);const G=Z().create({baseURL:"https://pokeapi.co/api/v2/pokemon"});var I=G;const T=()=>{const n=Array.from(Array(650));return n.map(((n,o)=>o+1))},Y=async()=>{const n=T().sort((()=>Math.random()-.5)),o=await z(n.splice(0,4));return o},z=async([n,o,e,t]=[])=>{const[r,i,s,a]=await Promise.all([I.get(`/${n}`),I.get(`/${o}`),I.get(`/${e}`),I.get(`/${t}`)]);return[{name:r.data.name,id:n},{name:i.data.name,id:o},{name:s.data.name,id:e},{name:a.data.name,id:t}]};var N=Y,W={components:{PokemonOptions:A,PokemonPicture:q},data(){return{pokemonsArr:[],pokemon:null,showPokemon:!1,msg:"",win:!1}},methods:{async mixPokemons(){this.pokemonsArr=await N();const n=Math.floor(4*Math.random());this.pokemon=this.pokemonsArr[n]},checkAnswer(n){this.showPokemon=!0,this.msg=n===this.pokemon.id?this.win=!0:this.win=!1},newGame(){this.pokemonsArr=[],this.pokemon=null,this.showPokemon=!1,this.msg="",this.win=!1,this.mixPokemons()}},mounted(){this.mixPokemons()}};const B=(0,_.Z)(W,[["render",g]]);var E=B,F={name:"App",components:{PokemonPage:E}};const H=(0,_.Z)(F,[["render",i]]);var K=H;(0,t.ri)(K).mount("#app")}},o={};function e(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(o,t,r,i){if(!t){var s=1/0;for(c=0;c<n.length;c++){t=n[c][0],r=n[c][1],i=n[c][2];for(var a=!0,m=0;m<t.length;m++)(!1&i||s>=i)&&Object.keys(e.O).every((function(n){return e.O[n](t[m])}))?t.splice(m--,1):(a=!1,i<s&&(s=i));if(a){n.splice(c--,1);var u=r();void 0!==u&&(o=u)}}return o}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[t,r,i]}}(),function(){e.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(o,{a:o}),o}}(),function(){e.d=function(n,o){for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};e.O.j=function(o){return 0===n[o]};var o=function(o,t){var r,i,s=t[0],a=t[1],m=t[2],u=0;if(s.some((function(o){return 0!==n[o]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(m)var c=m(e)}for(o&&o(t);u<s.length;u++)i=s[u],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(c)},t=self["webpackChunkpokemon_game"]=self["webpackChunkpokemon_game"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(1292)}));t=e.O(t)})();
//# sourceMappingURL=app.8e03b848.js.map