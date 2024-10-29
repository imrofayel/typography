<template>

  <header class="text-3xl flex">

    <div>Typography</div>

  </header>

  <div class="flex flex-col space-y-6 my-6">
    <input v-model="inputText" type="text"
      class="focus:outline-none focus:border-none placeholder:text-gray-300 outline-none rounded p-2 text-2xl text-gray-300"
      placeholder="Type something..." />

    <div v-for="(value, key) in typographyData" :key="key">

      <div class="bg-[#27272A] inline-block relative rotate-[-4.5deg] right-4 text-white text-lg p-1 px-3 rounded-full my-4">{{ value.class }}</div>

      <div class="w-full space-y-4">
        <span :class="value.class" class="decoration-gray-100 underline-offset-4">
          {{ inputText.length > 0 ? inputText : value.title }}
        </span>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface TypographyItem {
  title: string;
  class: string;
}

interface Typography {
  [key: string]: TypographyItem;
}

import typography from '../data/typography.json' with { type: 'json' };

const typographyData = typography as Typography;
const inputText = ref<string>('');
</script>

<style></style>
