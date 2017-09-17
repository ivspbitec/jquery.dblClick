
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
