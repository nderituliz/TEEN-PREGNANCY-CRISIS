$(document).ready(function () {
    $("#one").mouseover(function () {
            $("#feb").show();
        })
        .mouseout(function () {
            $("#feb").hide();
        });
    $("#two").mouseover(function () {
            $("#jul").show();
        })
        .mouseout(function () {
            $("#jul").hide();
        });
    $("#three").mouseover(function () {
            $("#nov").show();
        })
        .mouseout(function () {
            $("#nov").hide();

        });
    });


    $(document).ready(function(){
        $("#edu").hide();
        $("#cop").hide();
        $("#hel").hide();
    
        $("#one").click(function(){
          $("#edu").toggle();
        });
    
        $("#two").click(function(){
            $("#cop").toggle();
        });
    
        $("#three").click(function(){
    
            $("#hel").toggle();
            
        });
    
    
    });