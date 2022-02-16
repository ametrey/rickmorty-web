
const baseUrl = "https://rickandmortyapi.com/api/";
const characters = "character";
const locations = "location";
const episodes = "episode";

async function getCharacters(pag) {
  const finalUrl = baseUrl + characters + `/?page=${pag}`;
  const response = await fetch(finalUrl);
  return response.json();
}

async function getCharactersById(id) {
  const finalUrl = baseUrl + characters + `/${id}`;
  const response = await fetch(finalUrl);
  return response.json();
}

async function getLocations(pag) {
    const finalUrl = baseUrl + locations + `/?page=${pag}`;
    const response = await fetch(finalUrl);
    return response.json();
  }
  
  async function getLocationsById(id) {
    const finalUrl = baseUrl + locations + `/${id}`;
    const response = await fetch(finalUrl);
    return response.json();
  }

  async function getEpisodes(pag) {
    const finalUrl = baseUrl + episodes + `/?page=${pag}`;
    const response = await fetch(finalUrl);
    return response.json();
  }
  
  async function getEpisodesById(id) {
    const finalUrl = baseUrl + episodes + `/${id}`;
    const response = await fetch(finalUrl);
    return response.json();
  }

export { getCharacters, getCharactersById, getLocations, getLocationsById };