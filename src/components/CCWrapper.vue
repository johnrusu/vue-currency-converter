<script lang="ts">
import { type Component, defineComponent } from "vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

interface ParentType {
  Header: Component;
  Footer: Component;
}

// Create the base wrapper component
const CCWrapper = defineComponent({
  name: "CCWrapper",
  setup(_, { slots }) {
    return () => slots.default?.();
  },
}) as unknown as Component & ParentType;

// Attach child components as properties
CCWrapper.Header = Header;
CCWrapper.Footer = Footer;

export default CCWrapper;
</script>
<template>
  <div class="cc-wrapper">
    <slot></slot>
  </div>
</template>
