<script setup lang="ts">
// Import CurrencyConverterWrapper as a namespace with Header and Footer as properties
import CCWrapper from "./components/CCWrapper.vue";

// static import for loader to show during suspense
import AnimationGenerator from "./components/AnimationGenerator.vue";

// animation
// json animations
import loadingAnimation from "@/assets/animations/loading.json";

// constants
import { LABELS } from "@/constants";
</script>

<template>
  <Suspense>
    <template #default>
      <CCWrapper>
        <CCWrapper.Header />
        <main>
          <RouterView />
        </main>
        <CCWrapper.Footer :content="LABELS.FOOTER_TEXT()" />
      </CCWrapper>
    </template>
    <template #fallback>
      <AnimationGenerator :data="loadingAnimation" />
    </template>
  </Suspense>
</template>
