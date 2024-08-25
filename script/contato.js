function enviarFormulario(event, form) {
    event.preventDefault();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    let conteudo = '<strong>DADOS ENVIADOS COM SUCESSO!</strong><br>';
    conteudo += 'Você pode conferir os dados enviados abaixo:<br><br>';

    const exibirItem = (label, valor) => {
        conteudo += `<strong>${label}:</strong> ${valor}<br>`;
    };

    exibirItem('Nome', form.nome.value.trim());
    exibirItem('Email', form.email.value.trim());
    exibirItem('Telefone', form.telefone.value.trim() || 'Não informado');
    exibirItem('Endereço', form.endereco.value.trim() || 'Não informado');
    exibirItem('Data de Nascimento', form.data.value || 'Não informada');
    exibirItem('Sexo', form.sexo.value || 'Não informado');
    exibirItem('Motivo do Contato', form.motivo.value);
    exibirItem('Mensagem', form.mensagem.value.trim());
    exibirItem('Deseja receber novidades?', form.novidade.checked ? 'Sim' : 'Não');

    resultado.innerHTML = conteudo;
}
