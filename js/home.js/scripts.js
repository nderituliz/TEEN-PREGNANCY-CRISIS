function slideSwitch() {

    $('imgcontainer2').css('display','none');
    var $active = $('#slideshow1 IMG.active');
    
    if ( $active.length == 0 ){ 
        $active = $('#slideshow1 IMG:last');
    }
    
    var $next;
    if ($active.next().length){
        $next = $active.next();
    }else{
        $next = $('#slideshow1 IMG:first');
    }
    
    $active.addClass('last-active');
    
    $next.css({opacity: 0.0})
        .addClass('active')
        .css('display','block')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
    }
    
    $(function() {
      setInterval( "slideSwitch()", 2000 );}
    );

    $(document).ready(function(){
        $("#sexualorientation-image").click(function(){
          $("#sexualorientation-image").slideDown('').show('');
         $("#sexualorientation").show('');
         $("#sex-image").hide('');
         $("#pregnancy-image").hide('');
         $("#contraceptives-image").hide('');
         $("#periods-image").hide('');
        });
        $("#sexualorientation").click(function(){
          $("#sexualorientation").slideUp('');
          $("#sexualorientation-image").slideDown('');
          $("#periods-image").show('');
          $("#sex-image").show('');
          $("#pregnancy-image").show('');
          $("#contraceptives-image").show('');
        });
        
      });
      
      $(document).ready(function(){
        $("#periods-image").click(function(){
          $("#periods-image").slideDown('').show('');
          $("#periods").show('');
          $("#sexualorientation-image").hide('');
          $("#pregnancy-image").hide('');
          $("#contraceptives-image").hide('');
          $("#sex-image").hide('');
        });
        $("#periods").click(function(){
          $("#periods").slideUp('');
          $("#periods-image").slideDown('');
          $("#sexualorientation-image").show('');
          $("#sex-image").show('');
          $("#pregnancy-image").show('');
          $("#contraceptives-image").show('');
        });
      });
      
      $(document).ready(function(){
        $("#sex-image").click(function(){
          $("#sex-image").slideDown('').show('');
          $("#sex").show('');
          $("#sexualorientation-image").hide('');
          $("#pregnancy-image").hide('');
          $("#contraceptives-image").hide('');
          $("#periods-image").hide('');
        });
        $("#sex").click(function(){
          $("#sex").slideUp('');
          $("#sex-image").slideDown('');
          $("#periods-image").show('');
          $("#sexualorientation-image").show('');
          $("#pregnancy-image").show('');
          $("#contraceptives-image").show('');
        });
      });
      $(document).ready(function(){
        $("#pregnancy-image").click(function(){
          $("#pregnancy-image").slideDown('').show('');
          $("#pregnancy").show('');
          $("#sexualorientation-image").hide('');
          $("#periods-image").hide('');
          $("#contraceptives-image").hide('');
          $("#sex-image").hide('');
        });
        $("#pregnancy").click(function(){
          $("#pregnancy").slideUp('');
          $("#pregnancy-image").slideDown('');
          $("#periods-image").show('');
          $("#sexualorientation-image").show('');
          $("#sex-image").show('');
          $("#contraceptives-image").show('');
        });
      });
      $(document).ready(function(){
        $("#contraceptives-image").click(function(){
          $("#contraceptives-image").slideDown('').show('');
          $("#contraceptives").show('');
          $("#sexualorientation-image").hide('');
          $("#periods-image").hide('');
          $("#pregnancy-image").hide('');
          $("#sex-image").hide('');
        });
        $("#contraceptives").click(function(){
          $("#contraceptives").slideUp('');
          $("#contraceptives-image").slideDown('');
          $("#periods-image").show('');
          $("#sexualorientation-image").show('');
          $("#pregnancy-image").show('');
          $("#sex-image").show('');
        });
      });



      function slideSwitch() {

        $('imgcontainer2').css('display','none');
        var $active = $('#slideshow1 IMG.active');
        
        if ( $active.length == 0 ){ 
            $active = $('#slideshow1 IMG:last');
        }
        
        var $next;
        if ($active.next().length){
            $next = $active.next();
        }else{
            $next = $('#slideshow1 IMG:first');
        }
        
        $active.addClass('last-active');
        
        $next.css({opacity: 0.0})
            .addClass('active')
            .css('display','block')
            .animate({opacity: 1.0}, 1000, function() {
                $active.removeClass('active last-active');
            });
        }
        
        $(function() {
          setInterval( "slideSwitch()", 2000 );}
        );
    
        $(document).ready(function(){
            $("#sexualorientation-image").click(function(){
              $("#sexualorientation-image").slideDown('').show('');
             $("#sexualorientation").show('');
             $("#sex-image").hide('');
             $("#pregnancy-image").hide('');
             $("#contraceptives-image").hide('');
             $("#periods-image").hide('');
            });
            $("#sexualorientation").click(function(){
              $("#sexualorientation").slideUp('');
              $("#sexualorientation-image").slideDown('');
              $("#periods-image").show('');
              $("#sex-image").show('');
              $("#pregnancy-image").show('');
              $("#contraceptives-image").show('');
            });
            
          });
          
          $(document).ready(function(){
            $("#periods-image").click(function(){
              $("#periods-image").slideDown('').show('');
              $("#periods").show('');
              $("#sexualorientation-image").hide('');
              $("#pregnancy-image").hide('');
              $("#contraceptives-image").hide('');
              $("#sex-image").hide('');
            });
            $("#periods").click(function(){
              $("#periods").slideUp('');
              $("#periods-image").slideDown('');
              $("#sexualorientation-image").show('');
              $("#sex-image").show('');
              $("#pregnancy-image").show('');
              $("#contraceptives-image").show('');
            });
          });
          
          $(document).ready(function(){
            $("#sex-image").click(function(){
              $("#sex-image").slideDown('').show('');
              $("#sex").show('');
              $("#sexualorientation-image").hide('');
              $("#pregnancy-image").hide('');
              $("#contraceptives-image").hide('');
              $("#periods-image").hide('');
            });
            $("#sex").click(function(){
              $("#sex").slideUp('');
              $("#sex-image").slideDown('');
              $("#periods-image").show('');
              $("#sexualorientation-image").show('');
              $("#pregnancy-image").show('');
              $("#contraceptives-image").show('');
            });
          });
          $(document).ready(function(){
            $("#pregnancy-image").click(function(){
              $("#pregnancy-image").slideDown('').show('');
              $("#pregnancy").show('');
              $("#sexualorientation-image").hide('');
              $("#periods-image").hide('');
              $("#contraceptives-image").hide('');
              $("#sex-image").hide('');
            });
            $("#pregnancy").click(function(){
              $("#pregnancy").slideUp('');
              $("#pregnancy-image").slideDown('');
              $("#periods-image").show('');
              $("#sexualorientation-image").show('');
              $("#sex-image").show('');
              $("#contraceptives-image").show('');
            });
          });
          $(document).ready(function(){
            $("#contraceptives-image").click(function(){
              $("#contraceptives-image").slideDown('').show('');
              $("#contraceptives").show('');
              $("#sexualorientation-image").hide('');
              $("#periods-image").hide('');
              $("#pregnancy-image").hide('');
              $("#sex-image").hide('');
            });
            $("#contraceptives").click(function(){
              $("#contraceptives").slideUp('');
              $("#contraceptives-image").slideDown('');
              $("#periods-image").show('');
              $("#sexualorientation-image").show('');
              $("#pregnancy-image").show('');
              $("#sex-image").show('');
            });
          });
    
    
    
       