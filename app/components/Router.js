import api from "../helpers/poke_api.js";
import { ajax } from "../helpers/ajax.js";
import { Content } from "./Content.js";
import { ContentCard } from "./ContentCard.js";

export async function Router() {
    ContentCard    

    const d = document,
    w = window,
    $contents = d.getElementById("contents");

    let {hash} = location, count = 1;

    $contents.innerHTML = null;

    // if (!hash || hash ==="#/") {


        await ajax({
            url: `${api.NEXT_POKEMON}`,
            cbSuccess:(contents) => {
                // console.log(contents);                
                let html = "";
                // console.log(contents.results.findIndex(id => id.name === contents.results[4].name))
                // console.log(contents.results.forEach('2'));
                // contents.results.forEach(contents => (html +=ContentCard(contents,contents.findIndex(id=>id.name===contents.name))));
                contents.results.forEach(contents => (html +=ContentCard(contents,count++)));
                $contents.innerHTML = html;
            }
        });
        

    // }

}