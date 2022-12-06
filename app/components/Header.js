import { Title } from "./Title.js";
import { SearchForm } from "./SearchForm.js";

export function Header() {
    const $header = document.createElement("header");

    $header.classList.add("header");
    $header.appendChild(Title());
    $header.appendChild(SearchForm());

    return $header;
}