
function majProfil(pseudo) {
    $.get("http://localhost/site/API/getProfil.php?name="+pseudo).done( function(data){
        profil = jQuery.parseJSON(data);

        $("#pseudo").text(profil.name);
        $("#level").text("Level"+profil.summonerLevel);
        $("#icon").attr('src','http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/'+profil.profiliconid+'.png');
    });

}

$(document).ready(function() {

    majProfil("toto");

    $("#input_button").click(function(){
        var textDELUtilisateur =$("#input_text").val();
        majProfil(textDELUtilisateur);
});

