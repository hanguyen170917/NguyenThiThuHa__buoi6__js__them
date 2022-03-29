document.getElementById("btnSubmit").addEventListener("click", function () {
  var number = document.getElementById("txtNumber").value * 1;
  var result = "";
  if (number < 2) {
    alert("Vui long nhap lai so");
  } else {
    for (var i = 2; i <= number; i++) {
      var count = 0;
      for (var j = 1; j <= number; j++) {
        if (i % j === 0) {
          count++;
        }
      }
      if (count == 2) {
        result += i + " ";
      }
    }
    document.getElementById("footerPrimeNumber").innerHTML = result;
    document.getElementById("footerPrimeNumber").style.fontSize = "20px";
  }
});
