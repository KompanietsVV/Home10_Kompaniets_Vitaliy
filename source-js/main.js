//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==
//operation addition
//Input numbers for operation
var number = []
for (var i = 0; i < 4; i++) {
  number.push(prompt("Input number"))
}

//call function
addition()

//function
function addition() {
  result = 0
  for (var i = 0; i < number.length; i++) {
    result = number[i] * 1 + result * 1

  }
  document.write(result)
}
//end operation addition

// subtraction
//Input numbers for operation
var number = []
for (var i = 0; i < 5; i++) {
  number.push(prompt("Input number"))
}

//call function
subtraction()


//Function
function subtraction() {

  for (var i = 0; i < number.length - 1; i++) {
    result = number[i] * 1 - number[i + 1] * 1
    document.write(number[i] * 1 + " - " + number[i + 1] * 1 + "=" + result + "<br />")
  }

}
//end subtraction

//multiplication
//Input numbers for operation
var number = []
for (var i = 0; i < 2; i++) {
  number.push(prompt("Input number"))
}

//call function
multiplication()

//Function
function multiplication() {
  result = 1
  for (var i = 0; i < number.length; i++) {
    result = number[i] * 1 * result

  }
  document.write(result)
}
//end multiplication

//division
//Input number for operation
var number = []
for (var i = 0; i < 2; i++) {
  number.push(prompt("Input number"))
}

//Call function
division()

//function
function division() {
  result = 1
  for (var i = 0; i < number.length - 1; i++) {
    if (number == 0) {
      document.write("divivsion by zero")
    }
    else {
      result = number[i] / number[i + 1]
    }
  }
  document.write(result)
}
//end division

//power
//Input number for operation
var number = []
for (var i = 0; i < 2; i++) {
  number.push(prompt("Input number"))
}

//Call function
power()

//Function
function power() {
  for (var i = 0; i < number.length - 1; i++) {
    var result = Math.pow(number[i], number[i + 1])
    document.write(result)
  }
}
//end power

// square root
//Input number for operation
var number = []
for (var i = 0; i < 1; i++) {
  number.push(prompt("Input number"))
}

//Call function
square_root()

//Function
function square_root() {
  for (var i = 0; i < number.length; i++) {
    var result = Math.sqrt(number[i])
    document.write(result)
  }
}
//end square root

//sinus
//Input number for operation
var number = []
for (var i = 0; i < 1; i++) {
  number.push(prompt("Input number"))
}

//Call function
sinus()

//Function
function sinus() {
  for (var i = 0; i < number.length; i++) {
    var result = Math.sin(Math.PI * number[i] / 180)
    document.write(result)
  }
}
// end sinus

//cosinus
//Input number for operation
var number = []
for (var i = 0; i < 1; i++) {
  number.push(prompt("Input number"))
}

//Call function
cosinus()

//function
function cosinus() {
  for (var i = 0; i < number.length; i++) {
    var result = Math.cos(Math.PI * number[i] / 180)
    document.write(result)
  }
}
//end cosinus

//factorial
//Input number for operation
var number = []
for (var i = 0; i < 1; i++) {
  number.push(prompt("Input number"))
}
//function
function factorial(i) {
  if (i < 0) {
    return -1
  }

  else if (i == 0) {
    return 1
  }

  else {
    return (i * factorial(i - 1))
  }
}

var result = factorial(number)
document.write(result)
//end factorial