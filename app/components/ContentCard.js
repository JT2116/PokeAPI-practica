export function ContentCard(props) {
    let {name} = props;

    // document.addEventListener("click",e =>{
    //     if(!e.target.matches(".post-card a")) return false;

    //     localStorage.setItem("wpPostId",e.target.dataset.id);

    // });

    return `
    <article class = "contents-card">
        <article>${name}</article>
        <a>Ver datos</a>
    <article>`;
}