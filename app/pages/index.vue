<template>
  <div class="bg-[#211C24] text-white w-full px-10 pt-10 overflow-hidden">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      

      <div class="flex-1 pb-10"> 
        <h1 class="text-[25px] text-[#909090]">Pro.Beyond.</h1>
        <h1 class="text-[96px] leading-tight font-bold">IPhone 14 Pro</h1>
        <h1 class="text-[20px] text-[#909090] italic">Created to change everything for the better. For everyone</h1>
        <NuxtLink to="/catalog">
            <button class="mt-10 border-2 border-white px-14 py-4 rounded italic text-[#FFFFFF] hover:bg-white hover:text-black transition-colors duration-300">
            Shop now
        </button>
        </NuxtLink>
      </div>
      <div class="flex-1 flex justify-center md:justify-end self-end">
          <img src="/Iphone Image.png" alt="iPhone 14 Pro" class="w-full max-w-[400px] h-auto object-contain block"/>
      </div>
    </div>
  </div>
  


<div class="flex flex-col lg:flex-row w-full">

    <!-- Левая колонка -->
    <div class="w-full lg:w-1/2 flex flex-col">

      <!-- Карточка PlayStation -->
      <!-- ИЗМЕНЕНИЕ: min-h-[400px] заменено на min-h-[320px] -->
      <div class="bg-white w-full relative overflow-hidden min-h-[320px]">

        <img
          src="/PlayStation.png"
          class="absolute left-[-40px] bottom-0 h-[90%] object-contain"
        />

        <!-- ИЗМЕНЕНИЕ: py-16 заменено на py-10 для уменьшения высоты блока -->
        <div class="relative z-10 ml-auto w-[52%] px-8 lg:px-12 py-10">
          <!-- ИЗМЕНЕНИЕ: text-[50px] -> text-[42px] -->
          <h1 class="text-[30px] lg:text-[42px] leading-[1.05] text-black font-light tracking-tight italic">
            Playstation 5
          </h1>

          <!-- ИЗМЕНЕНИЕ: mt-5 -> mt-3 -->
          <p class="text-[15px] text-[#86868b] mt-3 leading-relaxed max-w-[280px] italic">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <!-- Нижний ряд (AirPods и Vision Pro) -->
      <div class="flex flex-row w-full">

        <!-- Карточка AirPods -->
        <!-- ИЗМЕНЕНИЕ: min-h-[272px] убрано, добавлено flex-1 чтобы растянуть, высота задается родителем или контентом -->
        <div class="bg-[#f5f5f5] w-1/2 flex flex-row items-center py-8 relative overflow-hidden min-h-[220px]">
          
          <div class="w-[45%] flex items-center justify-center relative">
            <!-- ИЗМЕНЕНИЕ: max-h уменьшена -->
            <img
              src="/AirPodsPro.png"
              class="max-h-[180px] w-auto object-contain -translate-x-8 lg:-translate-x-12"
            />
          </div>

          <div class="w-[55%] pr-6 lg:pr-8">
            <!-- ИЗМЕНЕНИЕ: text-[50px] -> text-[34px] -->
            <h2 class="text-[28px] lg:text-[34px] leading-[1.05] text-black font-light tracking-tight italic">
              Apple<br />AirPods<br />Max
            </h2>
            <p class="text-[13px] md:text-[14px] text-[#86868b] mt-2 leading-relaxed italic">
              Computational audio.<br />Listen, it's powerful
            </p>
          </div>
        </div>

        <!-- Карточка Vision Pro -->
        <!-- ИЗМЕНЕНИЕ: min-h-[300px] заменено на min-h-[220px] чтобы совпадать с соседом -->
        <div class="bg-[#333333] w-1/2 relative overflow-hidden min-h-[220px]">

          <img
            src="/vision-pro.png"
            class="absolute left-0 top-[50%] w-[120px] object-contain -translate-y-1/2"
          />

          <div class="relative z-10 ml-auto w-[42%] px-6 py-8 h-full flex flex-col justify-center">
            <!-- ИЗМЕНЕНИЕ: text-[50px] -> text-[34px] -->
            <h2 class="text-[28px] lg:text-[34px] leading-[1.05] text-white font-light tracking-tight italic">
              Apple<br />
              Vision<br />
              Pro
            </h2>

            <p class="text-[14px] text-[rgba(255,255,255,0.55)] mt-2 leading-relaxed italic">
              An immersive<br />
              way to<br />
              experience<br />
              entertainment
            </p>
          </div>

        </div>

      </div>
    </div> 


    <!-- Правая колонка (MacBook) -->
    <!-- ИЗМЕНЕНИЕ: min-h-[600px] -> min-h-[380px] (вместе с двумя нижними левыми) -->
    <div class="bg-[#EDEDED] w-full lg:w-1/2 flex flex-row items-center relative overflow-hidden min-h-[540px]">
      
      <div class="relative z-10 pl-8 lg:pl-12 max-w-[320px]">
        <!-- ИЗМЕНЕНИЕ: text-[60px] -> text-[50px] -->
        <h1 class="text-[44px] md:text-[50px] leading-[1.05] text-black font-light tracking-tight">
          Macbook <span class="font-medium italic">Air</span>
        </h1>
        <p class="text-[14px] md:text-[15px] text-[#86868b] mt-3 leading-relaxed italic">
          The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
        </p>
        
        <!-- ИЗМЕНЕНИЕ: mt-8 -> mt-5 -->
        <NuxtLink to="/catalog">
          <button
            class="mt-5 border border-black/50 px-8 py-2.5 rounded-[8px] text-[14px] text-black hover:bg-black hover:text-white transition-all duration-300">
            Shop Now
          </button>
        </NuxtLink>
      </div>

      <div class="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-end pointer-events-none">
        <img
          src="/MacBook Pro 14.png"
          class="max-w-[130%] max-h-[95%] object-contain object-right-bottom translate-x-6 translate-y-4"
        />
      </div>
    </div>

  </div>




  <!-- Browse By Category -->
  <div class="bg-[#F8F8F8] py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-[28px] text-black font-light italic tracking-tight">
          Browse By Category
        </h2>
        <div class="flex gap-4">
          <button class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-5">
        <div class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <svg class="w-8 h-8 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
          </svg>
          <span class="text-[14px] text-black font-light italic">Phones</span>
        </div>

        <div class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <svg class="w-8 h-8 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-[14px] text-black font-light italic">Smart Watches</span>
        </div>

        <div class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <svg class="w-8 h-8 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/>
          </svg>
          <span class="text-[14px] text-black font-light italic">Cameras</span>
        </div>

        <div class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <svg class="w-8 h-8 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
          </svg>
          <span class="text-[14px] text-black font-light italic">Headphones</span>
        </div>

        <div class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <svg class="w-8 h-8 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
          </svg>
          <span class="text-[14px] text-black font-light italic">Computers</span>
        </div>

        <div class="w-[136px] h-[136px] bg-[#EBEBEB] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
          <svg class="w-8 h-8 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"/>
          </svg>
          <span class="text-[14px] text-black font-light italic">Gaming</span>
        </div>
      </div>
    </div>
  </div>


  <div class="flex items-center gap-8 mb-8 border-b border-gray-200">
      <button class="pb-3 text-base font-medium text-black border-b-2 border-black">
        New Arrival
      </button>
      <button class="pb-3 text-base font-medium text-gray-400 hover:text-gray-600">
        Bestseller
      </button>
      <button class="pb-3 text-base font-medium text-gray-400 hover:text-gray-600">
        Featured Products
      </button>
    </div>



