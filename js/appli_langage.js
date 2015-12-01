// JavaScript source code

var ajout_langage = document.getElementById('nom_ajout_langage');
var type_langage = document.getElementById('type_ajout_langage');
var valeur_langage = document.getElementById('value_ajout_langage');
var bouton_ajout = document.getElementById('bouton_ajout');

var ajoute_langage = function()
{
    
    if (document.getElementById(ajout_langage.value.toLowerCase()) == null)
    {
        if (ajout_langage.value != "" && valeur_langage.value >= 0 && valeur_langage.value <= 100) {
            var bloc = 'bloc_' + ajout_langage.value;

            var p = document.createElement('p');
            p.setAttribute('id', bloc.toLowerCase());

            var label1 = document.createElement('label');
            label1.setAttribute('for', ajout_langage.value.toLowerCase());
            label1.setAttribute('class', 'titre_langage');
            label1.innerHTML = ajout_langage.value.toLowerCase();

            var meter = document.createElement('meter');
            meter.setAttribute('class', 'jauge');
            meter.setAttribute('id', ajout_langage.value.toLowerCase());
            meter.setAttribute('value', valeur_langage.value);
            meter.setAttribute('min', '0');
            meter.setAttribute('max', '100');
            meter.setAttribute('low', '20');
            meter.setAttribute('high', '60');
            meter.setAttribute('optimum', '85');

            var label2 = document.createElement('label');
            label2.setAttribute('for', 'modif_' + ajout_langage.value.toLowerCase());
            label2.innerHTML = " Modifier: ";

            var input = document.createElement('input');
            input.setAttribute('class', 'modif');
            input.setAttribute('type', 'number');
            input.setAttribute('id', 'modif_' + ajout_langage.value.toLowerCase());
            input.setAttribute('value', valeur_langage.value);
            input.setAttribute('min', '0');
            input.setAttribute('max', '100');

            input.addEventListener('mouseup', modif_valeur, false);
            input.addEventListener('keyup', modif_valeur, false);

            var button = document.createElement('button');
            button.setAttribute('id', 'suppr_' + ajout_langage.value.toLowerCase());
            button.setAttribute('class', 'suppr_langage');

            button.addEventListener('click', suppr_langage, false);

            var img = document.createElement('img');
            img.setAttribute('alt', 'suppr');
            img.setAttribute('title', 'supprimer');
            img.setAttribute('src', 'images/minus75.png');

            button.appendChild(img);

            p.appendChild(label1);
            p.appendChild(meter);
            p.appendChild(label2);
            p.appendChild(input);
            p.appendChild(button);

            var section = document.getElementById(type_langage.value);
            section.appendChild(p);

        }
    }
    else
    {
        alert("Erreur : langage deja present dans la liste");
    }
    
    

}

bouton_ajout.addEventListener('click', ajoute_langage, false);

var modif_valeur = function(elem)
{
    var id = elem.target.id.substring(6);
    var value_init = document.getElementById(id).value;
    var value = elem.target.value;
    if (value >= 0 && value <= 100)
    {
        document.getElementById(id).value = value;
    }
    else
    {
        elem.target.value = value_init;
    }
}

var modif_val = document.getElementsByClassName("modif");

function addEventListenerListe(liste, event, fonction)
{
    for (var i = 0; i < liste.length; i++)
    {
        liste[i].addEventListener(event, fonction, false);
    }
}

addEventListenerListe(modif_val, 'keyup', modif_valeur);
addEventListenerListe(modif_val, 'mouseup', modif_valeur);

var suppr = document.getElementsByClassName('suppr_langage');

addEventListenerListe(suppr, 'click', suppr_langage);

function suppr_langage(elem)
{
    
    if (elem.target.nodeName.toLowerCase() == "img")
    {
        var id = "bloc_" + elem.target.parentElement.id.substring(6);
    }
    else
    {
        var id = "bloc_" + elem.target.id.substring(6);
    }
    
    var id_section = document.getElementById(id).parentElement.getAttribute('id');

    var section = document.getElementById(id_section);

    section.removeChild(document.getElementById(id));
    
}