<template>
    <h2 class="text-2xl p-2">第八天 2023/6/11</h2>
    <div class="border-b-2 my-4 border-[#9ca3b1]"></div>
    <div class="text-lg">
        <p class="p-2">今天整個早上我們度過在坐車的時間，直到中午才終於到達目的地。經過一頓美味的午餐後，我們前往了旁邊的蒂蒂湖。</p>
        <div class="p-2">
            <NuxtImg class="rounded-md" src="/Titisee.jpg" placeholder="/loading.gif" loading="lazy"
                sizes="100vw sm:50vw md:400px" />
        </div>
        <p class="p-2">上船後，我發現我們竟然包船!</p>

        <div class="flex flex-wrap">
            <div class="p-2 w-full md:w-2/3">
                <NuxtImg class="rounded-md" src="/20230611_150253.jpg" placeholder="/loading.gif" loading="lazy"
                    sizes="100vw sm:50vw md:400px" />
            </div>
            <div class="p-2 w-full md:w-1/3">
                <NuxtImg class="rounded-md" src="/20230611_143325.jpg" placeholder="/loading.gif" loading="lazy"
                    sizes="100vw sm:50vw md:400px" :modifiers="{ rotate: 90 }" />
            </div>
        </div>

        <p class="p-2">
            在蒂蒂湖上航行時，我們欣賞到了湖光山色的美景。湖水湛藍清澈，周圍的山脈和綠樹映襯著湖泊，形成了一幅壯麗的畫卷。我們能夠隨意選擇停留的地點，欣賞景色，拍照留念，同時也可以享受和朋友們的談笑風生。
        </p>

    </div>
</template>