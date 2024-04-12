document.getElementById('meuForm').addEventListener('submit', function(event) {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    if (usuario === '' || senha === '') {
        event.preventDefault(); // Previne o envio do formulário
        mensagemErro.classList.add('erro-mostrar');
    } else {
        mensagemErro.classList.remove('mostrar');
    }
});