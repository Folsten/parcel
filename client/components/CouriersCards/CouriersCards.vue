<template>
  <div class="grid grid-cols-2 md:grid-cols-1 w-full pt-8 gap-6">
    <CouriersCardsCard
      v-for="card in cards"
      :key="card.id"
      :name="card.attributes.name"
      :logoUrl="card.attributes.logo.data.attributes.url"
      :shortDescription="card.attributes.shortDescription"
    ></CouriersCardsCard>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cards: [],
    };
  },
  async fetch() {
    let cards = await this.$axios.$get("api/couriers?populate=logo");
    this.cards = cards.data;
  },
  created() {
    // setTimeout(() => {
    //   console.log(this.cards)
    // }, 1000);
  },
};
</script>
