export function ContentCard(props,number) {    
    let {name,url} = props;

    // console.log(url[34]);

    document.addEventListener("click",e =>{
        if(!e.target.matches(".post-card a")) return false;

        localStorage.setItem("wpPostId",e.target.dataset.id);

    });

    return `
    <article class = "contents-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png" alt="${name}">
        <h4>#${number}</h4>
        <h3>${name}</h3>
        <a href="${url}">Ver datos</a>
    </article>`;
}