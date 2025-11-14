<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";

// async components for code splitting
const CurrencyConverter = defineAsyncComponent(
  () => import("@/components/CurrencyConverter.vue"),
);

// static import for loader to show during suspense
import AnimationGenerator from "@/components/AnimationGenerator.vue";

// animation
// json animations
import loadingAnimation from "@/assets/animations/loading.json";

// constants
import { CURRENCY_API_URL } from "@/constants";

// composables
import useFetch from "../composables/fetch";

const { loading, error, data, fetchData } = useFetch();

// fetch currency data on mount
onMounted(() => {
  fetchData(CURRENCY_API_URL);
});
</script>

<template>
  <Suspense>
    <template #default>
      <CurrencyConverter :loading="loading" :error="error" :data="data" />
    </template>
    <template #fallback>
      <div class="loading-container">
        <AnimationGenerator :data="loadingAnimation" />
      </div>
    </template>
  </Suspense>
</template>
