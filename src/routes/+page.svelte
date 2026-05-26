<script>
    import { DateTime } from "luxon";
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
    <header class="px-24 py-8 flex gap-x-2 border-b border-zinc-400 items-center">
        <img src="/tmc31.png" alt="" srcset="" class="w-12">
        <div class="ml-12 text-blue-700 font-bold text-3xl hover:text-blue-800">
            <a href="/archive">Archives</a>
        </div>
    </header>
    <div class="bg-blue-700 text-zinc-100 p-24 py-8">
        <h1 class="text-2xl">Reminder! <span class="font-semibold">{daysleft} days</span> left until graduation.</h1>
    </div>
    <div class="p-24 pt-24">
        <div class="flex justify-center gap-x-8 gap-y-2">
            <div class="flex flex-col">
                <h1 class="text-7xl mb-12 font-italic font-thin text-blue-800 mr-8">Welcome to<br> <span class="font-bold">TMC #31</span> </h1>
                <button class="bg-red-800 text-2xl rounded-2xl p-3 w-fit px-5 hover:bg-red-900 cursor-pointer text-zinc-50 font-bold">Our Story</button>
            </div>
            <div class="w-[70%] flex-col flex gap-y-2">
                <img src="/bg.jpg" alt="" srcset="" class="rounded-2xl hover:transform hover:-translate-y-3 duration-200">
                <p class="text-xl font-semibold text-zinc-600">Studi Sosial K9 di Temanggung, Oktober 2026</p>
            </div>
        </div>
    </div>
</main>