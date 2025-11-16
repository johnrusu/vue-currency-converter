<template>
  <div class="header-container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/icons/logo.png" :alt="APP_NAME" />
        </b-navbar-item>
      </template>
      <template #start>
        <RouterLink
          class="navbar-item"
          v-for="(path, pathIndex) in computedRouterPaths"
          :to="path.path"
          :key="`${path.name}-link-${pathIndex}`"
        >
          <span :class="`${path.icon} max-md:mr-4`"></span>
          <span>{{ path.name }}</span>
        </RouterLink>
      </template>
    </b-navbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// constannts
import { RouterLink } from "vue-router";
import { APP_NAME, ROUTER_LINKS } from "@/constants";
const computedRouterPaths = computed(() => ROUTER_LINKS);
</script>
