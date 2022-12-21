import api from "../helpers/poke_api.js";
import { ajax } from "../helpers/ajax.js";
import { Content } from "./Content.js";
import { ContentCard } from "./ContentCard.js";

export async function Router() {
    ContentCard

    const d = document,
    w = window,
    $contents = d.getElementById("contents");

    let {hash} = location;

    $contents.innerHTML = null;


    if (!hash || hash ==="#/") {
        await ajax({
            url: api.POKEMON,
            cbSuccess:(contents) => {
                console.log(contents);                
                let html = "";
                contents.results.forEach(contents => (html +=ContentCard(contents)));

                $contents.innerHTML = html;

                
            }
        });                
    }

    
}