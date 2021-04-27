function sumValues() {
  var num0, num1, num2, res;
  num0 = Number(document.formcalc.num0.value);
  num1 = Number(document.formcalc.num1.value);
  num2 = Number(document.formcalc.num2.value);
  res = num0 * num1 * num2;
  document.formcalc.txtres.value = res;
}
