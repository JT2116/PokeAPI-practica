import { ContentCard } from "../components/ContentCard.js";
import api from "../helpers/poke_api.js";
import { ajax } from "../helpers/ajax.js";

export async function infinite_scroll() {
    const d = document,
    w = window;

    let apiURL, count = 21;

    w.addEventListener("scroll", async e => {
        const {scrollTop,clientHeight,scrollHeight} = d.documentElement,
        {hash} = w.location;

        if (scrollTop + clientHeight >= scrollHeight) {
            
            api.limit+=20;

            if(!hash || hash === "#/") {
                
                // apiURL = `${api.NEXT_POKEMON}&limit=${api.limit}`;
                apiURL = `${api.POKEMON}?offset=${api.limit}`;

                // console.log(apiURL);

                d.querySelector(".loader").style.display = "block";

                await ajax({
                    url: apiURL,
                    cbSuccess:(contents) => {
                        // console.log(contents.indexOf(contents.results[0].name));                
                        let html = "";
                        contents.results.forEach(contents => (html +=ContentCard(contents,count++)));
                        d.getElementById("contents").insertAdjacentHTML("beforeend",html);
                        d.querySelector(".loader").style.display = "none";
                    }
                });

            } else {
                return false
            }

        }

    });

}