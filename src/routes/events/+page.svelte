<style>
     @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap');
    *{
        font-family: "Fredoka", sans-serif;
    }
</style>
<script>
    import Topbar from "../topbar.svelte";
    import Underbuilding from "../underbuilding.svelte";
</script>
<main>
    <Topbar></Topbar>
    <Underbuilding></Underbuilding>
    <div class="lg:p-24 p-4">
        <h1 class="text-3xl lg:text-5xl font-semibold text-zinc-800">Events</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 lg:mt-12 mt-4">
            <div class="flex-col flex border-zinc-400 border rounded-lg p-4">
                <img src="/bg.jpg" alt="" srcset="" class="rounded-md">
                <h1 class="text-2xl mt-2 text-zinc-800 font-semibold">Studi Sosial</h1>
                <button class="w-fit ml-auto bg-red-700 p-1.5 px-3 rounded-lg text-zinc-50 font-semibold">Learn More</button>
            </div>
        </div>
    </div>
</main>