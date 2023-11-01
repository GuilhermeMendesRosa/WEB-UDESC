
function processExercise() {
    debugger
    const exercicio = document.getElementById('exercicio').value;
    const series = document.getElementById('series').value;

    if (parseInt(document.getElementById('series').value) != Number) {
        alert('Por favor, digite um número!');
        return
    }

    if (!exercicio || !series) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos!');
        return
    }

    let seriesValue = parseInt(document.getElementById('series').value);

    const totalSeries = parseInt(localStorage.getItem('totalSeries'));
    if (totalSeries >= 0) {
        seriesValue += totalSeries;
    }

    localStorage.setItem('totalSeries', seriesValue);

    let exercises = localStorage.getItem('exercises');
    if (!exercises) {
        exercises = [];
    } else {
        exercises = [...localStorage.getItem('exercises')];
    }
    exercises.push(exercicio)
    localStorage.setItem('exercises', exercises);


    alert('Total de Series: ' + seriesValue);
    alert('Exercícios: ' + exercises);
}