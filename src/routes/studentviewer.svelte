<script>
    let data = $props();
    let colors = ["text-red-700", "text-yellow-800", "text-blue-800", "text-zinc-400"]
</script>
<div class="text-xl lg:text-3xl py-4 gap-3 grid grid-cols-1 lg:grid-cols-2">
    {#each data.namesList as name}
        <div class="p-4 bg-zinc-200 border-b border-zinc-300 rounded-xl lg:rounded-2xl">
            <span class="font-bold {colors[data.namesList.indexOf(name)%4]} lg:mr-4 mr-2 lg:text-3xl text-2xl">
                {data.namesList.indexOf(name)+1}
            </span>
            <span>
                {name}
            </span>
            <div class="bg-zinc-100 p-4 flex justify-between gap-x-2 lg:rounded-2xl mt-2">
                <div>
                    <p class="text-md lg:text-xl"> 
                        <b class="mr-2 text-zinc-800">Birthdate:</b>{data.birthday[name]} <br>
                        <b class="mr-2 text-zinc-800">Quote:</b>{data.quotes[name]} <br>
                        <b class="mr-2 text-zinc-800">Hobbies:</b>{data.hobbies[name]}
                    </p>
                </div>
                <img src="/u/{data.class}/{data.namesList.indexOf(name)+1}.png" alt="" srcset="" class="w-20 lg:w-32 border-2 border-zinc-200 rounded-lg lg:rounded-xl"></div>
            </div>
    {/each}
</div>