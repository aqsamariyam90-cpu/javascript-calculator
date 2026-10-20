let display = document.getElementById("display");
function addValue(value) {
    display.value = display.value + value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    let expression = display.value;
    if (expression === "") {
        display.value = "Enter a value";
        return;
    }
    try {
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            display.value = "Invalid Input";
            return;
        }
        let result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            display.value = "Cannot divide by zero";
            return;
        }
        display.value = result;
    } catch {
        display.value = "Invalid Input";
    }
}