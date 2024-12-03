function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const currentDisplay = document.getElementById('result').value;
    document.getElementById('result').value = currentDisplay.slice(0, -1);
}

function append(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    const currentDisplay = document.getElementById('result').value;
    try {
        const result = eval(currentDisplay.replace(/×/g, '*').replace(/÷/g, '/'));
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Dark/Light Mode Toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
    document.getElementById('result').classList.toggle('dark-mode');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });
});