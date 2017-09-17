
// jQuery.dblclick
// 1.0
// Internet technologies ltd. 2017
// info@spbitec.ru
// http://spbitec.ru/

// Dependencies
// jQuery 1.8+

// Performs callbak functions depending on the type of the click - double click or single click separately

(function($) {
   $.fn.dblClick = function(clickCallback,dblClickCallback){
      return this.each(function(){
         var touchTimeout = false;
         $(this).off('click.dblClick').on('click.dblClick', function (e) {
            var _t = this;
            if (touchTimeout){
               clearTimeout(touchTimeout);
               touchTimeout = false;

               if($.isFunction(clickCallback)) dblClickCallback.call(_t,e);

            }else{        
               touchTimeout=setTimeout( function(){
                  if($.isFunction(clickCallback)) clickCallback.call(_t,e);       
                  touchTimeout = false;
               },500);
            }          
         });
      });
   }
})(jQuery);
