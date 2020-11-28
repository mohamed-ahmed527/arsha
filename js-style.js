$(document).ready(function(){
    /*
	$('ul li').css("color","red");
    $('ul li').css("font-size","30");
    $('ul').css("list-style","none");
    $('ul li:nth-child(even)').css('color','blue');
    $('ul li:nth-child(1)').css('color','green');
    $('ul li[title$="this"]').css("color" , 'aqua');
    if ($('ul li').hasClass("first")){
		console.log('yes has class');
	}else{
		console.log('no class');
	}
*/
    /*
    $(".fadein").click(function(){
       $(".one").fadeIn();        
    });
    $(".fadeout").click(function(){
       $(".two").fadeOut();
    });    
    $(".fadetoggle").click(function(){
       $(".three").fadeToggle();
    });    
    $(".slideup").click(function(){
       $(".four").slideUp();
    });
    $(".slidedown").click(function(){
       $(".five").slideDown();
    });
    $(".slidetoggle").click(function(){
       $(".six").slideToggle();
    });
    */
/********************************************/ 
    /*
    $(".info > p span:last-of-type").click(function(){
        $(this).parent().parent().find("div").slideToggle();
          });
    */      
/***************************************/
    /*
        $("form input" ).blur(function(){
           if($(this).val().length < 8 ){
               $(this).next().fadeIn();
           }else{
               $(this).next().fadeOut();
           }            
        });
          */
/********************Jquery******************/
    /*
    $('.parent h2').siblings().css({
        color:'red',
        border:'1px solid black'
    });
    */
/******************************/    
    /*
    $('form div input[name="title"]').keyup(function(){
        $(this).parent().parent().find('div:last-of-type h2').text($(this).val())    });
        $('form div input[name="description"]').keyup(function(){
        $(this).parent().parent().find('div:last-of-type p').text($(this).val())    });
        */
/**********************/
    /*
    $('.btn').click(function(){
       $('.adding').append("<div class='small'></div>"); 
    });
       */
    $('.adding').on("click","div",function(){
       $(this).parent().append("<div class='small'></div>"); 
    });
    /*************************/
    /************************/
    $(".data-info .info .data-header ul li").click(function(){
        $(this).parent().find(".active").removeClass();
        $(this).addClass("active");
        
        var id=$(this).attr('id'); 
        $(this).parent().parent().parent().find('.data-content').find('div').removeClass('show');
        $(this).parent().parent().parent().find('.data-content').find($("div [custom="+id+"]")).addClass('show');
    })
    /**************************/
    $(".container .parent .sign li").click(function(){
        $(this).parent().find(".active").removeClass();
        $(this).addClass("active");
        
        var id=$(this).attr('id'); 
        $(this).parent().parent().find('.content').find('div').removeClass('show');
        $(this).parent().parent().find('.content').find($("div [custom="+id+"]")).addClass('show');
    });
/****************************table*************************/    
    $(".empleyee >button").click(function(){
        $('.bk').fadeIn();
    });
    $('.bk .add form').submit(function(e){
        e.preventDefault();
        var data =$(this).serialize();
        
        $('tbody').append("<tr><td></td><td></td><td></td><td></td><td><button>edit</button>    <button>delet</button></td>  </tr>");
        $('tbody tr:last-of-type td:nth-of-type(1)').text($('.v1').val());
        $('tbody tr:last-of-type td:nth-of-type(2)').text($('.v2').val());
        $('tbody tr:last-of-type td:nth-of-type(3)').text($('.v3').val());
        $('tbody tr:last-of-type td:nth-of-type(4)').text($('.v4').val());
        $('.bk').fadeOut();
    });
    $(".empleyee table").on("click","tr td button:last-of-type",function(){
       if(confirm("do you want to delet !")){
           $(this).parent().parent().remove();
       } 
    });    
    $('#exit').click(function(){
        $('.bk').fadeOut();
    });
    $('.bk').click(function(){
        $(this).fadeOut();
    })
    $(".bk .add").click(function(e){
        e.stopPropagation();
    });
    /***************total salary in table**********/
    /*
    var total_salary= 0;
    for(var i=0 ; i<$(".empleyee table tbody tr td:nth-of-type(3)").length ; i++){
        total_salary=total_salary + parseInt($(".empleyee table tbody tr td:nth-of-type(3)").eq(i).html()); 
    }
    console.log(total_salary)
    $(".total_salary").html(total_salary)
    */
    /********or*******/
    var total_salary=0;
    $(".empleyee table tbody tr td:nth-of-type(3)").each(function(){
        total_salary =total_salary + parseInt($(this).html());    
    });
    console.log(total_salary)
    $(".total_salary").html(total_salary)
    /*****************change random color using function****************/
    function changebk(){
        var r = Math.floor(Math.random() * 220);
        var g = Math.floor(Math.random() * 220);        
        var b = Math.floor(Math.random() * 220);        
        return 'rgb('+r+','+g+','+b+',0.5)';
    }   
    $(".empleyee table tbody tr td:nth-of-type(3)").each(function(){
        $(this).css('background-color',changebk());  
    });
    /*******parents**********/
    $(".grand .prt .son ul li").parentsUntil(".grand").css("background-color","red")
    
/************************************************/    
/************************************************/
    /*
    $(".big nav ul li").click(function(){
       var id=$(this).attr('id');
        $("html , body").animate({
            scrollTop:$(".co div[scroll="+id+"]").offset().top,
        });
    });
    */
/********or******/
        $(".big nav ul li").click(function(){
           $("html , body").animate({
            scrollTop:$(".co div").eq($(this).index()).offset().top
        }); 
        });
/********************/
        $(window).scroll(function(){
            /*console.log($(this).scrollTop());*/
            if ( $(this).scrollTop() > 656 && $(this).scrollTop() <= 1165){
                $(".big nav ul").find('.active-color').removeClass()
                $(".big nav ul li:nth-of-type(1)").addClass("active-color")                
            }
            if ( $(this).scrollTop() > 1170 && $(this).scrollTop() <= 1670){
                $(".big nav ul").find('.active-color').removeClass()
                $(".big nav ul li:nth-of-type(2)").addClass("active-color")                
            }
            if ( $(this).scrollTop() >1775 && $(this).scrollTop() <= 2275){
                $(".big nav ul").find('.active-color').removeClass()
                $(".big nav ul li:nth-of-type(3)").addClass("active-color")                
            }
            
        });
        
/**********hover********/    
    $(".big form span").hover(function(){
        //hover
        $(this).prev().attr('type','text');
    },function(){
        //after hover
        $(this).prev().attr('type','password') ;                        
    });
/*********************************/
/*******************************slider************************/  
/***************************slider by arrows**************/
    $(".slider span:last-of-type").click(function(){
        var width = parseInt($(this).parent().find('ul li').css('width')); //Integer
        var max_width = width * 2;
        if(parseInt($(this).parent().find('ul').css('right')) < max_width){
           $(this).parent().find('ul').animate({
           right:'+='+width
        });
        }else{
           $(this).parent().find('ul').animate({
            right:'0'                                
        });        }
        /*********conect arrows with dots************/
        if(parseInt($(".slider ul").css('right')) == -1400){
       $(this).parent().find(".dots").find(".active").removeClass()
           $(this).parent().find(".dots div:nth-of-type(1)").addClass("active")
        } 
        else{
       $(this).parent().find(".dots").find(".active").removeClass()
           $(this).parent().find(".dots div:nth-of-type(1)").addClass("active")
        }
    if(parseInt($(".slider ul").css('right')) == 0){
       $(this).parent().find(".dots").find(".active").removeClass()
       $(this).parent().find(".dots div:nth-of-type(2)").addClass("active")
    }
    if(parseInt($(".slider ul").css('right')) == 1400){
       $(this).parent().find(".dots").find(".active").removeClass()
       $(this).parent().find(".dots div:nth-of-type(3)").addClass("active")
    }
    });
    /*****************slider span:first-of-type***************/
    $(".slider span:first-of-type").click(function(){
        var width = parseInt($(this).parent().find('ul li').css('width')); //Integer
        var max_width = width * 2;
        if(parseInt($(this).parent().find('ul').css('right')) > 0){
           $(this).parent().find('ul').animate({
           right:'-='+width 
        });
        }else{
           $(this).parent().find('ul').animate({
            right:max_width                                
        });    
        }
        /***********conect arrows with dots************/
        if(parseInt($(".slider ul").css('left')) == 0){
       $(this).parent().find(".dots").find(".active").removeClass()
           $(this).parent().find(".dots div:nth-of-type(1)").addClass("active")
        }   
        if(parseInt($(".slider ul").css('left')) == 1400){
           $(this).parent().find(".dots").find(".active").removeClass()
           $(this).parent().find(".dots div:nth-of-type(2)").addClass("active")
        }
        if(parseInt($(".slider ul").css('left')) == 2800){
       $(this).parent().find(".dots").find(".active").removeClass()
       $(this).parent().find(".dots div:nth-of-type(1)").addClass("active")
        }else{
           $(this).parent().find(".dots").find(".active").removeClass()
           $(this).parent().find(".dots div:nth-of-type(1)").addClass("active")
    }
    });
/*****************************slider time**************************/
/*
    setInterval(function(){  
        var width = parseInt($(".slider").find('ul li').css('width')); //Integer
        var max_width = width * 2;
        if(parseInt($(".slider").find('ul').css('right')) < max_width){
           $(".slider").find('ul').animate({
           right:'+='+width
        });            
        }else{
           $(".slider").find('ul').animate({
            right:'0'                                
        });        }
    },3000);        
*/    
/********************************slider dots***********************/
    $(".slider .dots div").click(function(){
        $(this).parent().find(".active").removeClass();
        $(this).addClass("active");
        });
    $(".slider .dots div:nth-of-type(1)").click(function(){
        var width= parseInt($(this).parent().parent().find('ul li').css('width'));
        var max_width=width * 2;
            $(this).parent().parent().find('ul').animate({
                right:'0'
        });
    });
    $(".slider .dots div:nth-of-type(2)").click(function(){
        var width= parseInt($(this).parent().parent().find('ul li').css('width'));
        var max_width=width * 2;
            $(this).parent().parent().find('ul').animate({
           right:$(this).parent().parent().find('ul li').css('width')
            });
    });
    $(".slider .dots div:nth-of-type(3)").click(function(){
        var width= parseInt($(this).parent().parent().find('ul li').css('width'));
        var max_width=width * 2;
            $(this).parent().parent().find('ul').animate({
           right:max_width
        });
    });    
/***************************conect arrows with dots****************/
    
/*********************end of slider********************/    
/******************************************************/  
    $("section.pic-show .par .im-one img").click(function(){
        var src =$(this).attr("src");   //path
        $('.shown img').attr("src",src);
        $('.shown').css('display','block');
        $(".shown").click(function(){
           $(this).fadeOut() 
        });
        $(".shown img").click(function(st){
           st.stopPropagation()
        }); 
    });    
/*************************************************/    
    $("section.vid-show .par .vid-one video").click(function(){
        var src =$(this).attr("src");   //path
        $('.sh video').attr("src",src);
        $('.sh').css('display','block');
        $(".sh").click(function(){
           $(this).fadeOut() 
        });
        $(".sh video").click(function(st){
           st.stopPropagation()
        });
    });
/****************************/    
    $(window).scroll(function(){
        if ($(this).scrollTop()> 60){
            $(".top").fadeIn();
            
        }else{
            $(".top").fadeOut();            
        }
    });
    
    $(".top").click(function(){
       $('html,body').animate({
           scrollTop: 0
       }) 
    });
    
    
    
    });
    
