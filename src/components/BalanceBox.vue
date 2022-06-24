<template>
  <div class="mini-box">
    <div class="title">Saldo</div>
    <div class="amount">R$ {{ formattedBalance }}</div>
    <div class="material-symbols-outlined eye-button">visibility_off</div>
  </div>
</template>

<script>
export default {
  name: 'BalanceBox',
  props: {
    balance: Number
  },
  computed: {
    formattedBalance() {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.balance).split("R$")[1]
    }
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
