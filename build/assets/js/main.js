$(function(){

  $('.faq .faq-block-text:first').show();

  $('.faq .faq-block-title').on('click', function(e){
    $('.faq-block-title').removeClass('active');
    $(this).addClass('active');
    let answer = $(this).next();
    
    $('.faq .faq-block-text:visible').not(answer).slideUp(400);
    answer.slideDown(400);
  });
  
});