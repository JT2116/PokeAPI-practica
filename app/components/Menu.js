export function Menu() {
    const $menu = document.createElement("nav");

    $menu.classList.add("menu");

    $menu.innerHTML = `
    <a class="contents-links" href="/">Home</a>
    <span>-</span>
    `;

    return $menu;
}