$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeAtividade = $('#nome-atividade').val();
        $(`<li>${nomeAtividade}</li>`).appendTo('ul');
        $('#nome-atividade').val('');

        $('#atividades').on('click', 'li', function(){
            $(this).css('text-decoration', 'line-through');
        });
    })
});