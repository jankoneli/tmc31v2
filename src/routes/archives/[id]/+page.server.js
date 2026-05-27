import { IMMICH_KEY, IMMICH_URL } from "$env/static/private";

export async function load({params, fetch}){
    const {id} = params;
    const res = await fetch(IMMICH_URL+"/api/albums/"+id, {
        headers: {
            'x-api-key': IMMICH_KEY
        }
    })
    const images = await res.json();
    return {"name":images.albumName, "assets":images.assets}
}