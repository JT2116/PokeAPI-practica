export function SearchCard(props) {
    let name = props;

    let slug = _embedded.self[0].slug;

    return `
    <article class = "contents-card">
        <article>${name.rendered}</article>
    <article>`;


}