<script setup lang="ts">
import type { Products } from '~/types/Products' 

const tabs = [
  { label: 'New Arrival', id: 1 },
  { label: 'Bestseller', id: 2 },
  { label: 'Featured Products', id: 3 }
] as const

type TabLabel = typeof tabs[number]['label']

const activeTab = ref<TabLabel>(tabs[0].label)

const categoryUrl = computed(() => {
  const id = tabs.find(t => t.label === activeTab.value)?.id
  return `http://localhost:1452/api/category/${id}`
})

const { data: products, pending } = await useFetch<Products[]>(categoryUrl, {
  default: () => []
})

const selectTab = (label: TabLabel) => {
  activeTab.value = label
}
</script>

<template>

  <div class="bg-[#211C24] text-white w-full px-10 pt-10 overflow-hidden">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div class="flex-1 pb-10">
        <h1 class="text-[25px] text-[#909090]">Pro.Beyond.</h1>
        <h1 class="text-[96px] leading-tight font-bold">IPhone 14 Pro</h1>
        <h1 class="text-[20px] text-[#909090] italic">Created to change everything for the better. For everyone</h1>
        <NuxtLink to="/catalog">
          <button
            class="mt-10 border-2 border-white px-14 py-4 rounded italic text-[#FFFFFF] hover:bg-white hover:text-black transition-colors duration-300">
            Shop now
          </button>
        </NuxtLink>
      </div>
      <div class="flex-1 flex justify-center md:justify-end self-end">
        <img src="/Iphone Image.png" alt="iPhone 14 Pro" class="w-full max-w-[400px] h-auto object-contain block" />
      </div>
    </div>
  </div>


  <div class="flex flex-col lg:flex-row w-full">

    <div class="w-full lg:w-1/2 flex flex-col">

      <div class="bg-white w-full relative overflow-hidden min-h-[320px]">
        <img src="/PlayStation.png" class="absolute left-[-40px] bottom-0 h-[90%] object-contain" />
        <div class="relative z-10 ml-auto w-[52%] px-8 lg:px-12 py-10">
          <h1 class="text-[30px] lg:text-[42px] leading-[1.05] text-black font-light tracking-tight italic">
            Playstation 5
          </h1>
          <p class="text-[15px] text-[#86868b] mt-3 leading-relaxed max-w-[280px] italic">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>


      <div class="flex flex-row w-full">

        <div class="bg-[#f5f5f5] w-1/2 flex flex-row items-center py-8 relative overflow-hidden min-h-[220px]">
          <div class="w-[45%] flex items-center justify-center relative">
            <img src="/AirPodsPro.png" class="max-h-[180px] w-auto object-contain -translate-x-8 lg:-translate-x-12" />
          </div>
          <div class="w-[55%] pr-6 lg:pr-8">
            <h2 class="text-[28px] lg:text-[34px] leading-[1.05] text-black font-light tracking-tight italic">
              Apple<br />AirPods<br />Max
            </h2>
            <p class="text-[13px] md:text-[14px] text-[#86868b] mt-2 leading-relaxed italic">
              Computational audio.<br />Listen, it's powerful
            </p>
          </div>
        </div>


        <div class="bg-[#333333] w-1/2 relative overflow-hidden min-h-[220px]">
          <img src="/vision-pro.png" class="absolute left-0 top-[50%] w-[120px] object-contain -translate-y-1/2" />
          <div class="relative z-10 ml-auto w-[42%] px-6 py-8 h-full flex flex-col justify-center">
            <h2 class="text-[28px] lg:text-[34px] leading-[1.05] text-white font-light tracking-tight italic">
              Apple<br />Vision<br />Pro
            </h2>
            <p class="text-[14px] text-[rgba(255,255,255,0.55)] mt-2 leading-relaxed italic">
              An immersive<br />way to<br />experience<br />entertainment
            </p>
          </div>
        </div>
      </div>
    </div>
        <div class="bg-[#EDEDED] w-full lg:w-1/2 flex flex-row items-center relative overflow-hidden min-h-[540px]">
      <div class="relative z-10 pl-8 lg:pl-12 max-w-[320px]">
        <h1 class="text-[44px] md:text-[50px] leading-[1.05] text-black font-light tracking-tight">
          Macbook <span class="font-medium italic">Air</span>
        </h1>
        <p class="text-[14px] md:text-[15px] text-[#86868b] mt-3 leading-relaxed italic">
          The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
        </p>
        <NuxtLink to="/catalog">
          <button
            class="mt-5 border border-black/50 px-8 py-2.5 rounded-[8px] text-[14px] text-black hover:bg-black hover:text-white transition-all duration-300">
            Shop Now
          </button>
        </NuxtLink>
      </div>
      <div class="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-end pointer-events-none">
        <img src="/MacBook Pro 14.png"
          class="max-w-[130%] max-h-[95%] object-contain object-right-bottom translate-x-6 translate-y-4" />
      </div>
    </div>
  </div>


  <div class="bg-[#F8F8F8] py-16">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-[28px] text-black font-light italic tracking-tight mb-10">
        Browse By Category
      </h2>
      <div class="flex flex-wrap justify-center gap-5">

          <NuxtLink to="/catalog">
            <div
          class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <img src="/Phones1.png"/>
          <span class="text-[14px] text-black font-light italic">Phones</span>
        </div>
          </NuxtLink>
        

         <NuxtLink to="/catalog">
          <div
          class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <img src="/Smart Watches.png"/>
          <span class="text-[14px] text-black font-light italic">Smart Watches</span>
        </div>
         </NuxtLink>
        

         <NuxtLink to="/catalog">
          <div
          class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <img src="/Cameras.png"/>
          <span class="text-[14px] text-black font-light italic">Cameras</span>
        </div>
         </NuxtLink>
        

         <NuxtLink to="/catalog">
          <div
          class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <img src="/Headphones.png"/>
          <span class="text-[14px] text-black font-light italic">Headphones</span>
        </div>
         </NuxtLink>
        

         <NuxtLink to="/catalog">
          <div
          class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <img src="/Computers.png"/>
          <span class="text-[14px] text-black font-light italic">Computers</span>
        </div>
         </NuxtLink>
        
         <NuxtLink to="/catalog">
          <div
          class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
         <img src="/Gaming.png"/>
          <span class="text-[14px] text-black font-light italic">Gaming</span>
        </div>
         </NuxtLink>
        
      </div>
    </div>
  </div>


  <div class="max-w-7xl mx-auto px-6 py-16">

    <div class="flex items-center gap-8 mb-10 border-b border-gray-200">
      <button v-for="tab in ['New Arrival', 'Bestseller', 'Featured Products']" :key="tab" @click="selectTab(tab)"
        :class="[
          'pb-3 text-base font-medium transition-all duration-300',
          activeTab === tab
            ? 'text-black border-b-2 border-black'
            : 'text-gray-400 hover:text-gray-600 border-b-2 border-transparent'
        ]">
        {{ tab }}
      </button>
    </div>


    <div v-if="pending" class="flex justify-center items-center h-64">
      <p class="text-gray-500 italic">Загрузка товаров категории "{{ activeTab }}"...</p>
    </div>





    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


      <div v-if="!products?.length" class="col-span-4 text-center py-10 text-gray-500">
        В категории "{{ activeTab }}" пока нет товаров.
      </div>


      <ProductCard v-for="product in products?.slice(0, 8)" :key="product.id" :product="product" />

    </div>
  </div>


  <div class="max-w-7xl mx-auto px-6">
  <h2 class="mb-10 text-[28px] text-black font-light italic tracking-tight">
    Discounts up to -50%
  </h2>
</div>

  <Discount />
    <div class="relative w-full overflow-hidden h-[400px] md:h-[500px]">
    <img src="/Baner2.jpg" class="absolute inset-0 w-full h-full object-cover" alt="Banner" />
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <h1 class="text-[52px] md:text-[60px] leading-[1.05] text-white font-light tracking-tight text-center">
          Big Summer <span class="font-medium italic">Sale</span>
        </h1>
        <NuxtLink to="/catalog">
          <button
            class="mt-10 border-2 border-white px-14 py-4 rounded italic text-[#FFFFFF] hover:bg-white hover:text-black transition-colors duration-300">
            Shop now
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>

  <Footer />
</template>