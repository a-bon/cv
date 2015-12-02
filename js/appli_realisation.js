// JavaScript source code

function addEventListenerListe(liste, event, fonction)
{
    for (var i = 0; i < liste.length; i++)
    {
        liste[i].addEventListener(event, fonction, false);
    }
}

var image_fen = function (elem) {
    window.open(elem.target.src, 'image');
}

var affich_appli = function (elem) {

    document.getElementById('affich_appli').style.display = "block";

    var id = elem.target.id;
    document.getElementById('titre_appli').innerHTML = document.getElementById(id).innerHTML;
    

    if (id == "film")
    {
        document.getElementById('descriptif_appli_film').style.display = "block";
        document.getElementById('descriptif_appli_gpi').style.display = "none";
        document.getElementById('descriptif_appli_prev').style.display = "none";
        document.getElementById('img_film').style.display = "block";
        document.getElementById('img_gpi').style.display = "none";
        document.getElementById('img_prev').style.display = "none";
    }
    else if (id == "gpi") {
        document.getElementById('descriptif_appli_film').style.display = "none";
        document.getElementById('descriptif_appli_gpi').style.display = "block";
        document.getElementById('descriptif_appli_prev').style.display = "none";
        document.getElementById('img_film').style.display = "none";
        document.getElementById('img_gpi').style.display = "block";
        document.getElementById('img_prev').style.display = "none";
    }
    else {
        document.getElementById('descriptif_appli_film').style.display = "none";
        document.getElementById('descriptif_appli_gpi').style.display = "none";
        document.getElementById('descriptif_appli_prev').style.display = "block";
        document.getElementById('img_film').style.display = "none";
        document.getElementById('img_gpi').style.display = "none";
        document.getElementById('img_prev').style.display = "block";
    }
}

var liens = document.getElementsByClassName('lien_appli');
addEventListenerListe(liens, 'click', affich_appli);

var images = document.getElementsByClassName('img_appli');
addEventListenerListe(images, 'click', image_fen);
