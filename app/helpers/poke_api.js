const NAME = "PokeApi",
DOMAIN = `https://pokeapi.co`,
API_POKE = `${DOMAIN}/api/v2`,
PER_PAGE = 6,
OFFESET = 0,
POKEMON = `${API_POKE}/pokemon`,
NEXT_POKEMON = `${POKEMON}?offset=${OFFESET}`;
// NEXT_POKEMON = `${POKEMON}?offset=${OFFESET}&limit=${LIMIT}`;

let limit = 0;

// console.log(NEXT_POKEMON);

export default {
    NAME,
    DOMAIN,
    API_POKE,
    PER_PAGE,
    OFFESET,
    POKEMON,
    NEXT_POKEMON,
    limit
}