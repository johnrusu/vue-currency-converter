<script setup lang="ts">
import { defineProps, ref, computed } from "vue";

// utils
import { isNilOrEmpty, isArrayNotEmpty } from "../utils";

// constants
import {
  APP_NAME,
  LABELS,
  ERROR_MESSAGES,
  DEFAULTS_CURRENCY,
} from "../constants";

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
const error = ref<string | null>(null);

const handleAmountChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!isNilOrEmpty(target.value)) {
    amount.value = target.value.replace(NUMBERS_REGEX, "");
  }
};

const convertAmount = () => {
  error.value = null;
  convertedAmount.value = null;

  if (isNilOrEmpty(props.data)) {
    error.value = ERROR_MESSAGES.NO_CURRENCY_DATA;
    return;
  }

  if (isNilOrEmpty(amount.value) || Number(amount.value) === 0) {
    error.value = ERROR_MESSAGES.INVALID_AMOUNT;
    return;
  }

  if (from.value === to.value) {
    error.value = ERROR_MESSAGES.SAME_CURRENCY;
    return;
  }
  const fromRate = props.data[from.value];
  const toRate = props.data[to.value];

  if (isNilOrEmpty(fromRate) || isNilOrEmpty(toRate)) {
    error.value = ERROR_MESSAGES.INVALID_CURRENCY;
    return;
  }
  const result = (Number(amount.value) / fromRate) * toRate;
  convertedAmount.value = result.toFixed(2);
  convertedAmount.value = `${LABELS.CONVERTED_AMOUNT}: ${convertedAmount.value} ${to.value}`;
};
</script>
<template>
  <div class="currency-converter-container container max-md:px-4">
    <nav class="panel is-primary currency-converter-panel">
      <p class="panel-heading"></p>
      <div class="panel-block flex flex-col items-center">
        <i class="fa-solid fa-money-bill-transfer text-7xl"></i>
        <p class="text-3xl font-bold my-4 text-center">
          {{ APP_NAME }}
        </p>
      </div>
      <div class="panel-block" v-if="loading && isNilOrEmpty(data)">
        <progress class="progress is-small is-primary w-full" max="100">
          Loading
        </progress>
      </div>
      <div v-else>
        <div class="panel-block">
          <b-field label="Amount" type="is-default" class="w-full">
            <b-input v-model="amount" @input="handleAmountChange"></b-input>
          </b-field>
        </div>
        <div class="panel-block" v-if="isArrayNotEmpty(currencies)">
          <div class="columns flex-1">
            <div class="column">
              <b-field :label="LABELS.FROM">
                <b-select v-model="from" expanded>
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
                <b-select v-model="to" expanded>
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
        <div class="panel-block" v-if="!isNilOrEmpty(convertedAmount)">
          <p class="text-2xl font-semibold text-center w-full p-4">
            {{ convertedAmount }}
          </p>
        </div>
        <div class="panel-block">
          <button
            class="button is-primary is-outlined is-fullwidth"
            @click="convertAmount"
          >
            {{ LABELS.CONVERT }}
          </button>
        </div>
        <div class="panel-block" v-if="!isNilOrEmpty(error)">
          <b-message type="is-danger" class="w-full">
            {{ error }}
          </b-message>
        </div>
      </div>
    </nav>
  </div>
</template>
