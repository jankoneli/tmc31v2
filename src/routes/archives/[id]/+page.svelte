<style>
     @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap');
    *{
        font-family: "Fredoka", sans-serif;
    }
</style>
<script>
    import { onMount } from "svelte";
    import Topbar from "../../topbar.svelte";
    import BiggerPicture from "bigger-picture";
    import "bigger-picture/css"; 
    
    let { data } = $props(); 

    let visibleCount = $state(15);
    let displayed = $derived(data.assets.slice(0, visibleCount));

    // 1. Track column count based on screen size
    let columnCount = $state(2);
    
    $effect(() => {
        const updateColumns = () => {
            columnCount = window.innerWidth >= 1024 ? 5 : 2;
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    });

    // 2. Distribute images evenly across the columns (Round-Robin style)
    let columns = $derived.by(() => {
        let buckets = Array.from({ length: columnCount }, () => []);
        displayed.forEach((item, index) => {
            buckets[index % columnCount].push(item);
        });
        return buckets;
    });

    let bp;
    $effect(() => {
        bp = BiggerPicture({
            target: document.body
        });
    });

    onMount(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && visibleCount < data.assets.length) {
                visibleCount += 15;
            }
        }, { rootMargin: "300px" });

        const trigger = document.getElementById("scroll-trigger");
        if (trigger) observer.observe(trigger);
        
        return () => observer.disconnect();
    });

    function openGallery(e) {
        const link = e.target.closest("#images a");
        if (!link) return;
        
        e.preventDefault();
        bp.open({
            items: document.querySelectorAll("#images a"),
            el: link
        });
    }
</script>

<main>
    <Topbar></Topbar>
    <h1 class="m-8 lg:m-24 lg:my-12 lg:text-4xl text-3xl font-semibold text-zinc-900">
        <a href="/archives" class="translate-y-0 hover:-translate-y-2 duration-200 block w-fit">Archives/</a>
        <span class="text-zinc-500">{data.name}</span>
    </h1>    
    
    <div 
        class="lg:p-24 lg:pt-0 p-8 py-8 grid grid-cols-2 lg:grid-cols-5 gap-4 alignment-start" 
        id="images" 
        onclick={openGallery}
    >
        {#each columns as column}
            <div class="flex flex-col gap-4 h-fit">
                {#each column as image (image.id)}
                    {#if image.type === 'VIDEO'}
                        <a 
                            class="block translate-y-0 hover:-translate-y-2 duration-200 relative group cursor-pointer" 
                            href="/api/image/{image.id}" 
                            data-sources={JSON.stringify([{ src: `/api/image/${image.id}`, type: 'video/mp4' }])}
                            data-width={image.width} 
                            data-height={image.height}
                        >
                            <img 
                                src="/api/thumb/{image.id}" 
                                alt="" 
                                style="aspect-ratio: {image.width} / {image.height};" 
                                class="w-full rounded-lg opacity-0 duration-500 block" 
                                onload={(e) => e.currentTarget.classList.remove("opacity-0")}
                            >
                            <div class="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
                                <div class="bg-zinc-900/90 text-white p-2 rounded-full border border-zinc-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-4 h-4">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    {:else}
                        <a 
                            class="block translate-y-0 hover:-translate-y-2 duration-200 cursor-pointer" 
                            href="/api/image/{image.id}" 
                            data-img="/api/image/{image.id}" 
                            data-width={image.width} 
                            data-height={image.height}
                        >
                            <img 
                                src="/api/thumb/{image.id}" 
                                alt="" 
                                style="aspect-ratio: {image.width} / {image.height};" 
                                class="w-full rounded-lg opacity-0 duration-500 block" 
                                onload={(e) => e.currentTarget.classList.remove("opacity-0")}
                            >
                        </a>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>

    {#if visibleCount < data.assets.length}
        <div id="scroll-trigger" class="h-24 flex items-center justify-center text-zinc-400 text-xs tracking-widest font-medium">
            LOADING MORE MEMORIES...
        </div>
    {/if}
</main>