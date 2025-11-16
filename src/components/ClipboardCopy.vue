<template>
  <div class="clipboard-copy">
    <b-button
      type="is-info"
      outlined
      @click="() => copyText(text)"
      v-if="!isNilOrEmpty(text)"
    >
      <span class="fas fa-copy mr-2"></span>
      <span>
        {{ LABELS.COPY_TO_CLIPBOARD }}
      </span>
    </b-button>
  </div>
</template>
<script setup lang="ts">
import { watch, getCurrentInstance, ref, defineEmits } from "vue";

const props = defineProps<{
  text?: string | null;
}>();

const emits = defineEmits<{
  (e: "onAmountCopy"): void;
}>();

const instance = getCurrentInstance();
const buefy = instance?.appContext.config.globalProperties.$buefy;

// constants
import { LABELS, DEFAULT_TIMEOUT_COPY_CLIPBOARD } from "../constants";

// hooks
import useClipboard from "../composables/clipboard";
// utils
import { isNilOrEmpty } from "@/utils";

const { copyToClipboard } = useClipboard();
const text = ref<string>(props.text || "");

const copyText = async (textToCopy: string = "") => {
  await copyToClipboard(textToCopy);
  buefy?.snackbar.open({
    message: LABELS.TEXT_COPIED,
    type: "is-warning",
    position: "is-top",
    duration: DEFAULT_TIMEOUT_COPY_CLIPBOARD,
    onAction: () => {
      text.value = "";
      emits("onAmountCopy");
    },
  });
  setTimeout(() => {
    text.value = "";
    emits("onAmountCopy");
  }, DEFAULT_TIMEOUT_COPY_CLIPBOARD);
};

watch(
  () => props.text,
  (newText, prevText) => {
    text.value = !isNilOrEmpty(newText) && newText !== prevText ? newText! : "";
  },
  { immediate: true }
);
</script>
