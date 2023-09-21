const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');
const campo3 = document.getElementById('campo3');
const radios = document.getElementsByName('conversao');

radios.forEach(radio => {
    radio.addEventListener('change', function () {
        if (radio.value === 'maiusculas') {
            campo1.value = campo1.value.toUpperCase();
            campo2.value = campo2.value.toUpperCase();
            campo3.value = campo3.value.toUpperCase();
        } else if (radio.value === 'minusculas') {
            campo1.value = campo1.value.toLowerCase();
            campo2.value = campo2.value.toLowerCase();
            campo3.value = campo3.value.toLowerCase();
        }
    })
});