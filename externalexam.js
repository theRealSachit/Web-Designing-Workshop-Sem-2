
function calculateFactorial() {
    let n = parseInt(document.getElementById("num").value);

    if (n < 0) {
        document.getElementById("result").innerHTML =
            "Factorial is not defined for negative numbers.";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerHTML =
        "Factorial of " + n + " is " + factorial;
}