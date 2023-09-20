
function validarFormulario() {
    const campo1 = document.getElementById('campo1').value;
    const campo2 = document.getElementById('campo2').value;
    const campo3 = document.getElementById('campo3').value;
    const campo4 = document.getElementById('campo4').value;

    if (!campo1 || !campo2 || !campo3 || !campo4) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede a submissão do formulário
    } else {
        alert('Sucesso! Todos os campos obrigatórios foram preenchidos.');
        return true; // Permite a submissão do formulário
    }
}