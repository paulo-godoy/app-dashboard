$(document).ready(() => {
    //requisição de paginas com ajax jquery para pagina documentação
    $('#documentacao').on('click', () => {
       // $('#pagina').load('documentacao.html');
       $.get('documentacao.html', data => {
           $('#pagina').html(data);
       })
    })
    //requisição de paginas com ajax jquery para pagina documentação
    $('#suporte').on('click', () => {
        //$('#pagina').load('suporte.html');
        $.get('suporte.html', data => {
            $('#pagina').html(data);
        })
    })
})