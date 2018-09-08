<template>
  <div id="number-picker">
    <div id="selected">{{ selectedNumber }}</div>
    <div id="picker">
      <span
        v-bind:key="number"
        v-for="number in numbers"
        @click="selectNumber(number)"
        class="number"
      >
        {{ number }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberPicker",
  methods: {
    selectNumber(number) {
      this.selectedNumber = number;
    }
  },
  data() {
    return {
      numbers: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
      selectedNumber: 0
    };
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
#selected {
  width: 100%;
  font-size: 144px;
  text-align: center;
}
#picker {
  position: fixed;
  bottom: 10px;
  text-align: center;
  width: 100%;
  padding-bottom: 25px;
}
.number {
  padding: 0px 10px;
  font-size: 24px;
}
@media not all and (hover: none) {
  .number:hover {
    cursor: pointer;
    color: blue;
  }
}
</style>
