jQuery(document).ready(function(){

    //     praimarymenue will be fixed on the top by scrolling      //
    jQuery(window).scroll(function () {
      var scroll=jQuery(window).scrollTop();
        if(scroll > 100){
            jQuery(".praimarymenu").addClass("addClass")
        }
          if(scroll < 48) {
            jQuery(".praimarymenu").removeClass("addClass")
            }
         }); 
    
    
    
    
    
    
    
    
    //       fo menue efferct on PC mode           //
    jQuery(function(){
    jQuery(".ml li").hover(
          function a(){
          jQuery(">ul.sub:not(:animated)",this).slideDown(600);
        },
        function a(){
          jQuery(">ul.sub",this).slideUp(200);
        }
      )
    });
     
    
    
    
    
    
    
    
    
    
    
    //       fo menue effect on Tablet mode           //
    jQuery("#bar").click(function(){
      jQuery(".nav2").fadeToggle()
    })
    
    
    jQuery(function(){
      jQuery("#ir2").click(
            function(){
            jQuery("#subtwo").toggle();
          }
        )
      });
    
      jQuery(function(){
        jQuery("#subthree").click(
              function(){
              jQuery("#sub3").toggle();
            }
          )
        });
        
     jQuery(function(){
          jQuery("#subfour").click(
                function(){
                jQuery("#sub4").toggle();
              }
            )
          });
    
    jQuery(window).resize(function (){
      var s =jQuery(window).width();
      if(s >= 786){
        jQuery(".nav2").hide();
      }
    })
    
    
    
    
    
    
    
    
    
    
    //     for hiding Search-box when window resizing      // 
    jQuery(window).resize(function(){
      jQuery(".searchbox,.searchboxtwo").hide();
    })
    
    
    
    
    
    
    
    
    
    
    //    search-box show by clicking search icon on PC mode    //
    jQuery(".searchbox").hide();
    jQuery("#mib").click(function(){
      jQuery(".searchbox").fadeToggle(200);
    })
    
    jQuery("header,section,footer").click(function(){
      jQuery(".searchbox").hide();
      jQuery(".searchbox input").css("border-color"," rgb(221, 221, 221)")
    })
    
    jQuery(".searchbox input,.searchbox i").click(function(){
      jQuery(".searchbox input").css("border-color","#ff5200");
    })
    
    
    
    
    
    
    
    
    
    
    
    
    //   search-box show by clicking search icon on TABLET mode    //
    jQuery(".searchboxtwo").hide();
    jQuery("#mibtwo").click(function(){
      jQuery(".searchboxtwo").fadeToggle(200);
    })
    
    jQuery("header,section,footer").click(function(){
      jQuery(".searchboxtwo").hide();
      jQuery(".searchboxtwo input").css("border-color"," rgb(221, 221, 221)")
    })
    
    jQuery(".searchboxtwo input,.searchboxtwo i").click(function(){
      jQuery(".searchboxtwo input").css("border-color","#ff5200").text("  ")
    })
    
    
    
    
    
    
    
    
    
    
    
    //          for img SLIDE manually            //
    $("#switch1").click(function(){
            jQuery("#slider img").next().fadeOut(500);
            jQuery("#slider img").prev().fadeIn(400);
            jQuery("#switch1").addClass("active");
            jQuery("#switch2").removeClass("active");
            jQuery(".slidercontent h2").text("BEST QUALITY STEEL FOR CONSTRUCTION")       
    });
    
    $("#switch2").click(function(){
            jQuery("#slider img").prev().fadeOut(400);
            jQuery("#slider img").next().fadeIn(400);
            jQuery("#switch2").addClass("active");
            jQuery("#switch1").removeClass("active");
            jQuery(".slidercontent h2").text("Experience Is Better Way To Build Success")
    });
    
    
    //          for img SLIDE automatically           //
    var left=function(){ 
                jQuery("#slider img").prev().fadeOut(400);
                jQuery("#slider img").next().fadeIn(700);
                jQuery("#switch2").addClass("active");
                jQuery("#switch1").removeClass("active");
                jQuery(".slidercontent h2").text("Experience Is Better Way To Build Success")}
    
    var right=function(){ 
                jQuery("#slider img").next().fadeOut(400);
                jQuery("#slider img").prev().fadeIn(700);
                jQuery("#switch1").addClass("active");
                jQuery("#switch2").removeClass("active");
                jQuery(".slidercontent h2").text("BEST QUALITY STEEL FOR CONSTRUCTION")}
    
    setInterval(left,9000);
    setInterval(right,18000);
    
    
    
    
    
    
    
    
    //      2nd section  effect      //
    jQuery(window).scroll(function () {
      var a=jQuery(window).scrollTop();
        if(a > 80){
            jQuery(".sbcontent").css({"transform":"translateX(0px)","transition":"1s"});
        }
      });
    
    
    
    
    
    
    
    
    
    
    //    3rd section effect    //
    jQuery(window).scroll(function () {
      var b=jQuery(window).scrollTop();
        if(b > 600){
            jQuery(".dphoto img,.dinformation").css({"transform":"translateY(0px)","transition":"1s"});
        }
      });
    
    
    
    
    
    
    
    
    
    
    
    //    4th section CounterUp effect     //
      jQuery(window).scroll(function () {
        var b=jQuery(window).scrollTop();
          if(b > 1000){
            //this is from plugin
            $('.countfect').each(function(){var $this=$(this),countTo=$this.attr('data-num');delayTo=$this.attr('delay');if(!delayTo){delayTo=2000}$({countNum:$this.text()}).animate({countNum:countTo},{duration:delayTo,easing:'linear',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});
          }
        });
    
    
    
    
    
    
    
    
    
    
    
    //   5th section  effect    //
    jQuery(window).scroll(function () {
      var b=jQuery(window).scrollTop();
        if(b > 1870){
            jQuery(".s5thsboxContent").css({"transform":"translateX(0px)","transition":"1s"});
        }
      });
    
    
    
    
    
    
    
    
    
    
    
    //    6th section  effect    //
    jQuery(window).scroll(function () {
      var b=jQuery(window).scrollTop();
        if(b > 2500){
            jQuery(".s6thsboxContent").css({"transform":"translateX(0px)","transition":"1s"});
        }
      });
    
    
    
    
    
    
    
    
    
    
    
    //    7th section  effect     //
    jQuery(window).scroll(function () {
      var b=jQuery(window).scrollTop();
        if(b > 3200){
            jQuery(".s7thtitlebox,.s7thsboxwrapper").css({"transform":"translateY(0px)","transition":"1s"});
        }
      });
    
    
    
    
    
    
    
    
    
    
    
    
    //     8th section  effect       //
    jQuery(window).scroll(function () {
      var b=jQuery(window).scrollTop();
        if(b > 3900){
            jQuery(".s8thsboxwrapper").css({"transform":"translateY(0px)","transition":"1s"});
        }
      });
    
    
    
    
    
    
    
    
    
    
    
     //     9th section  effect     //
    jQuery(window).scroll(function () {
      var b=jQuery(window).scrollTop();
        if(b > 5600){
            jQuery(".s10thsboxwrapper").css({"transform":"translateY(0px)","transition":"1s"});
        }
      }); 
    
    
    
    
    
    
    
    
    
    
    //      Scroll-btn will be show when scroling 500px       //      
    jQuery(".bi").hide();        
    jQuery(window).scroll(function () {
      var utd=jQuery(window).scrollTop();
        if(utd > 500){
            jQuery(".bi").slideDown(1000);
        }else{
            jQuery(".bi").slideUp(1000);
        };
    });
    
    
    
    
    
    
    
    
    
    
    
    //    Page will be scrollTop:"0" by clicking Scroll-btn     //
    jQuery(".bi").click(function(){
      jQuery("body").animate({scrollTop : 0},4000,);//.scrollTop(0); etio kaj kore but time set korte parini.
      });
    
    
    
    
    
    
      
     
    
      
      
           //*****                        Webpage Dark Mode Methods                          *****//
    
    
    
    
    
                            
                                    //*       For Light Mode      *//
                             //         Light Mode Hover Effects          //
    
    //Light mode
    jQuery(".darkmode1 span").click(function(){
      //For btn
      jQuery(".darkmode1 span").css({"margin-left":"0px","transition":".5s"})
      jQuery(".darkmode2 span").css({"margin-left":"0px","transition":".5s"})
      jQuery(".darkmode2").css({"transition":".5s","z-index":""})
      jQuery(".wrap2").css("z-index","2")
      jQuery(".wrap1").css("z-index","1")
      
    
     
    
           //          Light Mode Hover Effects           //
    
    //topbar-social
    jQuery(".social a:first-child").hover(function(){
    jQuery(".social a:first-child").css({"background":"","color":"#ff5200","transition":".3s"})
    },function(){
      jQuery(".social a:first-child").css({"background":"","color":" rgba(20, 20, 20, 0.808)","transition":""})
        })
    
    jQuery(".social a:nth-child(2)").hover(function(){
      jQuery(".social a:nth-child(2)").css({"background":"","color":"#ff5200","transition":".3s"})
      },function(){
        jQuery(".social a:nth-child(2)").css({"background":"","color":" rgba(20, 20, 20, 0.808)","transition":""})
        })
      
        jQuery(".social a:last-child").hover(function(){
        jQuery(".social a:last-child").css({"background":"","color":"#ff5200","transition":".3s"}) 
        },function(){
          jQuery(".social a:last-child").css({"background":"","color":" rgba(20, 20, 20, 0.808)","transition":""})       
    })
    
    //s2nd
      jQuery(".sbox:nth-child(3) .sbcontent").hover(function(){
        jQuery(".sbox:nth-child(3) .sbcontent").css({"background":"#ff5200","color":"white","transition":".8s"})
        jQuery(".sbox:nth-child(3) .sbcontent .iconbox,.sbox:nth-child(3) .sbcontent h2,.sbox:nth-child(3) .sbcontent .text,.sbox:nth-child(3) .sbcontent .arrow").css({"background":"","color":"white","transition":""})
       },function(){
         jQuery(".sbox:nth-child(3) .sbcontent").css({"background":"white","color":"black","transition":""}) 
         jQuery(".sbox:nth-child(3) .sbcontent .iconbox,.sbox:nth-child(3) .sbcontent h2,.sbox:nth-child(3) .sbcontent .text,.sbox:nth-child(3) .sbcontent .arrow").css({"background":"","color":"black","transition":""})
         jQuery(".sbox:nth-child(3) .sbcontent .iconbox,.sbox:nth-child(3) .sbcontent .arrow").css({"background":"","color":"#ff5200","transition":""})
       
       })
      
       jQuery(".sbox:last-child .sbcontent").hover(function(){
        jQuery(".sbox:last-child  .sbcontent").css({"background":"#ff5200","color":"white","transition":".8s"})
        jQuery(".sbox:last-child  .sbcontent .iconbox,.sbox:last-child  .sbcontent h2,.sbox:last-child  .sbcontent .text,.sbox:last-child .sbcontent .arrow").css({"background":"","color":"white","transition":""})
       },function(){
         jQuery(".sbox:last-child  .sbcontent").css({"background":"white","color":"black","transition":""}) 
         jQuery(".sbox:last-child  .sbcontent .iconbox,.sbox:last-child  .sbcontent h2,.sbox:last-child  .sbcontent .text,.sbox:last-child  .sbcontent .arrow").css({"background":"","color":"black","transition":""})
         jQuery(".sbox:last-child  .sbcontent .iconbox,.sbox:last-child  .sbcontent .arrow").css({"background":"","color":"#ff5200","transition":""})
       
       })
      
       jQuery(".sbox:first-child .sbcontent").hover(function(){
        jQuery(".sbox:first-child  .sbcontent").css({"background":"#ff5200","color":"white","transition":".8s"})
        jQuery(".sbox:first-child  .sbcontent .iconbox,.sbox:first-child  .sbcontent h2,.sbox:first-child  .sbcontent .text,.sbox:first-child .sbcontent .arrow").css({"background":"","color":"white","transition":""})
       },function(){
         jQuery(".sbox:first-child  .sbcontent").css({"background":"white","color":"black","transition":""}) 
         jQuery(".sbox:first-child  .sbcontent .iconbox,.sbox:first-child  .sbcontent h2,.sbox:first-child .sbcontent .text,.sbox:first-child  .sbcontent .arrow").css({"background":"","color":"black","transition":""})
         jQuery(".sbox:first-child  .sbcontent .iconbox,.sbox:first-child  .sbcontent .arrow").css({"background":"","color":"#ff5200","transition":""})
       
       })
      
      
                            //  for light mode  //
      jQuery(".topbarmain").css({"background":"#fafafaec","color":"black"})
      jQuery(".praimarymenu").css({"background":"white","color":""})
      jQuery("body").css({"background":"white","color":""})
      jQuery("nav ul.sub").css({"background":"white","color":""})
      jQuery("#s2nd,s7th,.s6thsboxContent,.searchbox,.searchboxtwo").css({"background":"white","box-shadow":""})
      jQuery("#s2nd").css({"background":"#f1f0f0","box-shadow":""})
      jQuery("nav ul li a,.s5thtitlebox span,.spanbox span:last-child,.s10thdbox h5,.s6thsbox h3,.s6thsbox h4,#rg").css("color","black")
      jQuery(".phone ,.email,.social a,.text,.sbcontent h2").css("color","rgba(0, 0, 0, 0.808)")
      jQuery(".sbcontent").css({"background":"#fafafaec","border":"0.2px solid rgb(214, 214, 214)"})
      jQuery(".dinformation p,.dinformation ul li a").css({"color":"#656565","box-shadow":""})
      jQuery(".dinformation h2").css({"color":"#1a1919","box-shadow":""})
      jQuery(".s5th,.s6th").css("background"," rgb(245, 245, 245)")
      jQuery(".s5thtitlebox p").css({"color":"#414141","box-shadow":""})
      jQuery(".s5thsbox h4").css({"color":"#202020","box-shadow":""})
      jQuery(".s5thsbox p").css({"color":"#414141","box-shadow":""})
      jQuery(".sbox:nth-child(2) .sbcontent").css("background"," #ff5200")
      jQuery(".sbox:nth-child(2) .sbcontent .iconbox,.sbox:nth-child(2) .sbcontent h2,.sbox:nth-child(2) .sbcontent .text,.sbox:nth-child(2) .sbcontent .arrow").css("color","white")
      jQuery(".s8th").css({"background":"rgb(255, 255, 255)","color":""})
      jQuery(".s8thsbox h4").css("color","#242424")
      jQuery(".s8thsbox p").css("color","#4e4e4e")
      jQuery(".s8thsbox").css("box-shadow","0px 0px 0.8px 0px rgb(51, 51, 51)")
      jQuery(".s9th").css({"background":"#f5f6f6","color":""})
      jQuery(".s10thasbox").css("box-shadow","0px 0px 0.8px 0px #e2e0e0")
      jQuery(".s6thsbox ul li").css("color","#656565")
      jQuery(".s6thsbox").css("box-shadow","0px 0px 1px 0px #1a1919")
      jQuery(".searchbox input").css({"background":"white","box-shadow":"0px 0px px 0px white","color":"black"})
      jQuery(".searchboxtwo input").css({"background":"white","box-shadow":"0px 0px px 0px white","color":"black"})
    
    })
    
    
    
    
                             //*       For Dark Mode      *//
                      //          dark Mode Hover Effects          //
    
    jQuery(".darkmode2 span").click(function(){
    //topbar-social
    jQuery(".social a:first-child").hover(function(){
      jQuery(".social a:first-child").css({"background":"","color":"rgb(199, 199, 199)","transition":".3s"})
      
      },function(){
        jQuery(".social a:first-child").css({"background":"","color":" #ff5200","transition":""})
          
      })
      
      jQuery(".social a:nth-child(2)").hover(function(){
        jQuery(".social a:nth-child(2)").css({"background":"","color":"rgb(199, 199, 199)","transition":".3s"})
        
        },function(){
          jQuery(".social a:nth-child(2)").css({"background":"","color":" #ff5200","transition":""})
            
        })
      
        jQuery(".social a:last-child").hover(function(){
          jQuery(".social a:last-child").css({"background":"","color":"rgb(199, 199, 199)","transition":".3s"})
          
          },function(){
            jQuery(".social a:last-child").css({"background":"","color":"  #ff5200","transition":""})        
      })
    
      
      
      //s2nd
        jQuery(".sbox:nth-child(3) .sbcontent").hover(function(){
          jQuery(".sbox:nth-child(3) .sbcontent").css({"background":"#ff5200","color":"white","transition":".4s"})
          jQuery(".sbox:nth-child(3) .sbcontent .iconbox,.sbox:nth-child(3) .sbcontent h2,.sbox:nth-child(3) .sbcontent .text,.sbox:nth-child(3) .sbcontent .arrow").css({"background":"","color":"white","transition":""})
         },function(){
           jQuery(".sbox:nth-child(3) .sbcontent").css({"background":"black","color":"black","transition":""}) 
           jQuery(".sbox:nth-child(3) .sbcontent .iconbox,.sbox:nth-child(3) .sbcontent h2,.sbox:nth-child(3) .sbcontent .text,.sbox:nth-child(3) .sbcontent .arrow").css({"background":"","color":"white","transition":""})
           jQuery(".sbox:nth-child(3) .sbcontent .iconbox,.sbox:nth-child(3) .sbcontent .arrow").css({"background":"","color":"#ff5200","transition":""})
         
         })
        
         jQuery(".sbox:last-child .sbcontent").hover(function(){
          jQuery(".sbox:last-child  .sbcontent").css({"background":"#ff5200","color":"white","transition":".4s"})
          jQuery(".sbox:last-child  .sbcontent .iconbox,.sbox:last-child  .sbcontent h2,.sbox:last-child  .sbcontent .text,.sbox:last-child .sbcontent .arrow").css({"background":"","color":"white","transition":""})
         },function(){
           jQuery(".sbox:last-child  .sbcontent").css({"background":"black","color":"black","transition":""}) 
           jQuery(".sbox:last-child  .sbcontent .iconbox,.sbox:last-child  .sbcontent h2,.sbox:last-child  .sbcontent .text,.sbox:last-child  .sbcontent .arrow").css({"background":"","color":"white","transition":""})
           jQuery(".sbox:last-child  .sbcontent .iconbox,.sbox:last-child  .sbcontent .arrow").css({"background":"","color":"#ff5200","transition":""})
         
         })
        
         jQuery(".sbox:first-child .sbcontent").hover(function(){
          jQuery(".sbox:first-child  .sbcontent").css({"background":"#ff5200","color":"white","transition":".4s"})
          jQuery(".sbox:first-child  .sbcontent .iconbox,.sbox:first-child  .sbcontent h2,.sbox:first-child  .sbcontent .text,.sbox:first-child .sbcontent .arrow").css({"background":"","color":"white","transition":""})
         },function(){
           jQuery(".sbox:first-child  .sbcontent").css({"background":"black","color":"black","transition":""}) 
           jQuery(".sbox:first-child  .sbcontent .iconbox,.sbox:first-child  .sbcontent h2,.sbox:first-child .sbcontent .text,.sbox:first-child  .sbcontent .arrow").css({"background":"","color":"white","transition":""})
           jQuery(".sbox:first-child  .sbcontent .iconbox,.sbox:first-child  .sbcontent .arrow").css({"background":"","color":"#ff5200","transition":""})     
         })
        
      //for btn
      jQuery(".darkmode1 span").css({"margin-left":"24px","transition":".5s"});
      jQuery(".darkmode2 span").css({"margin-left":"24px","transition":".1s"});
      jQuery(".darkmode1").css({"transition":".5s","z-index":""});
      jQuery(".wrap1").css("z-index","2");
      jQuery(".wrap2").css("z-index","1");
      //for body dark mode
      jQuery(".topbarmain,#s2nd,body,.s5th,.s6th,.s8th,.s9th").css("background","rgb(35, 35, 37)")
      jQuery(".s6th").css("background","linear-gradient(30deg, rgb(35, 35, 37) 0%, #3a78 0%, #2626 0%, rgb(35, 35, 37) 100%")//.css("background","linear-gradient(-30deg, #03a9 0%, #3a78 50%, #2626 50%, #607d 100%")
      jQuery("nav ul.sub").css("background","rgb(59, 59, 59)")
      jQuery(".s6thsboxContent").css({"background":"#ffffff15","box-shadow":""})
      jQuery(".searchbox").css({"background":"#ffffff25","box-shadow":"0px 0px 15px 0px white"})
      jQuery(".searchbox input").css({"background":"#ffffff50","box-shadow":"0px 0px px 0px white","color":"white"})
      jQuery(".searchboxtwo").css({"background":"#ffffff25","box-shadow":"0px 0px 15px 0px white"})
      jQuery(".searchboxtwo input").css({"background":"#ffffff50","box-shadow":"0px 0px px 0px white","color":"white"})
      jQuery(".s6thsbox").css({"background":"","box-shadow":"0px 0px 15px 0px white"})
      jQuery(".sbcontent").css({"background":"black","border":".1px solid rgb(59, 59, 59)"})
      jQuery(".sbox:nth-child(2) .sbcontent").css("background"," #ff5200")
      jQuery(".sbox:nth-child(2) .sbcontent .iconbox,.sbox:nth-child(2) .sbcontent h2,.sbox:nth-child(2) .sbcontent .text,.sbox:nth-child(2) .sbcontent .arrow").css("color","white")
      jQuery(".phone ,.email,.text,.sbcontent h2,nav ul li a,.s6thsbox h3,.s6thsbox h4,#rg").css("color","white")
      jQuery(".social a").css({"color":"#ff5200","transition":".1s"})
      jQuery(".praimarymenu").css({"background":"rgb(59, 59, 59,0.989)","box-shadow":""})
      jQuery(".dinformation h2,.dinformation p,.dinformation ul li a,.s5thtitlebox span,.s5thtitlebox p,.s5thsbox p,.s5thsbox h4,.s10thdbox h5,.sbcontent h2").css({"color":"#ffffff","box-shadow":""})
      jQuery(".s8thsbox h4,.s8thsbox p,.spanbox span:last-child").css("color","white")
      jQuery(".s8thsbox").css("box-shadow","0px 0px 0.8px 0px rgb(199, 199, 199)")
      jQuery(".s6thsbox ul li").css("color","#c5c5c5")
    
    });
      
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    