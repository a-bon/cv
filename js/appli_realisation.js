// JavaScript source code

// fonction permettant d'ajouter un écouteur sur plusieurs éléments récupérés en getElementsByClassName
function addEventListenerListe(liste, event, fonction)
{
    for (var i = 0; i < liste.length; i++)
    {
        liste[i].addEventListener(event, fonction, false);
    }
}

// fonction d'ouverture d'une fenêtre affichant l'image cliquée
var image_fen = function (elem) {
    window.open(elem.target.src, 'image');
}

// fonction d'affichage des informations sur l'appli sélectionnée dans la page html
var affich_appli = function (elem) {

    // affichage du bloc contenant toutes les informations
    document.getElementById('affich_appli').style.display = "block";

    // récupération de l'id de l'appli sélectionnée
    var id = elem.target.id;
    document.getElementById('titre_appli').innerHTML = document.getElementById(id).innerHTML;

    // affichage des informations suivant l'id récupéré
    if (id == "film")
    {
        //affichage de la description correspondante et masquage des autres
        document.getElementById('descriptif_appli_film').style.display = "block";
        document.getElementById('descriptif_appli_gpi').style.display = "none";
        document.getElementById('descriptif_appli_prev').style.display = "none";

        //affichage des images correspondante et masquage des autres
        document.getElementById('img_film').style.display = "block";
        document.getElementById('img_gpi').style.display = "none";
        document.getElementById('img_prev').style.display = "none";
    }
    else if (id == "gpi") {
        //affichage de la description correspondante et masquage des autres
        document.getElementById('descriptif_appli_film').style.display = "none";
        document.getElementById('descriptif_appli_gpi').style.display = "block";
        document.getElementById('descriptif_appli_prev').style.display = "none";

        //affichage des images correspondante et masquage des autres
        document.getElementById('img_film').style.display = "none";
        document.getElementById('img_gpi').style.display = "block";
        document.getElementById('img_prev').style.display = "none";
    }
    else {
        //affichage de la description correspondante et masquage des autres
        document.getElementById('descriptif_appli_film').style.display = "none";
        document.getElementById('descriptif_appli_gpi').style.display = "none";
        document.getElementById('descriptif_appli_prev').style.display = "block";

        //affichage des images correspondante et masquage des autres
        document.getElementById('img_film').style.display = "none";
        document.getElementById('img_gpi').style.display = "none";
        document.getElementById('img_prev').style.display = "block";
    }
}

var liens = document.getElementsByClassName('lien_appli');
addEventListenerListe(liens, 'click', affich_appli);

var images = document.getElementsByClassName('img_appli');
addEventListenerListe(images, 'click', image_fen);
