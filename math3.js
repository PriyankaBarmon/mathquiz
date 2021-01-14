var n1,
  n2,
  ans,
  sign = ["+", "-", "*", "/", "%"],
  i;
window.onload = () => {
  document.getElementById("ans").value = "";
  n1 = Math.floor(Math.random() * 10 + 1);
  n2 = Math.floor(Math.random() * 10 + 1);
  i = Math.floor(Math.random() * 5);
  document.querySelector(".sign").textContent = `${sign[i]}`;
  document.getElementById("v1").value = n1;
  document.getElementById("v2").value = n2;
  switch (sign[i]) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    case "%":
      ans = n1 % n2;
      break;
  }
};
const jsGame = () => {
  var usera = document.getElementById("ans").value;
  if (usera == ans) {
    alert("well done!your ans is correct");
  } else {
    alert("correct ans is " + ans + " ,try again");
  }
  
  window.location.reload();
};
