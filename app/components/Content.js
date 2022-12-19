export function Content(props) {
    let name = props;

    return `
    <section class="post-page">
        <article>${name.rendered}</article>
    <section>`;
}