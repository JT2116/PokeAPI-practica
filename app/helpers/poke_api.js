const NAME = "PokeApi",
DOMAIN = `https://pokeapi.co`,
API_POKE = `${DOMAIN}/api/v2`,
PER_PAGE = 6,
OFFESET = 20,
POKEMON = `${API_POKE}/pokemon`;
NEXT_POKEMON = `${POKEMON}?offset=${OFFESET}&limit=20`

let page = 1;

export default {
    NAME,
    DOMAIN,
    API_POKE,
    PER_PAGE,
    POKEMON,
    page
}