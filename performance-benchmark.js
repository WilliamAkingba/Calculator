const Benchmark = require('benchmark');
const Calculator = require('./calculator');

const calculator = new Calculator();

const suite = new Benchmark.Suite();

suite
  .add('Addition', function () {
    calculator.add(5, 3);
  })
  .add('Subtraction', function () {
    calculator.subtract(10, 4);
  })
  .add('Multiplication', function () {
    calculator.multiply(7, 6);
  })
  .add('Division', function () {
    calculator.divide(9, 3);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest operation is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
