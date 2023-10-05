const buscarEnSpotify = async () => {
    let textoBusqueda = document.getElementById("textoBusqueda").value;

    const url = 'https://spotify23.p.rapidapi.com/search/?q=' + textoBusqueda + '&type=multi&offset=0&limit=5&numberOfTopResults=5';
    const options = {
        method: 'GET',
        headers: {
            
        }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    //console.log(result.artists);

        let contenidoHTML = ``;
        
        result.artists.items.forEach(artista => {
            contenidoHTML += `<div class="col-md-3">
            <div class="card border border-0 mb-3 bg-black text-white">
            <img src="${artista.data.visuals.avatarImage.sources[0].url}" class="img-fluid" alt="Artista">
            <div class="card-body">
                <p class="card-text">${artista.data.profile.name}</p>
            </div>
            </div>
            </div>`;
        });

        document.getElementById("results").innerHTML = contenidoHTML;
    } catch (error) {
	    document.getElementById("results").innerHTML = `<h5 class="text-center my-5">No se encontró el tema o el artista buscado!</h5>`;
    }
}

document.getElementById("btnBuscar").addEventListener("click", buscarEnSpotify);