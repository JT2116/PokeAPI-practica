import api from "./helpers/poke_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loaders.js";
// import { infinite_scroll } from "./helpers/infinite_scroll.js";

export function App() {
    const d = document,
    $root = d.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Loader());

    // infinite_scroll();

    console.log(api);

    ajax({
        url: api.POKEMON,
        cbSuccess: (POKEMON) => {
            console.log(POKEMON);
        }
    });

    
}