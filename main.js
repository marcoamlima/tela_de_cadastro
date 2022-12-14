$(document).ready(function() {
    $("#usuario").keyup(function(){
        let usuario = $('#usuario').val();
        if(usuario.length > 1){
            $("#usuario_label").css("margin-top", "0");
        }else{
            $("#usuario_label").css("margin-top", "0.813rem");
        }
    });
    
    $("#senha").keyup(function(){
        let senha = $('#senha').val();
        if(senha.length > 1){
            $("#senha_label").css("margin-top", "0");
        }else{
            $("#senha_label").css("margin-top", "0.813rem");
        }
    });
});