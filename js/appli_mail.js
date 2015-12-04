// Javascript file

// fonction de test d'ouverture de la fenêtre pour la refermer si elle est ouverte
var testouverture = function()
{
    if (win && win.open && !win.closed)
        win.close();
}

//fonction de récupération et d'ouverture du client de messagerie de la personne pour envoyer le mail
var envoi_mail = function()
{
    // récupération du corps du message
    var temp = corps.value;
    var message = "";

    // boucle pour remplacer le code du retour à la ligne javascript afin d'avoir les retour à la ligne dans le client de messagerie
    while (temp.indexOf("\n") != -1)
    {
        message = temp.replace("\n", "%0A");
        temp = message;
    }

    // sauts de ligne et insertion du nom de l'expéditeur en fin de message
    var corps_message = message + "%0A %0A" + nom.value;

    var lienmail = 'mailto:' + email + '?subject=' + sujet.value + '&body=' + corps_message;

    // si tous les champs sont remplis : envoi du mail au client de messagerie sinon affichage d'un popup
    if (sujet.value != "" && nom.value != "" && corps.value != "")
    {
        win = window.open(lienmail, 'Fenetre mail');
        setTimeout(testouverture, 100);
    }
    else
    {
        alert("Merci de remplir enti\u00e8rement le formulaire")
    }


};

//création des variables en récupérant les objets suiavnt les id
var email = 'adrien_bon@etu.u-bourgogne.fr';
var nom = document.getElementById('nom_contact');
var sujet = document.getElementById('sujet_message');
var corps = document.getElementById('message');
var bouton = document.getElementById('envoyer');

// initialisation des valeurs vides au chargement de la page (problème actualisation firefox qui garde les indos précédemment renseignées)
nom.value = "";
sujet.value = "";
corps.value = "";

//création écouteur sur l'évenment click sur le bouton
bouton.addEventListener('click', envoi_mail, false);
