// JavaScript source code

// fonction permettant d'ajouter un écouteur sur plusieurs éléments récupérés en getElementsByClassName
function addEventListenerListe(liste, event, fonction)
{
    for (var i = 0; i < liste.length; i++)
    {
        liste[i].addEventListener(event, fonction, false);
    }
}

// fonction permettant de modifier les jauges de langage lorsqu'une valeur est modifiée dans les champs nombres
var modif_valeur = function(elem)
{
    // récupération de l'id du champ
    var id = elem.target.id.substring(6);

    // récupération de la valeur avant modification du champ
    var value_init = document.getElementById(id).value;

    // récupération de la nouvelle valeur
    var value = elem.target.value;

    // si la nouvelle valeur est entre 0 et 100 inclus, la valeur de la jauge est changée, sinon remise à la valeur initiale
    if (value >= 0 && value <= 100)
    {
        document.getElementById(id).value = value;
    }
    else
    {
        elem.target.value = value_init;
    }
}


// fonction d'ajout d'un langage dans la catégorie désignée dans la liste déroulante sur la page html
var ajoute_langage = function()
{

    // si l'objet n'existe pas, on le crée sinon on affiche un popup disant que le langage est déja dans la page
    if (document.getElementById(ajout_langage.value.toLowerCase()) == null)
    {
        // si le champ du nom du langage n'est pas vide et que la valeur d'acquisition du langage est comprise entre 0 et 100, on crée le langage
        if (ajout_langage.value != "" && valeur_langage.value >= 0 && valeur_langage.value <= 100)
        {
            // créeation de l'id du bloc
            var bloc = 'bloc_' + ajout_langage.value;

            // création du bloc du langage avec l'id créé pécedemment
            var p = document.createElement('p');
            p.setAttribute('id', bloc.toLowerCase());

            // création du label associé à la jauge du langage
            var label1 = document.createElement('label');
            label1.setAttribute('class', 'titre_langage');
            label1.innerHTML = ajout_langage.value.toLowerCase();

            // création de la jauge ainsi que de ses différents attributs (id, valeur, ...)
            var meter = document.createElement('meter');
            meter.setAttribute('class', 'jauge');
            meter.setAttribute('id', ajout_langage.value.toLowerCase());
            meter.setAttribute('value', valeur_langage.value);
            meter.setAttribute('min', '0');
            meter.setAttribute('max', '100');
            meter.setAttribute('low', '20');
            meter.setAttribute('high', '60');
            meter.setAttribute('optimum', '85');

            // création du label associé au champ de modification de la valeur d'acquisition du langage
            var label2 = document.createElement('label');
            label2.setAttribute('for', 'modif_' + ajout_langage.value.toLowerCase());
            label2.innerHTML = " Modifier: ";

            // création du champ de modification de la valeur d'acquisition du langage
            var input = document.createElement('input');
            input.setAttribute('class', 'modif');
            input.setAttribute('type', 'number');
            input.setAttribute('id', 'modif_' + ajout_langage.value.toLowerCase());
            input.setAttribute('value', valeur_langage.value);
            input.setAttribute('min', '0');
            input.setAttribute('max', '100');

            // ajout des écouteurs d'évenement sur le champ input
            input.addEventListener('mouseup', modif_valeur, false);
            input.addEventListener('keyup', modif_valeur, false);

            // création du bouton de suppression du langage
            var button = document.createElement('button');
            button.setAttribute('id', 'suppr_' + ajout_langage.value.toLowerCase());
            button.setAttribute('class', 'suppr_langage');
            button.style.marginLeft = "0.4%";

            // ajout de l'écouteur de l'évenement click sur le bouton
            button.addEventListener('click', suppr_langage, false);

            // création de l'image du bouton de suppression
            var img = document.createElement('img');
            img.setAttribute('alt', 'suppr');
            img.setAttribute('title', 'supprimer');
            img.setAttribute('src', 'images/minus75.png');

            // ajout de l'image dans le bouton
            button.appendChild(img);

            // ajout des différents champs créés dans le bloc (suivant le même ordre que dans la page html)
            p.appendChild(label1);
            p.appendChild(meter);
            p.appendChild(label2);
            p.appendChild(input);
            p.appendChild(button);

            // récupération de la section correspondant au type de langage et ajout du bloc du nouveau langage dans celle-ci
            var section = document.getElementById(type_langage.value);
            section.appendChild(p);

        }
    }
    else
    {
        alert("Erreur : langage deja present dans la liste");
    }

}

// fonction de suppression d'un langage
function suppr_langage(elem)
{

    // test si clic effectué sur l'image ou sur le bouton(autour de l'image)pour récupération de l'id
    if (elem.target.nodeName.toLowerCase() == "img")
    {
        var id = "bloc_" + elem.target.parentElement.id.substring(6);
    }
    else
    {
        var id = "bloc_" + elem.target.id.substring(6);
    }

    // récupération de l'id de la section du type de langage correspondant (élément parent du bouton)
    var id_section = document.getElementById(id).parentElement.getAttribute('id');

    //récupération de la section suivant l'id récupéré précedemment
    var section = document.getElementById(id_section);

    // suppression du bloc 'p' correspondant à l'id 'bloc_langage' (élément enfant de la section)
    section.removeChild(document.getElementById(id));

}

//récupération des objets html
var ajout_langage = document.getElementById('nom_ajout_langage');
var type_langage = document.getElementById('type_ajout_langage');
var valeur_langage = document.getElementById('value_ajout_langage');
var bouton_ajout = document.getElementById('bouton_ajout');
var suppr = document.getElementsByClassName('suppr_langage');
var modif_val = document.getElementsByClassName("modif");

//ajout des écouteurs sur les différents évènements
addEventListenerListe(modif_val, 'keyup', modif_valeur);
addEventListenerListe(modif_val, 'mouseup', modif_valeur);
addEventListenerListe(suppr, 'click', suppr_langage);

bouton_ajout.addEventListener('click', ajoute_langage, false);
