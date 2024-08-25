// script.js

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('inputSection').classList.remove('hidden');
    document.getElementById('title').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

document.getElementById('calculateButton').addEventListener('click', function() {
    // Retrieve input values
    let age = parseFloat(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let MAC = parseFloat(document.getElementById('MAC').value);
    let TSF = parseFloat(document.getElementById('TSF').value);
    let SSF = parseFloat(document.getElementById('SSF').value);
    let THC = parseFloat(document.getElementById('THC').value);
    let CAC = parseFloat(document.getElementById('CAC').value);
    let WC = parseFloat(document.getElementById('WC').value);
    let gender = document.getElementById('gender').value;

    // Example calculations (replace these with your actual calculations)
    let pcAge = 50;  // Placeholder value
    let ageDelta = 5;  // Placeholder value
    let agingAccelerate = "Yes";  // Placeholder value

    ageDelta = calculateAgeBioDelta(height, weight, MAC, TSF, SSF, THC, CAC, WC, age, gender);
    pcAge = age + ageDelta;
    agingAccelerate = judgeAgeAccelerate(ageDelta);

    // Show the result
    document.getElementById('inputSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');

    document.getElementById('pcAge').textContent = pcAge.toFixed(2);
    document.getElementById('deltaAge').textContent = ageDelta.toFixed(2);
    document.getElementById('agingAccelerate').textContent = agingAccelerate;
});

