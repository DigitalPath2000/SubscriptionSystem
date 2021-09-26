basic = function() {
  document.getElementById("price").value = 10;
}
full = function() {
  document.getElementById("price").value = 95;
}
allAccess = function() {
  document.getElementById("price").value = 195;
}
familyPlan = function() {
  document.getElementById("price").value = 295;
}

getPercent = function() {
    switch(document.getElementById("household_size").value) {
    case "2":
      sizeArray = [50, 40, 30, 20, 15, 15];
      break;
    case "3":
      sizeArray = [50,40,30,20,15,15];
      break;
    case "4":
      sizeArray = [50,40,30,30,15,15];
      break
    case "5":
      sizeArray = [50,40,30,30,20,15];
      break;
    case "6":
      sizeArray = [50,50,40,30,20,20];
      break
    case "7":
      sizeArray = [50,50,40,30,30,20];
      break
    case "8":
      sizeArray = [50,50,40,40,30,30];
      break
    case "9":
      sizeArray = [50,50,50,40,40,40];
      break
    }

  console.log(sizeArray);
  var household_income = document.getElementById("household_income").value;
  console.log(household_income);

  var discount_percent = sizeArray[household_income];
  console.log(discount_percent);
  document.getElementById("discount").value = discount_percent.toFixed(2);

  var numVal1 = Number(document.getElementById("price").value);
  var numVal2 = Number(document.getElementById("discount").value) / 100;


  var totalValue = numVal1 - (numVal1 * numVal2)
  document.getElementById("total").value = totalValue.toFixed(2);
}
