<template>
  <div class="w-full flex justify-center bg-darkAction pt-16 pb-6">
    <div class="container flex-col">
      <div class="flex justify-between flex-wrap md:justify-center">
        <div class="flex flex-col pb-10">
          <NuxtLink
            to="/"
            class="text-white text-4xl sm:text-3xl font-montserrat font-semibold"
            >ParcelsFinder</NuxtLink
          >
          <div class="flex text-xl justify-between pt-3">
            <NuxtLink to="/"
              ><i class="fab fa-facebook text-white duration-200"></i
            ></NuxtLink>
            <NuxtLink to="/"
              ><i class="fab fa-twitter text-white duration-200"></i
            ></NuxtLink>
            <NuxtLink to="/"
              ><i class="fab fa-youtube text-white duration-200"></i
            ></NuxtLink>
            <NuxtLink to="/"><i class="fab fa-vk text-white duration-200"></i></NuxtLink>
          </div>
        </div>
        <ul class="flex flex-col leading-10 pb-10 md:w-full md:text-center">
          <li class="pb-2">
            <NuxtLink to="/" class="text-white font-montserrat font-semibold"
              >TRACKER</NuxtLink
            >
          </li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Track a parcel</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Couriers</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">About us</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Contact</NuxtLink></li>
        </ul>
        <ul class="flex flex-col leading-10 pb-10 md:w-full md:text-center">
          <li class="pb-2">
            <NuxtLink to="/" class="text-white font-montserrat font-semibold"
              >POPULAR COURIERS</NuxtLink
            >
          </li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Amazon Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">US PS Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">FedEx Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">UPS Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">DHL eCommerce Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Hermes Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Shein Order Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Freight Tracking with PRO Number</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Air Cargo and Freight Tracking</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Sea Cargo Container Tracking</NuxtLink></li>
        </ul>
        <ul class="flex flex-col leading-10 md:w-full md:text-center">
          <li class="pb-2">
            <NuxtLink to="/" class="text-white font-montserrat font-semibold"
              >COMPANY</NuxtLink
            >
          </li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Terms</NuxtLink></li>
          <li><NuxtLink to="/" class="text-darkAction hover:text-white duration-200">Privacy Policy</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
