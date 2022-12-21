export function Content(props) {
    let name = props;

    return `
    <section class="contents-page">
        <article>${name.rendered}</article>
    <section>`;
}