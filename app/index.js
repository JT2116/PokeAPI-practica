import { App } from "./App.js";
import api from "./helpers/poke_api.js";

const d = document;

d.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",() => {
    api.page = 1;
    App();
});