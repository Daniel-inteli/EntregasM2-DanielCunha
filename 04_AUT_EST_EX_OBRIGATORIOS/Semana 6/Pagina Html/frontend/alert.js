$( document ).ready(function() {
    alert("Essa mensagem foi escrita utilizando o .ready do jquery")

});
function getDados() {
    $.ajax({
        url:"http://localhost:3055/curriculo",
        method: "GET",
        success: function (res){
            $("#nomeDb").html(res.Nome)
            console.log(res.Nome)
        }
    })
}