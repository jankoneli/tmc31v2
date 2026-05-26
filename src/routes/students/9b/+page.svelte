<script>
    import Topbar from "../../topbar.svelte";
    import Studentviewer from "../../studentviewer.svelte";
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
    <div class="p-4 lg:p-24">
        <a class="text-3xl lg:text-5xl font-semibold text-zinc-500 cursor-pointer mr-6 hover:text-zinc-600" href="/students/9a">Class 9A</a>
        <a class="text-3xl lg:text-5xl font-semibold text-zinc-800 cursor-pointer">Class 9B</a>
        <Studentviewer class="9b" namesList={namesList} birthday={[]} hobbies={[]} quotes={[]}></Studentviewer>
    </div>
</main>