import { IMMICH_KEY } from "$env/static/private"

const IMMICH_URL = "https://immich.tmc9a.my.id";

export async function load ( {fetch} ) {
    const res = await fetch(IMMICH_URL + '/api/albums', {
        headers: {
            'x-api-key': IMMICH_KEY,
            'Accept': 'application/json'
        }
    });
    
    const albums = await res.json();
    const albumsredacted = [];
    albums.forEach(element => {
        if(element.description != "hidden"){
            albumsredacted.push(element)
        }
    });
    // LOOK AT YOUR TERMINAL FOR THIS:
    console.log("Immich Response:", albumsredacted); 
    
    return { albums:albumsredacted };
}