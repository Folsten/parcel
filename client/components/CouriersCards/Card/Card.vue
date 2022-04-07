<template>
  <div class="bg-white shadow-md rounded">
    <div class="flex flex-col p-5 h-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="rounded overflow-hidden">
            <nuxt-picture width="40" quality="100" :src="this.fullLogoUrl" />
          </div>
          <NuxtLink to="/" class="font-montserrat font-semibold text-lg ml-3">
            {{ name }}
          </NuxtLink>
        </div>
        <!-- <div class="flex">
          <i class="fas fa-link text-grey"></i>
        </div> -->
        <!-- <div class="flex items-center">
          <div>
            <i class="fas fa-star text-secondary"></i>
            <i class="fas fa-star text-secondary"></i>
            <i class="fas fa-star text-secondary"></i>
            <i class="fas fa-star text-secondary"></i>
            <i class="fas fa-star-half-alt text-secondary"></i>
          </div>
          <div class="ml-2 font-medium text-grey">
            (56)
          </div>
        </div> -->
      </div>
      <div class="pt-5 text-text">{{ shortDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "logoUrl", "shortDescription"],
  computed: {
    fullLogoUrl({ $config: { apiURL } }) {
      return apiURL + this.logoUrl;
    },
  },
};
</script>
