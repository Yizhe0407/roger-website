<template>
    <div class="flex justify-center">
        <div class="max-w-4xl my-10 px-3 w-full flex">
            <!-- 内容区域 -->
            <div class="flex-grow">
                <h1 class="text-3xl text-center font-bold py-6 px-2">
                    國教署薦派優異學生赴海外專業研習：德國之旅
                </h1>
                <section id="day1">
                    <Day1 />
                </section>
                <section id="day2">
                    <Day2 />
                </section>
                <section id="day3">
                    <Day3 />
                </section>
                <section id="day4">
                    <Day4 />
                </section>
                <section id="day5">
                    <Day5 />
                </section>
                <section id="day6">
                    <Day6 />
                </section>
                <section id="day7">
                    <Day7 />
                </section>
                <section id="day8">
                    <Day8 />
                </section>
                <section id="day9">
                    <Day9 />
                </section>
                <section id="day10-11">
                    <Day10-11 />
                </section>
                <section id="day12">
                    <Day12 />
                </section>
                <section id="day13">
                    <Day13 />
                </section>
                <section id="day14">
                    <Day14 />
                </section>
            </div>

            <div>
                <!-- 目錄 -->
                <div class="hidden 2xl:block w-48 ml-8 flex-shrink-0 p-4 fixed ">
                    <h2 class="text-xl font-bold mb-4">目錄</h2>
                    <ul>
                        <li :class="{ 'text-yellow-500': activeSection === 'day1' }">
                            <router-link to="#day1">第一天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day2' }">
                            <router-link to="#day2">第二天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day3' }">
                            <router-link to="#day3">第三天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day4' }">
                            <router-link to="#day4">第四天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day5' }">
                            <router-link to="#day5">第五天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day6' }">
                            <router-link to="#day6">第六天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day7' }">
                            <router-link to="#day7">第七天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day8' }">
                            <router-link to="#day8">第八天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day9' }">
                            <router-link to="#day9">第九天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day10-11' }">
                            <router-link to="#day10-11">第十、十一天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day12' }">
                            <router-link to="#day12">第十二天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day13' }">
                            <router-link to="#day13">第十三天</router-link>
                        </li>
                        <li :class="{ 'text-yellow-500': activeSection === 'day14' }">
                            <router-link to="#day14">第十四天</router-link>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSection: 'day1',  // Initially set to the first section
        };
    },
    methods: {
        onScroll() {
            const sections = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10-11', 'day12', 'day13', 'day14'];
            let currentSection = '';

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            }
            this.activeSection = currentSection || sections[0];  // Fallback to the first section if none are active
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
};
</script>
