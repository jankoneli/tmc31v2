<script>
    import { DateTime } from "luxon";
    import Topbar from "./topbar.svelte";
    let daysleft = $state(0);
    let graduation = DateTime.fromISO("2026-06-12");
    daysleft = Math.ceil(graduation.diffNow("days").toObject().days)
</script>
<style>
     @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap');
    *{
        font-family: "Fredoka", sans-serif;
    }
</style>
<main class="h-full bg-zinc-50">
    <Topbar></Topbar>
    <div class="bg-blue-700 text-zinc-100 p-24 py-8">
        <h1 class="text-2xl">Reminder! <span class="font-semibold">{daysleft} days</span> left until graduation.</h1>
    </div>
    <div class="p-24 pb-12">
        <div class="mb-24 flex flex-col items-center">
            <h1 class="text-7xl text-center mb-12 font-italic font-thin text-blue-800">Welcome to<br> <span class="font-bold">TMC #31</span> </h1>
            <img src="bg.jpg" alt="" srcset="" class="rounded-xl h-128 hover:w-full object-cover w-[70%] duration-300">
            <div class="mt-12 flex gap-x-4">
                <a href="/archive" class="block transform translate-y-0 bg-red-700 hover:bg-red-800 border-b-4 hover:border-b-0 hover:translate-y-1 border-red-900 text-2xl text-zinc-50 p-4 py-2 rounded-xl font-bold duration-200">Open Image Collections</a>
                <a href="/archive" class="block transform translate-y-0 bg-yellow-700 hover:bg-yellow-800 border-b-4 hover:border-b-0 hover:translate-y-1 border-yellow-900 text-2xl text-zinc-50 p-4 py-2 rounded-xl font-bold duration-200">Who We Are</a>
            </div>
        </div>
    </div>
    <div class="flex gap-x-24 px-24 bg-blue-700">
        <div class="pt-24">
            <h1 class="text-zinc-50 text-6xl font-bold">This is Tirtamarta Cinere</h1>
        </div>
        <div class="py-24 ml-auto">
            <img src="/halftone_white.png" alt="" srcset="" class="w-160 ml-auto">
        </div>
    </div>
</main>