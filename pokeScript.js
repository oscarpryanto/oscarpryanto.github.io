    const button = document.getElementById('btn')
    const content = document.getElementById('content')
  
    const fetchPokemon = async (url) => {
      const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=30`)
      Promise.all(data.results.map(result => {
        fetchAndPrintPokemon(result.url)
      }))
    }

    button.addEventListener('click', fetchPokemon)

    const fetchData = async (url) => {
      console.log(url)
      const response = await fetch(url, {method: "GET"})

      const json = await response.json()
      return json
    }

    const fetchAndPrintPokemon = async (url) => {
      const pokemon = await fetchData(url)
      const { id, name, sprites, types } = pokemon
      const sprite = sprites['front_default']
      const type = types[0]['type']['name']

      content.innerHTML += `
        <div class="content-item type-${type}">
          <p>${id}: <span class="capital">${name}</span></p>
          <img src="${sprite}" alt="image" />
          <p>Type: <span class="capital">${type}</span></p>
        </div>
      `
    }

 
