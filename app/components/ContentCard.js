export function ContentCard(props,number) {    
    let {name,url} = props;

    document.addEventListener("click",e =>{
        if(!e.target.matches(".contents-card a")) return false;

        localStorage.setItem("paContentId",e.target.dataset.id);

        // console.log(localStorage.getItem("paContentId"))
    });

    return `
    <article class = "contents-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png" alt="${name}">
        <h4>#${number}</h4>
        <h3>${name}</h3>
        <a class="contents-links" href="#/${number}" data-id="${number}">Datas</a>
    </article>`;
}