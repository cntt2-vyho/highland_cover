$(document).ready(function(){
  (function($) {
      $.fn.my_menu = function(options){
          var settings = $.extend({
              type : 1, //gồm 2 loại 1 và 2
              show_position : 'right', // show left hoặc right
              text_back : 'Trở về'
          }, options );
          var __this = $(this);
          __this.addClass("menu_mobile");
          if(settings.show_position == 'left'){
              __this.addClass("show_left");
          }
          if(settings.type == 2){
              __this.addClass("menu_2");
              __this.find(".mmMenu").append('<div class="mm_mmMenu"></div>');
              var i = 0;
              __this.find(".mmMenu ul.mmMain li").each(function(){
                  var countsize = $(this).find("ul li").size();
                  if(countsize > 0){
                      i += 1;
                      $(this).find("a:first").wrap("<div class='m-sub' data-item='"+ i +"'></div>");
                      $(this).find(".m-sub:first").append("<div class='button-submenu'></div>");
                  }
                  if($(this).hasClass("page_home")){
                      $(this).find("a:first").wrap("<div class='m-sub'></div>");
                      $(this).find(".m-sub:first").append("<div class='button-submenu'></div>");
                  }
              });

              __this.find(".mmMenu ul.mmMain li").each(function(){
                  var countsize = $(this).find("ul li").size();
                  if(countsize > 0){
                      var a_html = $(this).find("a:first")[0].outerHTML;
                      $(this).find(".m-sub > a").attr('href','javascript:void(0)');
                      $(this).find("> a").attr('href','javascript:void(0)');
                      __this.find(".mmMenu .mm_mmMenu").append('<div class="m-ab" data-item="' + $(this).find("> .m-sub").data("item") + '"><div class="m-ab-arrow"><a href="javascript:void(0);" title="">'+ settings.text_back +'</a></div><div class="m-ab-title">'+ a_html +'</div><ul>'+ $(this).find("> ul").html()  +'</ul></div>');
                  }
              });
              __this.find(".m-sub").click(function () {
                  __this.find(".m-ab[data-item='"+ $(this).data("item") +"']").addClass("active");
                  __this.find(".mmContent").addClass("no-over");
              });
              __this.find(".m-ab-arrow a").click(function () {
                  $(this).parents(".m-ab").removeClass("active");
                  if(__this.find(".m-ab.active").size()==0){
                      __this.find(".mmContent").removeClass("no-over");
                  }
              });
          }else{
              __this.addClass("menu_default");
              __this.find(".mmMenu ul.mmMain li").each(function(){
                  var countsize = $(this).find("ul li").size();
                  if(countsize > 0 || $(this).hasClass("page_home")){
                      $(this).find("a:first").wrap("<div class='m-sub'></div>");
                      $(this).find(".m-sub:first").append("<div class='button-submenu'></div>")
                  }
              });
              __this.find(".mmMenu ul.mmMain li ul").css({'display':'none'});
              __this.find(".mmMenu ul.mmMain li .button-submenu").click(function(){
                  if($(this).parents().hasClass("page_home")){
                      window.location = $(this).parents(".page_home").find(".m-sub a").attr("href");
                      return false;
                  }
                  if(! $(this).hasClass("show")){
                      $(this).parent().parent().find("ul:first").stop().slideToggle(700);
                      $(this).addClass("show");
                      $(this).parent().parent().siblings().each(function(){
                          if($(this).find(".m-sub:first").find(".button-submenu").hasClass("show")){
                              $(this).find("ul:first").stop().slideToggle(700);
                              $(this).find(".m-sub:first").find(".button-submenu").removeClass("show");
                          }
                      });
                  }else{
                      $(this).parent().parent().find("ul:first").stop().slideToggle(700);
                      $(this).removeClass("show");
                  }
              });
          }
          __this.find(".icon_menu").click(function() {
              if(! __this.hasClass("showmenu")){
                  __this.find(".divmm").addClass('show');
                  __this.addClass("showmenu");
                  $('html').addClass("openmenu");
                  $('body').css({});
              }else{
                  __this.find(".divmm").removeClass('show');
                  __this.removeClass("showmenu");
                  $('html').removeClass("openmenu");
              }
          });
          __this.find(".divmm .divmmbg , .divmm .mmContent .close-mmenu").click(function() {
              $(this).parents(".menu_mobile").find(".divmm").removeClass('show');
              setTimeout(function() {
                  __this.removeClass("showmenu");
                  $('html').removeClass("openmenu");
              }, 500);
          });
          $(window).resize(function(){
              if($(window).innerWidth() > 1024){
                  __this.find(".divmm").removeClass('show');
                  __this.removeClass("showmenu");
                  $('html').removeClass("openmenu");
              }
          });
      };
  })(jQuery);
  // CALL MENU MOBILE
  $(".menu_mobile").my_menu({
      type : 1,
      show_position: 'right'
  });
});
