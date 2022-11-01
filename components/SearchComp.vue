<template>
  <div class="container">
    <input class="input" type="text" v-model="searchValue" ref="searchInput" />
    <ul v-if="data.status === 'OK'">
      <ListItem
        v-for="item in data.data.items"
        :key="item.description"
        :name="item.name"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import useData from "../composables/data";
import useSearch from "../composables/search";
export default {
  setup() {
    const { data } = useData();
    const { searchValue } = useSearch();
    const searchInput = ref(null);
    onMounted(() => {
      searchInput.value.focus();
    });
    return { data, searchValue, searchInput };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  .input {
    padding: 12px 16px;

    width: 320px;
    height: 48px;

    background: #ffffff;

    border: 1px solid #858c94;
    border-radius: 8px;
    margin: 0 auto;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: #09101d;

    opacity: 0.8;
  }
}
</style>
