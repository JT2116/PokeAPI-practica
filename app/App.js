import api from "./helpers/poke_api.js";
import { ajax } from "./helpers/ajax.js";
import { infinite_scroll } from "./helpers/infinite_scroll.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loaders.js";
import { Contents } from "./components/Contents.js";
import { Router } from "./components/Router.js";


export function App() {
    // let count = 0;    
    const d = document,
    $root = d.getElementById("root");


    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Contents());
    $root.appendChild(Loader());
    
    Router();

    infinite_scroll();


    // ajax({
    //     url: `${api.POKEMON}`,
    //     cbSuccess: (POKEMON) => {
    //         console.log(POKEMON);
            
    //         // console.log(POKEMON.results.findIndex(id => id.name === 'bulbasaur'))
    //     }
    // });

    
}