function registrar() {
    var nome = document.getElementById('nome').value;
    var horario = document.getElementById('horario').value;
    var anotacao = document.getElementById('anotacao').value;

    // Aqui você pode salvar os dados, por exemplo, em localStorage ou enviar para um servidor

    alert('Registro Salvo:\nNome: ' + nome + '\nHorário: ' + horario + '\nAnotação: ' + anotacao);
}
