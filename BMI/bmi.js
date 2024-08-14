function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const bmiResult = bmi.toFixed(2);

    document.getElementById("bmi-result").innerText = bmiResult;

    let status = "";
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }

    document.getElementById("bmi-status").innerText = status;
}
