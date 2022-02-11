
const url = 'https://rickandmortyapi.com/api/character/3';


async function TraerPersonaje(){
    const response = await fetch(url);
    return response.json();
}


function TraerPersonajePromesa(){
    const response = fetch(url);
    return response.then(res => res.json()).catch(err => console.log(err));
}


export {
    TraerPersonaje,
    TraerPersonajePromesa
}