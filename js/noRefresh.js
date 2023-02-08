$(document).ready(function() {
    $("#formAutoWork").submit(function(){

        var dados = jQuery(this).serialize();

        $.ajax({
            url: '../php/enviarForm.php',
            cache: false,
            data: dados,
            type: "POST",

            success: function(){
                alert("Formulário enviado!");
            }

        });

        return false;
    });
});