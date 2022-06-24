<template>
  <div class="mini-box">
    <div class="title">Saldo</div>
    <div class="amount">R$ 5.250,00</div>
    <div class="material-symbols-outlined eye-button">visibility_off</div>
  </div>
</template>

<script>
export default {
  name: 'BalanceBox',
  props: {

  }
}
</script>

<style scoped>
.mini-box {
  position: relative;
}

.eye-button {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #e0f598;
  font-size: 22px;
}
</style>
