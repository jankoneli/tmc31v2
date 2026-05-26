<script>
    import Topbar from "../../topbar.svelte";
    const namesList = [
        "Abraham",
        "Albert",
        "Panga",
        "Bradley",
        "Callysta",
        "Cornel",
        "Danisa",
        "Junjie",
        "Edrei",
        "Evan",
        "Giselle",
        "Gladys",
        "Hannah",
        "Hizkia",
        "Deepta",
        "Kenou",
        "Kevin",
        "David",
        "Lana",
        "Nathan",
        "Renata",
        "Sebastian",
        "Theodore",
        "Theophanie",
        "Timothy S.S.P",
        "Asyer",
        "Vicky",
        "Widya",
        "Samuel"
    ];
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap');
    *{
        font-family: "Fredoka", sans-serif;
    }
</style>
<main>
    <Topbar></Topbar>
    <div class="p-4 lg:p-24">
        <button class="text-3xl lg:text-5xl font-semibold text-zinc-800 cursor-pointer mr-6">Class 9A</button>
        <a class="text-3xl lg:text-5xl font-semibold text-zinc-500 cursor-pointer hover:text-zinc-600" href="/students/9b">Class 9B</a>
        <div class="text-3xl py-4 gap-3 grid grid-cols-3">
            {#each namesList as name}
                <div class="p-4 bg-zinc-200 border-b border-zinc-300 rounded-2xl">
                    <span class="font-bold text-zinc-400 mr-4">
                        {namesList.indexOf(name)+1}
                    </span>
                    <span>
                        {name}
                    </span>
                    <div class="bg-zinc-100 p-12 rounded-2xl mt-2"></div>
                </div>
            {/each}
        </div>
    </div>
</main>