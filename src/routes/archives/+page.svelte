<style>
     @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap');
    *{
        font-family: "Fredoka", sans-serif;
    }
</style>
<script>
    import Topbar from "../topbar.svelte";
    
    // Destructure 'data' out of the props object
    let { data } = $props(); 
</script>

<main>
    <Topbar></Topbar>
    <h1 class="m-4 mb-0 lg:m-24 lg:my-12 lg:text-4xl text-3xl font-semibold text-zinc-900">Archives</h1>
    <div class="p-4 lg:p-24 lg:py-0 grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4">
        {#each data.albums as album}
            <a href="/archives/{album.id}">
                <div class="border border-zinc-300 bg-zinc-200 text-zinc-50 rounded-xl font-semibold transform translate-y-0 hover:-translate-y-2 duration-200">
                    <img src="/api/thumb/{album.albumThumbnailAssetId}" alt="" srcset="" class="rounded-t-xl object-cover h-48 lg:h-64 w-full">
                    <h1 class="m-4 my-2 text-zinc-900 lg:text-xl">{album.albumName}</h1>
                    <p>{album.assets[0]}</p>
                </div>
            </a>
            
        {/each}
    </div>
    
</main>