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
    let count = 1;

    $contents.innerHTML = null;

    if (!hash || hash ==="#/") {

        await ajax({
            url: `${api.NEXT_POKEMON}`,
            cbSuccess:(contents) => {                
                let html = "";
                contents.results.forEach(contents => (html +=ContentCard(contents,count++)));
                $contents.innerHTML = html;
            }
        });
        
    } else {
        await ajax({
            url: `${api.POKEMON}/${localStorage.getItem("paContentId")}/`,
            cbSuccess:(content) => {
                console.log(content);
                $contents.innerHTML = Content(content);
            }
        });
    }
    

}