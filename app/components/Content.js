export function Content(props) {
    let {id,name,sprites,types} = props;

    console.log(name);

    return `
    <section class="contents-page">
        <h1>#${id}</h1>
        <h1>${name}</h1>        
        <h1>Type</h1>
        <h2>${types}</h2>
        <h1>Default</h1>
        <img src="${sprites.front_default}" alt="${name}_fornt">
        <img src="${sprites.back_default}" alt="${name}_back">
        <h1>Shiny</h1>
        <img src="${sprites.front_shiny}" alt="${name}_fornt">
        <img src="${sprites.back_shiny}" alt="${name}_back">
        
    <section>`;
}