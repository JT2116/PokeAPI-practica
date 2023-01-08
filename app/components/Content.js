export function Content(props) {
    console.log(props)
    let {id,name,sprites,types,stats} = props;

    let type = [];

    types.forEach(types => {
        type.push(types.type.name);               
    });

    return `
    <section class="contents-page">
        <h1>#${id} ${name}</h1>        
        <h1>Type: ${type}</h1>
        <h1>Sprites Default</h1>
        <img src="${sprites.front_default}" alt="${name}_fornt">
        <img src="${sprites.back_default}" alt="${name}_back">
        <h1>Sprites Shiny</h1>
        <img src="${sprites.front_shiny}" alt="${name}_fornt">
        <img src="${sprites.back_shiny}" alt="${name}_back">
        <h1>Stats Base</h1>
        <h1>HP: ${stats[0].base_stat}</h1>
        <h1>Attack: ${stats[1].base_stat}</h1>
        <h1>Defense: ${stats[2].base_stat}</h1>
        <h1>Special attack: ${stats[3].base_stat}</h1>
        <h1>Special defense: ${stats[4].base_stat}</h1>
        <h1>Speed: ${stats[5].base_stat}</h1>    
    <section>`;
}