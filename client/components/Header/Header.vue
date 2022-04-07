<template>
  <div class="w-full flex justify-center h-20 items-center duration-200">
    <div class="container justify-between">
      <div class="flex">
        <NuxtLink to="/" class="font-montserrat text-2xl font-bold"
          >ParcelsFinder</NuxtLink
        >
        <!-- <div class="ml-12 font-montserrat text-sm font-semibold items-center flex cursor-pointer">
          <i class="fas fa-globe flex text-primary"></i>
          <span class="pl-2 pr-2">Language</span>
          <i class="fas fa-chevron-down text-xs"></i>
        </div> -->
      </div>
      <nav class="flex items-center">
        <NuxtLink to="/couriers" class="mr-6 font-semibold text-sm font-montserrat"
          >Couriers</NuxtLink
        >
        <NuxtLink to="/about-us" class="ml-6 mr-6 font-semibold text-sm font-montserrat"
          >About us</NuxtLink
        >
        <NuxtLink to="/contact" class="ml-6 mr-6 font-semibold text-sm font-montserrat"
          >Contact</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>
