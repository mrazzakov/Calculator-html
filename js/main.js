function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calc;

    switch (op) {
      case "add":
        calc = a + b;
        break;
      case "sub":
        calc = a - b;
        break;
      case "mult":
        calc = a * b;
        break;
      case "div":
        calc = a / b;
      default:
        a + b;
     }

  document.querySelector("#results").innerHTML = calc;
}

var val = "";

function addVal(buttonVal) {
  var buttonVal = document.querySelector("#buttons").value;
  val += buttonVal;
  document.querySelector("#output").innerHTML = val;
}
