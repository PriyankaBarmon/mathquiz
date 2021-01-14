var n1, n2, ans;
const genQuestion = () => {
  document.getElementById("ans").value = "";
  n1 = Math.floor(Math.random() * 10 + 1);
  n2 = Math.floor(Math.random() * 10 + 1);
  document.getElementById("v1").value = n1;
  document.getElementById("v2").value = n2;

  ans = n1 + n2;
};
const jsGame = () => {
  var usera = document.getElementById("ans").value;
  if (usera == ans) {
    alert("well done!your ans is correct");
  } else {
    alert('correct ans is ' + ans + ', try again');
  }
  genQuestion();
};
