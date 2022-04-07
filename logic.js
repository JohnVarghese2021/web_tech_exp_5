function calculate() {
    var w = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    let result = document.getElementById('result');

    if (h === "" || isNaN(h) || w === "" || isNaN(w))
        result.innerHTML = "<b>Provide valid Values!</b>";

    else {
        var bmi = (w / (h * h)).toFixed(2);

        if (bmi < 18)
            result.innerHTML = "<b>Your BMI is: " + bmi + ".<br><br>Your body type is Underweight.</b>";

        else if (bmi >= 18 && bmi < 25)
            result.innerHTML = "<b>Your BMI is: " + bmi + ".<br><br>Your body type is Normal.</b>";

        else if (bmi >= 25 && bmi < 30)
            result.innerHTML = "<b>Your BMI is: " + bmi + ".<br><br>Your body type is Overweight.</b>";

        else
            result.innerHTML = "<b>Your BMI is: " + bmi + ".<br><br>Your body type is Obese.</b>";

    }
}

function fun() {
    var t = document.getElementById('text').value;
    var arr = t.split(" ");
    var sw = arr[0];
    var lw = arr[0];
    let result = document.getElementById('result');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < sw.length)
            sw = arr[i];
        if (arr[i].length > lw.length)
            lw = arr[i];
    }
    result.innerHTML = "<br><br>Shortest Word: '" + sw + "'<br><br>Longest Word: '" + lw + "'";
}

var count = 0;

function grow() {
    var r = document.getElementById('rows').value;
    var c = document.getElementById('columns').value;
    var f = document.getElementById('fruit').value;
    let result = document.getElementById('garden');

    if (count >= 1) {
        result.innerHTML = " ";
    }

    if (r === "" || isNaN(r) || c === "" || isNaN(c) || (Math.floor(r / 1) != r) || (Math.floor(c / 1) != c))
        result.innerHTML = "<br><b>Provide a valid Values!</b>";

    else {
        for (var i = 0; i < r; i++) {
            for (var j = 0; j < c; j++) {
                if (f === 'Apple') {
                    result.innerHTML += "<img height=100 width=100 src=apple.jpg alt=Apple> ";
                } else if (f === 'Orange') {
                    result.innerHTML += "<img height=100 width=100 src=orange.jpg alt=Orange> ";
                } else {
                    var random = Math.floor(Math.random() * 2);
                    if (random === 0) {
                        result.innerHTML += "<img height=100 width=100 src=apple.jpg alt=Apple> ";
                    } else {
                        result.innerHTML += "<img height=100 width=100 src=orange.jpg alt=Orange> ";
                    }
                }
            }
            result.innerHTML += "<br>";
        }
    }
    count += 1;
}

function convert() {
    var d = document.getElementById('data').value;
    var v1 = document.getElementById('from').value;
    var v2 = document.getElementById('to').value;
    let result = document.getElementById('answer');

    if (d === "" || isNaN(d))
        result.innerHTML = "<br><br><b>Provide a valid Value!</b>";

    else {
        if (v1 === 'Indian Rupee') {
            if (v1 === v2) {
                result.innerHTML = "<br><br>" + "&#8377; " + d + " = &#8377; " + d;
            } else {
                result.innerHTML = "<br><br>" + "&#8377; " + d + " = $ " + (0.013322719 * d).toFixed(2);
            }
        } else {
            if (v1 === v2) {
                result.innerHTML = "<br><br>" + "$ " + d + " = $ " + d;
            } else {
                result.innerHTML = "<br><br>" + "$ " + d + " = &#8377; " + (75.059754 * d).toFixed(2);
            }
        }
    }
}

var h = 0;
var t = 0;
function flip() {
    var random;
    let result = document.getElementById('coin');
    random = Math.floor(Math.random() * 2);
    if (random === 0) {
        result.innerHTML = "<br><img height=250 width=250 src=head.jpg alt=Head> ";
        h += 1;
        document.getElementById('num_heads').innerHTML = h;
    } else {
        result.innerHTML = "<br><img height=250 width=250 src=tail.jpg alt=Tail> ";
        t += 1;
        document.getElementById('num_tails').innerHTML = t;
    }
}

function calc() {
    var s = document.getElementById('small').value;
    var m = document.getElementById('medium').value;
    var l = document.getElementById('large').value;
    var r = 0;

    let result = document.getElementById('price');

    if (s > 0) {
        r += (s * 100);
    }
    if (m > 0) {
        r += (m * 200);
    }
    if (l > 0) {
        r += (l * 400);
    }

    if (r > 0) {
        r = r + (0.09 * r);
        var tip = document.querySelector('input[name="tip"]:checked').value;

        r = r + ((tip / 100) * r);
    }
    result.innerHTML = "&#8377; " + r;
}