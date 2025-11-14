<script setup lang="ts">
import { pathOr } from "ramda";

const props = defineProps<{
  content: string;
}>();

// utils
import { isNilOrEmpty } from "@/utils";

const content = pathOr("", ["content"], props);
</script>

<template>
  <div class="footer-container" v-if="!isNilOrEmpty(content)">
    {{ content }}
  </div>
</template>
