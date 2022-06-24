<template>
  <div class="mini-box mini-box-calculator" @click="$emit('go')">
    <div class="title">Turbinar saldo</div>
    <div class="amount">
      <span class="material-symbols-outlined">add_circle</span> R$ 282,69 <span class="time">em 6 meses</span>
    </div>
    <div class="material-symbols-outlined next-button">arrow_forward_ios</div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorBox',
  props: {

  }
}
</script>

<style scoped>
.mini-box-calculator {
  background-color: white;
  position: relative;
  cursor: pointer;
}

.title {
  color: black;
}

.amount {
  color: #1b8914;
}

.amount .time {
  font-size: 0.6em;
  color: #666 !important;
  letter-spacing: 0 !important;
}

.material-symbols-outlined {
  font-size: 0.7em;
}

.next-button {
  position: absolute;
  right: 10px;
  top: calc(50% - 10px);
  color: #666;
  font-size: 18px;
}
</style>
