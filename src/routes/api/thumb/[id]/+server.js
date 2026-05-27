import { IMMICH_KEY, IMMICH_URL } from "$env/static/private";

export async function GET({params, fetch}) {
    const {id} = params;

    const res = await fetch(IMMICH_URL+"/api/assets/"+id+"/thumbnail?size=preview", {
        headers: {
            'x-api-key': IMMICH_KEY
        }
    });

    const imageBuffer = await res.arrayBuffer();

    return new Response(imageBuffer);
}