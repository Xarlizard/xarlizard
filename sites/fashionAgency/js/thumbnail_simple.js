(function($){
 $.fn.thumbnail_simple=function(o){ 
        var getObject = {
            _slider:null
           }
        $.extend(getObject, o); 
		var _this = $(this),
			thumbHolder = $("> .slider_set",_this),
			thumbLength = $(">.slider_set > li",_this).length,
			thumbItems = $(">.slider_set > li",_this),
			thumbArr = [],
			thumbW = $(">.slider_set > li",_this).eq(0).width(),
			thumbH = $(">.slider_set > li",_this).eq(0).height();
            
        var MSIE = ($.browser.msie) && ($.browser.version <= 8),
            leftIndex = 0,
            curIndex = 0,
            prevUrl,
            isLoaded = false;
 
/////////////////////////////INIT///////////////////////////////////
		init();
		function init(){
            var geomDelta,
                _gip,
                _counterX = 0,
                _counterY = 0,
                rowLength = 3,
                ch = 0,
                z_flag = 1,
                ySpace = 0,
                newH = 0;
                
            $("> .slider_set", _this).css({'width':'100%', 'height':'100%', 'display':'inline-block', 'position':'relative'})
            
            _gip = Math.sqrt(2*(thumbW*thumbW));
            geomDelta = ((_gip - thumbW)/2)+2;
            
			$("> .slider_set > li", _this).each(function(_index){
			     thumbArr.push($(this));
                 
                 $(this).animate({rotate:'45'}, 0);
                 $(this).find('img').animate({rotate:'-45'}, 0);
                 
                 $(this).css({
                        left:(_gip*_counterX)+geomDelta+((_gip/2)*ch)+'px',
                        top:((_gip/2)*_counterY)+geomDelta+ySpace+'px',
                        'z-index':z_flag
                 });
      
                 _counterX++;
                 if(_counterX == rowLength){
                        if(rowLength == 3){rowLength = 2; ch=1; z_flag=0;}else{rowLength = 3; ch=0; z_flag=1; newH+=_gip }
                        _counterX = 0;
                        _counterY++;  
                        
                        if(_counterY==3){rowLength = 3; ch=0; z_flag=1; ySpace=255; newH+=(_gip+ySpace+5+_gip/2)}  
                    }
                 
			})
  
             $('._loader1', getObject._slider).css({display:'none'})
                
              if(MSIE){newH+=50}
            _this.css({height:newH+'px'}) 
           addButonsEventHandler();

		}//end init
//////////////////////////addButonsEventHandler/////////////////////////////////////
		function addButonsEventHandler(){
		  
            $("> .slider_set > li", _this).click(
                function(){
                    if(!isLoaded){
                        location.hash="!/"+$('#content > ul > li:last-child').attr('id');
                        prevUrl = $('.slider_set > li', _this).eq($(this).index()).attr('data-src');
                        $('.imgHolder', getObject._slider).html("<img src='"+prevUrl+"' alt=''>")
                        $('._loader1', getObject._slider).css({display:'block'})
                        isLoaded = true;
                        $('.imgHolder > img', getObject._slider).bind('load', function(){
                            isLoaded = false;
                            $(this).unbind('load');
                            $('._loader1', getObject._slider).css({display:'none'})
                            
                        });
                    }
                } 
            )
            
            $("> .slider_set > li", _this).find('span').css({'display':'none'});
            $("> .slider_set > li", _this).hover(
                    function(){
                        $(this).find('span').stop().css({'display':'block'});
                    },
                    function(){
                        $(this).find('span').stop().css({'display':'none'});
                    }
                )
                
            
		}//end addEvent   	    
////////////////////////////////////////////////////////////////////////////////////////////    

////////////////////////////////////////////////////////////////////////////////////////////          
	}
})(jQuery)