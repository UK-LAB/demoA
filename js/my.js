//slider
$("document").ready(function(){
  $('.mypattern').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    dots: true,
	draggable: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: '10%',
	responsive: [{
               breakpoint: 760,
                    settings: {
                         centerPadding: '10%',
               }
          }]
  });
}); 

//togle
(function($) {
    $(function() {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);

//��page top�{�^��
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();
 
//���{�^���̕\���ݒ�
$(window).scroll(function(){
  if($(this).scrollTop()>400){
    //---- ��ʂ���px�X�N���[��������A�{�^����\������
    topBtn.fadeIn(700);
  }else{
    //---- ��ʂ���px����Ȃ�A�{�^����\�����Ȃ�
    topBtn.fadeOut(700);
  } 
});
 
// ���{�^�����N���b�N������A�X�N���[�����ď�ɖ߂�
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},1000);
  return false;
});

});

//�y�[�W���ړ�
$(function(){
   // #�Ŏn�܂�A���J�[���N���b�N�����ꍇ�ɏ���
   $('a[href^=#]').click(function() {
      // �X�N���[���̑��x
      var speed = 700; // �~���b
      // �A���J�[�̒l�擾
      var href= $(this).attr("href");
      // �ړ�����擾
      var target = $(href == "#" || href == "" ? 'html' : href);
      // �ړ���𐔒l�Ŏ擾
	  	var headerHeight = 75; //�Œ�w�b�_�[�̍���
		var position = target.offset().top - headerHeight; //�^�[�Q�b�g�̍��W����w�b�_�̍���������
      // �X���[�X�X�N���[��
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
