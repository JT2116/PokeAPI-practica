import { ContentCard } from "../components/ContentCard.js";
import { SearchCard } from "../components/SearchCard.js";
import api from "./poke_api.js";
import { ajax } from "./ajax.js";

export async function infinite_scroll() {
    const d = document,
    w = window;

    let query = localStorage.getItem("wpSearch"),
    apiURL,
    Components;//High Order Components

    w.addEventListener("scroll", async e =>{
        const {scrollTop,clientHeight,scrollHeight} = d.documentElement,
        {hash} = w.location;

        // console.log(scrollTop,clientHeight,scrollHeight,hash);
        if (scrollTop + clientHeight >= scrollHeight) {
            api.page++;

            if (!hash || hash === "#/") {
                apiURL = `${api.POKEMON}&page=${api.page}`;
                Components = ContentCard;                
            } 
            else {
                return false;
            }

            d.querySelector(".loader").style.display = "block";

            await ajax({
                url: apiURL,
                cbSuccess:(POKEMON) =>{
                    let html = "";
                    contents.forEach((contents)=>(html += Components(post)));
                    d.getElementById("contents").insertAdjacentHTML("beforeend",html);
                    d.querySelector(".loader").style.display = "none";
                }
            });
        }
            
    });
}