<ProductCard/>


  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    
    <div class="flex flex-col items-center p-10 text-center bg-white">
      <div class="mb-8">
        <img src="/watch.png" alt="Popular Products" class="max-h-48 object-contain">
      </div>
      <h3 class="text-3xl font-light mb-4 text-black">Popular Products</h3>
      <p class="text-sm text-gray-500 mb-8 leading-relaxed italic">
        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
      </p>
     
      <button class="w-full py-3 px-6 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm font-light">
        Shop Now
      </button>
    </div>

    <div class="flex flex-col items-center p-10 text-center bg-gray-50">
      <div class="mb-8">
        <img src="/ipad.png" alt="iPad Pro" class="max-h-48 object-contain">
      </div>
      <h3 class="text-3xl font-light mb-4 text-black">iPad Pro</h3>
      <p class="text-sm text-gray-500 mb-8 leading-relaxed italic">
        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
      </p>
      <button class="w-full py-3 px-6 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm font-light">
        Shop Now
      </button>
    </div>

    <div class="flex flex-col items-center p-10 text-center bg-gray-100">
      <div class="mb-8">
        <img src="/samsung.png" alt="Samsung Galaxy" class="max-h-48 object-contain">
      </div>
      <h3 class="text-3xl font-light mb-4 text-black">Samsung Galaxy</h3>
      <p class="text-sm text-gray-500 mb-8 leading-relaxed italic">
        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
      </p>
      <button class="w-full py-3 px-6 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm font-light">
        Shop Now
      </button>
    </div>

    <div class="flex flex-col items-center p-10 text-center bg-[#2b2b2b]">
      <div class="mb-8">
        <img src="/macbook.png" alt="Macbook Pro" class="max-h-48 object-contain">
      </div>
      <h3 class="text-3xl font-light mb-4 text-white">Macbook Pro</h3>
      <p class="text-sm text-gray-400 mb-8 leading-relaxed italic">
        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
      </p>
      <button class="w-full py-3 px-6 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-light">
        Shop Now
      </button>
    </div>

  </div>

  <Discount/>



<div class="relative w-full overflow-hidden h-[400px] md:h-[500px]">
    
    <img 
      src="/Baner2.jpg"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Banner"
    />
    
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center">

      <div class="flex flex-col items-center">
          
          <h1 class="text-[52px] md:text-[60px] leading-[1.05] text-white font-light tracking-tight text-center">
              Big Summer <span class="font-medium italic">Sale</span>
          </h1>

          <NuxtLink to="/catalog">
              <button class="mt-10 border-2 border-white px-14 py-4 rounded italic text-[#FFFFFF] hover:bg-white hover:text-black transition-colors duration-300">
                  Shop now
              </button>
          </NuxtLink>
          
      </div>
    </div>
</div>

<Footer/>
</template>