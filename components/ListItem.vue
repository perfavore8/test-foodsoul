<template>
  <li class="item">
    {{ name }}
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const name = props.name;
    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  border-bottom: 1px solid #dadee3;
  width: 50vw;
  padding: 8px 16px;
  margin-bottom: 12px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;

  color: #394452;
  list-style-type: none;
}
</style>
