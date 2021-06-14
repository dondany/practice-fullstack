<template>
  <div class="calc-container">
    <div class="calc-header">
      <div class="equation">
        <span class="expression">{{ expression }}</span>
        <input v-model="input" />
      </div>
    </div>
    <div class="calc-buttons">
      <div class="btn"><CalcButton @clicked="clicked" :value="'7'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'8'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'9'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'÷'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'4'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'5'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'6'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'x'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'1'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'2'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'3'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'-'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'.'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'0'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'±'" /></div>
      <div class="btn"><CalcButton @clicked="clicked" :value="'+'" /></div>
      <div class="btn btn-w2">
        <CalcButton @clicked="clicked" :value="'C'" />
      </div>
      <div class="btn btn-w2">
        <CalcButton @clicked="clicked" :value="'='" />
      </div>
    </div>
  </div>
</template>

<script>
import CalcButton from "./CalcButton";

export default {
  components: {
    CalcButton,
  },
  data() {
    return {
      expression: '',
      currentNumber: '',
      lastNumber: '',
      currentOperator: '',
      input: '',
    };
  },
  methods: {
    clicked(value) {
      if (value === "C") {
        this.expression = '';
        this.currentOperator = '';
        this.lastNumber = '';
        this.currentNumber = '';
        this.currentOperator = '';
        this.input = '';
        return;
      } else if (value === '±') {
        this.input = -this.input;
      } else if (this.isOperator(value)) {
        console.log("op");
        if (this.isOperator(this.lastInput) && this.currentNumber === '') {
          console.log("change op");
          this.expression = this.expression.substring(0, this.expression.length -1) + value;
        } else {
          var operator = this.currentOperator;
          if (operator === 'x') {
            operator = '*';
          }
          if (operator === '÷') {
            operator = '/';
          }
          this.expression += this.input + value;
          if (this.currentNumber != '' && this.lastNumber != '') {
            this.input = eval(this.lastNumber + operator + this.currentNumber)
          }
        }
        this.lastNumber = this.input;
        this.currentNumber = '';
        this.currentOperator = value;
        if (value === '=') {
          this.expression = '';
          this.currentOperator = '';
        }
      } else {
        console.log("num");
        if (this.currentNumber === '') {
          this.input = value;
        } else {
          this.input += value;
        }
        this.currentNumber = this.input;
      } 
    },
    isOperator(input) {
      return input === "+" || input === "-" || input === "÷" || input === "x" || input === '=';
    },
  },
  computed: {
    lastInput: function () {
      return this.expression[this.expression.length -1];
    }
  }
};
</script>


<style scoped>
.calc-container {
  width: 20rem;
  height: 20rem;
}

.calc-header {
  background-color: #fff;
  width: 100%;
  height: 30%;
  position: relative;
}

.equation {
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: #000;
  padding-right: 5px;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
}

.expression {
  color: rgb(116, 116, 116);
}

.equation input {
  border: none;
  text-align: right;
  width: 100%;
  height: 60%;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  bottom: 0;
}

.calc-buttons {
  width: 100%;
  height: 100%;
  background-color: #ffb703;
}

.btn {
  display: inline-block;
  width: 25%;
  height: 20%;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.btn-w2 {
  width: 50%;
  height: 20%;
}
</style>