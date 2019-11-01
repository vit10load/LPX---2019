

$(document).ready(function(){
   
    
    $(".menuIcon").click(function (){
        
        $('.menuLista').toggleClass("active");
    })
    
    console.log("clicou no button e adicionou a classe");
    
    $(".closebtn").click(function (){
       
        $('.menuLista').toggleClass("active");
        
    });
    
});

