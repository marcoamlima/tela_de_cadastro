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

    $("#confirmar_senha").keyup(function(){
        let senha = $('#confirmar_senha').val();
        if(senha.length > 1){
            $("#confirmar_senha_label").css("margin-top", "0");
        }else{
            $("#confirmar_senha_label").css("margin-top", "0.813rem");
        }
    });

    $("#nome").keyup(function(){
        let nome = $('#nome').val();
        if(nome.length > 1){
            $("#nome_label").css("margin-top", "0");
        }else{
            $("#nome_label").css("margin-top", "0.813rem");
        }
    });
});