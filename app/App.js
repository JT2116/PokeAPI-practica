import poke_api from "./helpers/poke_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loaders.js";

export function App() {
    const d = document,
    $root = d.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Loader());


    
}