<script>
    import Topbar from "../../topbar.svelte";
    import Studentviewer from "../../studentviewer.svelte";
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
    const birthday = {
        "Cornel": "13/12/2009",
        "Hizkia": "10/10/2010"
    }
    const hobbies = {
        "Hizkia": "Keyboard Enthusiast."
    }
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
        <Studentviewer class="9a" namesList={namesList} birthday={birthday} hobbies={hobbies}></Studentviewer>
    </div>
</main>