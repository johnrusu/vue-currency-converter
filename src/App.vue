<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";

import { CURRENCY_API_URL } from "./constants";

// composables
import useFetch from "./composables/fetch";

const { loading, error, data, fetchData } = useFetch();

// components
const CurrencyConverter = defineAsyncComponent(
  () => import("./components/CurrencyConverter.vue")
);

// fetch currency data on mount
onMounted(() => {
  fetchData(CURRENCY_API_URL);
});
</script>

<template>
  <CurrencyConverter :loading="loading" :error="error" :data="data" />
</template>
