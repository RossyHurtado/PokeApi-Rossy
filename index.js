const contenedorBulbasaur = document.querySelector('.contenedor-bulbasaur');
let apiBul;

function getBulbasaur(evolution){
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showBulbasaur(data);
        apiBul = data;
        return apiBul;
    })
}

function showBulbasaur(pokemon){

    const name = document.createElement('h2');
    name.textContent = pokemon.species.name;

    const gif = document.createElement('img');
    gif.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;

    contenedorBulbasaur.appendChild(gif);
    contenedorBulbasaur.appendChild(name);
}

getBulbasaur(1);

function showDetail(pokemon){
    const xp = document.createElement('h3');
    xp.textContent = pokemon.base_experience;

    const id = document.createElement('h3');
    id.textContent = pokemon.id;

    const height = document.createElement('h3');
    height.textContent = pokemon.height;

    const xpString = document.createElement('h3');
    xpString.textContent = "Base XP";

    const idString = document.createElement('h3');
    idString.textContent = "Id";

    const heightString = document.createElement('h3');
    heightString.textContent = "Height";

    const div = document.createElement('div');
    div.appendChild(xp);
    div.appendChild(id);
    div.appendChild(height);

    div.appendChild(xpString);
    div.appendChild(idString);
    div.appendChild(heightString);

    contenedorBulbasaur.appendChild(div);
}

contenedorBulbasaur.addEventListener('click', (e) => {
    showDetail(apiBul);
}, {once: true})


//charmander


const contenedorCharmander = document.querySelector('.contenedor-charmander');
let apiChar;

function getCharmander(evolution){
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showCharmander(data);
        apiChar = data;
        return apiChar;
    })
}

function showCharmander(pokemon){

    const name = document.createElement('h2');
    name.textContent = pokemon.species.name;

    const gif = document.createElement('img');
    gif.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;

    contenedorCharmander.appendChild(gif);
    contenedorCharmander.appendChild(name);
}

getCharmander(4);

function showChDetail(pokemon){
    const xp = document.createElement('h3');
    xp.textContent = pokemon.base_experience;

    const id = document.createElement('h3');
    id.textContent = pokemon.id;

    const height = document.createElement('h3');
    height.textContent = pokemon.height;

    const xpString = document.createElement('h3');
    xpString.textContent = "Base XP";

    const idString = document.createElement('h3');
    idString.textContent = "Id";

    const heightString = document.createElement('h3');
    heightString.textContent = "Height";

    const div = document.createElement('div');
    div.appendChild(xp);
    div.appendChild(id);
    div.appendChild(height);

    div.appendChild(xpString);
    div.appendChild(idString);
    div.appendChild(heightString);

    contenedorCharmander.appendChild(div);
}

contenedorCharmander.addEventListener('click', (e) => {
    showChDetail(apiChar);
}, {once: true})


//squirtle


const contenedorSq = document.querySelector('.contenedor-squirtle');
let apiSq;

function getSquirtle(evolution){
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showSquirtle(data);
        apiSq = data;
        return apiSq;
    })
}

function showSquirtle(pokemon){

    const name = document.createElement('h2');
    name.textContent = pokemon.species.name;

    const gif = document.createElement('img');
    gif.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;

    contenedorSq.appendChild(gif);
    contenedorSq.appendChild(name);
}

getSquirtle(7);

function showSqDetail(pokemon){
    const xp = document.createElement('h3');
    xp.textContent = pokemon.base_experience;

    const id = document.createElement('h3');
    id.textContent = pokemon.id;

    const height = document.createElement('h3');
    height.textContent = pokemon.height;

    const xpString = document.createElement('h3');
    xpString.textContent = "Base XP";

    const idString = document.createElement('h3');
    idString.textContent = "Id";

    const heightString = document.createElement('h3');
    heightString.textContent = "Height";

    const div = document.createElement('div');
    div.appendChild(xp);
    div.appendChild(id);
    div.appendChild(height);

    div.appendChild(xpString);
    div.appendChild(idString);
    div.appendChild(heightString);

    contenedorSq.appendChild(div);
}

contenedorSq.addEventListener('click', (e) => {
    showSqDetail(apiSq);
}, {once: true})