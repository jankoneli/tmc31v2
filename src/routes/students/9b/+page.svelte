<script>
    import Topbar from "../../topbar.svelte";
    const namesList = [
            "Aaron",
            "Agastya",
            "Ailsie",
            "Alves",
            "Angie",
            "Annestika",
            "Ardhani",
            "Beryl",
            "Brettcyo",
            "Darren",
            "Erik",
            "Esther",
            "Gabriel",
            "Gendis",
            "Hagia",
            "Hara",
            "Jeremy",
            "Joanna",
            "Jordy",
            "Kirenius",
            "Letisha",
            "Matteo",
            "Michael",
            "Orelio",
            "Porsea",
            "Putu",
            "Timothy",
            "Yolanda"
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
    <div class="p-24">
        <a class="text-5xl font-semibold text-zinc-500 cursor-pointer mr-6 hover:text-zinc-600" href="/students/9a">Class 9A</a>
        <a class="text-5xl font-semibold text-zinc-800 cursor-pointer">Class 9B</a>
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