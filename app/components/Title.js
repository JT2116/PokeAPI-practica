import api from "../helpers/poke_api.js";

export function Title() {
    const $h1 = document.createElement("h1");
    
    $h1.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank" rel="noopener"
    ><img src="app/assets/pokeapi_256.png">
    </a>`;
 
    return $h1;

}