var counter = (function () {

  //  var value = 0;

    var add = function(num1, num2) {
        return num1 + num2;
    };
 
    var subtract = function(num1, num2) {
        return num1 - num2;
    };
 
    return {
        add: add,
        subtract: subtract,
        counter: counter
    };
}());