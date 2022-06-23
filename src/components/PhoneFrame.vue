<template>
  <div class="phone-frame">
    <img alt="App header" src="../assets/fake-header.png"/>
    <div class="minibox-container">
      <BalanceBox />
      <CalculatorBox />
    </div>
    <img alt="App bottom" src="../assets/fake-bottom.png"/>
  </div>
</template>

<script>
import BalanceBox from './BalanceBox.vue'
import CalculatorBox from './CalculatorBox.vue'
export default {
  name: 'PhoneFrame',
  props: {
    msg: String
  },
  components: {
    CalculatorBox,
    BalanceBox
  }
}
</script>
s
<style scoped>
.phone-frame{
  max-width: 768px;
  margin: 0 auto;
  margin-top:50px;
  margin-top:50px;
  padding: 0;
  clear: both;
}
.phone-frame > img {
  width: 100%;
  margin: 0;
  padding: 0;
  clear: both;
}

.phone-frame > img:first-child {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.phone-frame > img:last-child {
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

@media (max-width: 768px){
  .phone-frame{
    width: 100%;
    margin: 0;
  }
  .phone-frame > img:first-child, .phone-frame > img:last-child {
    border-radius: 0px;
  }
}

.minibox-container{
  background-color: #4ca73d;
  margin: -6px 0 0 0;
  padding: 4px 25px;
}

.mini-box{
  padding: 0 28px;
  border: 1px solid transparent;
  margin: 15px 0 0 0;
  border-radius: 25px;
  background-color: #1c8914;
  clear: both;
}

.mini-box .title{
  margin: 0 !important;
  padding: 0;
  font-size: 30px;
  font-weight: bold;
}

</style>
