<template>
<header class="text-3xl mb-4 flex justify-between">
    <div>Colors</div>

    <NuxtLink to="/">Typography</NuxtLink>
  </header>

  <div class="mb-6">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by hex code..."
      class="w-full max-w-md px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none text-[#27272A] placeholder:text-gray-300"
    />
  </div>
  
  <div v-if="Object.keys(filteredColors).length === 0" class=" text-center text-xl text-gray-300 py-8">
    No colors found matching your search.
  </div>

  <div v-else class="w-full flex flex-wrap">
    <div v-for="(colorSet, theme) in filteredColors" :key="theme" class="w-full mb-6">

      <div class="bg-[#27272A] inline-block relative rotate-[-4.5deg] right-4 text-white text-xl capitalize p-1 px-3 rounded-full my-4">{{ theme }}</div>

      <div class="flex flex-wrap gap-6">
        <div v-for="(color, name) in colorSet" :key="name">
          <div :style="{ backgroundColor: color }"
            class="flex p-2 justify-end border items-end w-20 h-20 border-gray-200">
          </div>
          <div class="w-20 my-3">{{ name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import colors from '../data/colors.json' with { type: 'json' };
import { ref, computed } from 'vue';

interface ColorSet {
  [key: string]: string;
}

interface Colors {
  [key: string]: ColorSet;
}

const searchQuery = ref('');

const filteredColors = computed(() => {
  if (!searchQuery.value) return colors as Colors;
  
  const result: Colors = {};
  for (const [theme, colorSet] of Object.entries(colors as Colors)) {
    const filteredSet: ColorSet = {};
    for (const [name, color] of Object.entries(colorSet)) {
      if (color.toLowerCase().includes(searchQuery.value.toLowerCase())) {
        filteredSet[name] = color;
      }
    }
    if (Object.keys(filteredSet).length > 0) {
      result[theme] = filteredSet;
    }
  }
  return result;
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
