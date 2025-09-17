import { pathOr } from "ramda";
import { ref } from "vue";
import axios from "axios";
import { isNilOrEmpty } from "../utils";

const useFetch = () => {
  const data = ref<Record<string, number> | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const fetchData = async (apiUrl: string) => {
    loading.value = true;
    try {
      const response = await axios.get(apiUrl);
      if (!isNilOrEmpty(response)) {
        const value = pathOr(null, ["data", "conversion_rates"], response);
        if (!isNilOrEmpty(value)) {
          data.value = value;
        }
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err);
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
};

export default useFetch;
