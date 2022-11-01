import useData from "../composables/data";

export default function useSearch() {
  const { getData } = useData();

  const searchValue = ref<string>("");

  watch(searchValue, () => {
    getData(searchValue.value);    
  });

  return {searchValue}
}