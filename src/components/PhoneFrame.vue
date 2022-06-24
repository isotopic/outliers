<template>
  <div class="phone-frame">

    <TransitionGroup name="list" tag="div">
      <div v-if="page === 'home'">
        <img class="fakes" src="../assets/fake-header.png" />
        <div class="minibox-container">
          <BalanceBox :balance="balance" />
          <CalculatorBox @go="changePage('calculator')" />
        </div>
        <img class="fakes" src="../assets/fake-bottom.png" />
      </div>

      <div v-if="page === 'calculator'">
        <CalculatorScreen @go="changePage('home')" :balance="balance" />
      </div>
    </TransitionGroup>

  </div>
</template>

<script>
import BalanceBox from './BalanceBox.vue'
import CalculatorBox from './CalculatorBox.vue'
import CalculatorScreen from './CalculatorScreen.vue'
export default {
  name: 'PhoneFrame',
  data() {
    return {
      page: 'home',
      balance: 5000
    }
  },
  components: {
    CalculatorBox,
    BalanceBox,
    CalculatorScreen
  },
  methods: {
    changePage(page) {
      this.page = page;
    }
  }
}
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.list-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.list-leave-from {
  transform: translateY(0px);
  opacity: 1;
}

.list-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.phone-frame {
  max-width: 428px;
  margin: 0 auto;
  margin-top: 50px;
  margin-top: 50px;
  padding: 0;
  clear: both;
  background-color: #f4f4f4;
}

.fakes {
  width: 100%;
  margin: 0;
  padding: 0;
  clear: both;
}



.phone-frame {
  width: 100%;
  margin: 0;
}

.fakes:first-child,
.fakes:last-child {
  border-radius: 0px;
}

.minibox-container {
  background-color: #4ca73d;
  margin: -6px 0 0 0;
  padding: 4px 12px;
}

.mini-box {
  padding: 0 18px;
  border: 1px solid transparent;
  margin: 8px 0 0 0;
  border-radius: 15px;
  background-color: #1c8914;
  clear: both;
}

.minibox-container {
  background-color: #4ca73d;
  margin: -6px 0 0 0;
  padding: 4px 3vw;
}

.mini-box {
  padding: 0 18px;
  border: 1px solid transparent;
  margin: 8px 0 0 0;
  border-radius: 15px;
  background-color: #1c8914;
  clear: both;
}

.mini-box .title {
  font-size: 18px;
  margin: 20px 0 20px;
  padding: 0;
  font-weight: bold;
}

.mini-box .amount {
  font-size: 30px;
  margin: -15px 0 15px 0;
  padding: 0;
  font-weight: bold;
  letter-spacing: -1px;
}


/* DESKTOP */
@media (min-width: 428px) {
  .phone-frame {
    max-width: 428px;
    margin: 0 auto;
    margin-top: 50px;
    margin-top: 50px;
    padding: 0;
    clear: both;
    border-radius: 30px;
  }

  .phone-frame .fakes:first-child {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  .phone-frame .fakes:last-child {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .minibox-container {
    padding: 4px 15px;
  }

  .mini-box {
    border: 1px solid transparent;
    border-radius: 25px;
    background-color: #1c8914;
    clear: both;
  }



}
</style>
