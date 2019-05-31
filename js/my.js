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

//■page topボタン
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();
 
//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>400){
    //---- 画面を○pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn(700);
  }else{
    //---- 画面が○pxより上なら、ボタンを表示しない
    topBtn.fadeOut(700);
  } 
});
 
// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},1000);
  return false;
});

});

//ページ内移動
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 700; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
	  	var headerHeight = 75; //固定ヘッダーの高さ
		var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
