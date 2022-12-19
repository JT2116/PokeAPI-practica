const NAME = "PokeApi",
DOMAIN = `https://pokeapi.co`,
API_POKE = `${DOMAIN}/api/v2`,
PER_PAGE = 6,
POKEMON = `${API_POKE}/pokemon`;

let page = 1;

export default {
    NAME,
    DOMAIN,
    API_POKE,
    PER_PAGE,
    POKEMON,
    page
}