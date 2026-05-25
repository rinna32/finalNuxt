<template>
  <div class="flex flex-col items-center justify-center gap-3 p-10 bg-[#FAFAFA] rounded-2xl w-fit min-w-[280px]">
    

    <span class="text-[64px] font-light text-black leading-none">
      {{ value }}
    </span>


    <span class="text-base text-[#B0B0B0] italic font-light">
      of 125 reviews
    </span>


    <div class="flex justify-center">
      <el-rate
        v-model="value"
        allow-half
        disabled
        :colors="colors"
        :void-color="voidColor"
        class="custom-rate"
      />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(4.8)

const colors = ['#F7BA2A', '#F7BA2A', '#F7BA2A']
const voidColor = '#E4E7ED'
</script>

<style scoped>
.custom-rate :deep(.el-rate__item) {
  cursor: default;
}

.custom-rate :deep(.el-rate__icon) {
  font-size: 24px; 
  margin-right: 4px;
}

.custom-rate :deep(.el-rate__icon:last-child) {
  margin-right: 0;
}
</style>