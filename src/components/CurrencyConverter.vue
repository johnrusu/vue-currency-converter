<script setup lang="ts">
import {
  defineProps,
  ref,
  computed,
  onUpdated,
  useTemplateRef,
  onMounted,
} from "vue";

// utils
import { isNilOrEmpty, isArrayNotEmpty } from "../utils";

// constants
import {
  LABELS,
  ERROR_MESSAGES,
  DEFAULTS_CURRENCY,
  APP_NAME,
} from "../constants";

// animations
import animation from "@/assets/animations/loading.json";

// components
import AnimationGenerator from "./AnimationGenerator.vue";
import ClipboardCopy from "./ClipboardCopy.vue";

const NUMBERS_REGEX = /[^0-9.,]/g;

const props = defineProps<{
  loading: boolean;
  error: string | null;
  data: any;
}>();

const currencies = computed(() => {
  if (!isNilOrEmpty(props.data)) {
    return Object.entries(props.data);
  }
  return [];
});

const amount = ref<string>(DEFAULTS_CURRENCY.AMOUNT);
const from = ref<string>(DEFAULTS_CURRENCY.FROM);
const to = ref<string>(DEFAULTS_CURRENCY.TO);
const convertedAmount = ref<string | null>(null);
const covertedAmountLabel = ref<string>("");
const localError = ref<string | null>(null);
const amountRef = useTemplateRef("amountInput");
const amountCopy = ref<boolean>(false);

const handleAmountChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!isNilOrEmpty(target.value)) {
    amount.value = target.value.replace(NUMBERS_REGEX, "");
    convertAmount();
  }
};

const convertAmount = () => {
  if (props.error || !isArrayNotEmpty(currencies.value)) return;
  localError.value = null;
  amountCopy.value = false;
  convertedAmount.value = null;

  if (isNilOrEmpty(props.data)) {
    localError.value = ERROR_MESSAGES.NO_CURRENCY_DATA;
    return;
  }

  if (isNilOrEmpty(amount.value) || Number(amount.value) === 0) {
    localError.value = ERROR_MESSAGES.INVALID_AMOUNT;
    return;
  }

  if (from.value === to.value) {
    localError.value = ERROR_MESSAGES.SAME_CURRENCY;
    return;
  }
  const fromRate = props.data[from.value];
  const toRate = props.data[to.value];

  if (isNilOrEmpty(fromRate) || isNilOrEmpty(toRate)) {
    localError.value = ERROR_MESSAGES.INVALID_CURRENCY;
    return;
  }
  const result = (Number(amount.value) / fromRate) * toRate;
  convertedAmount.value = result.toFixed(2);
  covertedAmountLabel.value = `${LABELS.CONVERTED_AMOUNT}: <u>${convertedAmount.value} ${to.value}</u>`;
};

const handleAmountCopy = () => {
  amountCopy.value = !amountCopy.value;
};

onUpdated(() => {
  if (!isNilOrEmpty(props.error)) {
    localError.value = props.error;
  }
});

onMounted(() => {
  if (!amountRef.value) return;
  const amountControl = amountRef.value.$el as HTMLInputElement;
  if (!isNilOrEmpty(amountControl)) {
    const amountElInput = amountControl.querySelector(
      "input"
    ) as HTMLInputElement;
    if (amountElInput) {
      amountElInput.focus();
      amountElInput.select();
    }
  }
});
</script>
<template>
  <div class="currency-converter-container container">
    <div v-if="loading">
      <AnimationGenerator :data="animation" />
    </div>
    <div
      v-if="isArrayNotEmpty(currencies) && !loading"
      class="currency-converter-inputs"
    >
      <div>
        <img
          src="@/assets/icons/logo.png"
          width="150"
          height="150"
          :alt="APP_NAME"
          class="m-auto"
        />
      </div>
      <div>
        <b-field label="Amount" type="is-default" class="w-full">
          <b-input
            v-model="amount"
            @input="handleAmountChange"
            ref="amountInput"
          ></b-input>
        </b-field>
      </div>
      <div v-if="isArrayNotEmpty(currencies)">
        <div class="columns flex-1">
          <div class="column">
            <b-field :label="LABELS.FROM">
              <b-select v-model="from" expanded @change="convertAmount">
                <option
                  v-for="(currency, index) in currencies"
                  :value="currency[0]"
                  :key="`${currency[0]}-${index}`"
                >
                  {{ currency[0] }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column">
            <b-field :label="LABELS.TO">
              <b-select v-model="to" expanded @change="convertAmount">
                <option
                  v-for="(currency, index) in currencies"
                  :value="currency[0]"
                  :key="`${currency[0]}-${index}`"
                >
                  {{ currency[0] }}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </div>
      <div
        v-if="!isNilOrEmpty(convertedAmount)"
        class="py-4 text-center w-full"
      >
        <div
          class="text-2xl font-semibold text-white"
          v-html="covertedAmountLabel"
        ></div>
        <ClipboardCopy
          v-if="
            !isNilOrEmpty(convertedAmount) && !isNilOrEmpty(to) && !amountCopy
          "
          class="text-center mt-4"
          :text="`${convertedAmount} ${to}`"
          @onAmountCopy="handleAmountCopy"
        />
      </div>
      <div v-if="isArrayNotEmpty(currencies)">
        <button class="button is-primary is-fullwidth" @click="convertAmount">
          {{ LABELS.CONVERT }}
          <span class="fas fa-exchange-alt ml-2"></span>
        </button>
      </div>
    </div>
    <div v-if="!isNilOrEmpty(localError)">
      <b-message type="is-danger" class="w-full">
        {{ localError }}
      </b-message>
    </div>
  </div>
</template>
