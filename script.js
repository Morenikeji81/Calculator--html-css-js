let input = document.getElementById("input");
function AddUp(name) {
  input.value += name;
}
function sum() {
  input.value = eval(input.value);
}
function Default() {
  input.value = "";
}
function del() {
  input.value = input.value.slice(0, -1);
}
