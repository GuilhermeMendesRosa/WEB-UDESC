const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');
const campo3 = document.getElementById('campo3');
const radios = document.getElementsByName('conversao');

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function () {
        if (radios[i].value === 'maiusculas') {
            campo1.value = campo1.value.toUpperCase();
            campo2.value = campo2.value.toUpperCase();
            campo3.value = campo3.value.toUpperCase();
        } else if (radios[i].value === 'minusculas') {
            campo1.value = campo1.value.toLowerCase();
            campo2.value = campo2.value.toLowerCase();
            campo3.value = campo3.value.toLowerCase();
        }
    });
}