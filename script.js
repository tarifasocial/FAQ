jQuery(document).ready(function() {
  // Oculta todas as respostas quando a página é carregada
  jQuery('.dt_faq_section [itemprop="acceptedAnswer"]').hide();

  // Adiciona um evento de clique aos títulos das perguntas
  jQuery('.dt_faq_section h3[itemprop="name"]').click(function() {
    // Alterna a visibilidade da resposta correspondente
    jQuery(this).next('[itemprop="acceptedAnswer"]').slideToggle();
    // Alterna a classe para ajustar os estilos de borda
    jQuery(this).toggleClass('flat-bottom');
    jQuery(this).next('[itemprop="acceptedAnswer"]').toggleClass('flat-top');
  });
});
  $('#busca').on('keyup', function() {
  var termo = $(this).val().toLowerCase();

  $('.dt_faq_section').each(function() {
    var pergunta = $(this).find('h3[itemprop="name"]').text().toLowerCase();
    var resposta = $(this).find('[itemprop="text"]').text().toLowerCase();

    if (pergunta.includes(termo) || resposta.includes(termo)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});