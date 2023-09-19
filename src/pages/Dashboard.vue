<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import ImageLoader from "../components/LoadBitArray.vue";

const list = ref(null);

async function fetchData() {
  const apiUrl = "http://192.168.2.149:8090/api/product";
  axios
    .get(apiUrl)
    .then((response) => {
      // Handle the response data
      const data = response.data;
      list.value = data.dataProduct;
      console.log("Data from API:", data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Axios error:", error);
    });
}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="py-10">
    <h1 class="text-center font-bold py-10">LIST OF PRODUCT</h1>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="item in list"
        :key="item.DesignCode"
        class="m-10 bg-slate-400 rounded-lg p-4"
      >
        <ImageLoader :bitArray="item.ProductIMG" />
        <div class="">
          <h1>Product Code : {{ item.KodeProduct }}</h1>
          <h1>Produk Description : {{ item.ProductDesc }}</h1>
          <h1>Product Material : {{ item.ProductMaterial }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
