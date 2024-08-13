include('js/jquery.easing.1.3.js');
include('js/jquery.color.js');
include('js/mathUtils.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/jquery.mousewheel.js');
include('js/sprites.js');
include('js/hoverSprite.js');
include('js/spin.js');
include('js/googleMap.js');
include('js/forms.js');
include('js/thumbnail_simple.js');
include('js/jquery.transform-0.9.3.min.js');

//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}
//--------global-------------
var isSplash = true;
var isAnim = true;
var isFirst = true;
var spinner;
var mapSpinner;
var _currPage;
var MSIE = ($.browser.msie) && ($.browser.version <= 8)
//------DocReady-------------
$(document).ready(function(){ 
    var _lastHash = "#!/"+$('#content > ul > li:last-child').attr('id');
    if((location.hash.length == 0) || (location.hash ==_lastHash) ){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
///////////////////////////////////////////////////////////////////
loaderInit();
function loaderInit(){
        var opts = {
              lines: 11,
              length: 10, 
              width: 10, 
              radius: 20, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $(".page_spinner > span");
        spinner = new Spinner(opts).spin();
        target.append(spinner.el) 
        ///////////////////////////////////////    
            var opts2 = {
              lines: 8,
              length: 0, 
              width: 8, 
              radius: 12, 
              rotate: 10, 
              color: '#000', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $(".google_map > span");
        mapSpinner = new Spinner(opts2).spin();
        target2.append(mapSpinner.el)  
     
} 
///////////////////////////////////////////////////////////////////

     $('ul#menu').superfish({
          delay:       500,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
                    // $(this).append("<div class='_area'></div><div class='mTextOver'>"+conText+"</div>"); 
                    $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='mText_over'>"+conText+"</div>");   
  				})
  	 		}
        });
        
      
});
  
 //------WinLoad-------------  
$(window).load(function(){  
$('.page_spinner').fadeOut();
spinner.stop();
$('body').css({overflow:'auto', 'min-height':'800px'})
//$('.menu > ul >li').eq(0).css({'display':'none'});


$(".slider_simple1").thumbnail_simple({_slider:$('.sliderHolder')});   
//$('.close_btn').hoverSprite({onLoadWebSite: true})

        
Init();
function Init(){
    $('.follow_list > li').hover(
        function(){
            $(this).find('a').stop(true).animate({top:'5px'}, 300, 'easeOutCubic');
        },
        function(){
            $(this).find('a').stop(true).animate({top:'0px'}, 300, 'easeOutCubic');
        }
    )         
}

///////////////////////////////////////////////
	var content=$('#content'),
		nav=$('.menu'),
		nav2=$('.menu2');

    	$('#content').tabs({
		preFu:function(_){
			_.li.css({left:"-1700px",'display':'none'});
			
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({left:'-1700px', 'display':'block'}).stop().delay(100).animate({left:"0px"}, 1000, 'easeOutCubic');
		
                cont_resize(_.n);
                _currPage = _.n
                
                if(_currPage == $('#content > ul > li').length-1){
                    $('.logoHolder > h1 > a').fadeTo(300, 0);
                }else{
                    $('.logoHolder > h1 > a').fadeTo(300, 1);
                }
                
                if ((_.n == 0)  && ((_.pren > 0) || (_.pren==undefined))){splashMode();}
                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); }
                
            }
			if(_.prev){
			     _.prev.stop().animate({left:'1700px'}, 600,'easeInCubic',function(){_.prev.css({'display':'none'});});
		  }
		}
	})
    
    function splashMode(){
        isSplash = true;
            $('.logoHolder > h1').stop().animate({top:"-300px"}, 700, 'easeInOutCubic'); 
            $('.logoHolder').css({'z-index':1})
            $('#content').css({'z-index':2})
            
    }   
    
    function contentMode(){  
        isSplash = false;
            $('.logoHolder > h1').css({top:"-300px"}).stop().animate({top:"0px"}, 700, 'easeInOutCubic');    
            $('.logoHolder').css({'z-index':2})
            $('#content').css({'z-index':1})
       
    }
    
    function cont_resize(_page){
        var li_W = $('#content > ul > li').eq(_page).innerHeight();
            $('#content').css({'height':li_W+'px'}) 
            
         //   if(li_W < 1000){li_W = 1000}
            $('body').stop().animate({'min-height':li_W+250+'px'}, 1000,'easeInOutCubic')
    }		
    
    
	nav.navs({
			useHash:true,
             hoverIn:function(li){
                        $(".mText", li).stop(true).animate({top:'40px'}, 400, 'easeOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'0px'}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:'0px'}, 400, 'easeInOutCubic');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:'0px'}, 400, 'easeInOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'-40px'}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:'-40px'}, 400, 'easeInOutCubic');
                    } 
                } 
		}).navs(function(n){			
			$('#content').tabs(n);
		})
        
    nav2.navs({
			useHash:true,
             hoverIn:function(li){
                        $(".mText", li).stop(true).animate({top:'40px'}, 400, 'easeOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'0px'}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:'0px'}, 400, 'easeInOutCubic');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:'0px'}, 400, 'easeInOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'-40px'}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:'-40px'}, 400, 'easeInOutCubic');
                    } 
                } 
		}).navs(function(n){			
			$('#content').tabs(n);
		})    
        
        
//////////////////////////////////////////
   	var h_cont;
	function centrRepos() {
         h_cont = $('.center').height() + 150;
        // $('body').animate({'min-height':h_cont+'px'},400)
		var wh=$('body').height();
			m_top = ~~(wh-h_cont)/2;
			h_new = wh;
           
	//	$('.center').stop().animate({'margin-top':m_top},600,'easeOutCubic');
	}
	centrRepos();
    ///////////Window resize///////
	$(window).resize(function(){
        centrRepos();
        }
    );

    } //window function
) //window load
