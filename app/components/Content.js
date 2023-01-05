export function Content(props) {
    let name = props;

    console.log(name);

    return `
    <section class="contents-page">
        <article>${name}</article>
    <section>`;
}