<script>
    let show = $state("hidden");
    function toggle(){
        if(show == "hidden"){
            show = "";
        }else{
            show = "hidden";
        }
    }
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
<header class="lg:px-24 py-8 flex gap-x-2 border-b border-zinc-400 lg:justify-start justify-end">
    <a href="/">
        <img src="/tmc31.png" alt="" srcset="" class="w-12 opacity-100 hover:opacity-50 duration-200">
    </a>
    <button class="lg:hidden mr-8 ml-[25%] lg:ml-0 text-4xl text-zinc-500" onclick={toggle}><i class="bi bi-list"></i></button>
    <div class="hidden lg:flex ml-12 text-zinc-500 font-bold text-3xl items-center justify-between w-full">
        <div class="flex gap-x-8">
            <a href="/archives" class="hover:text-yellow-600 duration-200">Archives</a>
            <a href="/events" class="hover:text-red-800 duration-200">Events</a>
            <a href="/students" class="hover:text-blue-700 duration-200">Students</a>
            <a href="https://immich.tmc9a.my.id/share/ThwcZIcDoIrcFkz4lJgXI-HakJobFSoFuju9Y4qvSZLJItxd6kFYU4hjLaSlpbOid9c" class="hover:text-yellow-600 duration-200">School</a>
        </div>
        <div>
            <a href="https://forms.gle/ZK8TQA1Ygw92RoF57" class="block bg-blue-700 text-zinc-50 text-2xl p-2 px-3 rounded-xl border-b-4 border-blue-900 transform translate-y-0 hover:translate-y-1 hover:border-b-0 duration-200"><i class="bi bi-cloud-arrow-up-fill"></i> Submit Time Capsule</a>
        </div>
    </div>
</header>
<div class="flex flex-col font-semibold text-zinc-900 {show}">
    <a href="/archives" class="p-2 px-4">Archives</a>
    <hr class="border-zinc-400">
    <a href="/events" class="p-2 px-4">Events</a>
    <hr class="border-zinc-400">
    <a href="/students" class="p-2 px-4">Students</a>
    <hr class="border-zinc-400">
    <a href="https://immich.tmc9a.my.id/share/ThwcZIcDoIrcFkz4lJgXI-HakJobFSoFuju9Y4qvSZLJItxd6kFYU4hjLaSlpbOid9c" class="p-2 px-4">School</a>
    <hr class="border-zinc-400">
    <a href="https://forms.gle/ZK8TQA1Ygw92RoF57" class="bg-blue-800 text-zinc-50 p-2 px-4">Submit Time Capsule</a>
</div>