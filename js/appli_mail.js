// Javascript file

var envoi_mail = function()
{
    var corps_message = corps.value + "%0A %0A" + nom.value;
    var lienmail = 'mailto:' + email + '?subject=' + sujet.value + '&body=' + corps_message;

    win = window.open(lienmail, 'Fenetre mail');
    if (win && win.open && !win.closed) win.close();

};

var email = 'adrien_bon@etu.u-bourgogne.fr';
var nom = document.getElementById('nom_contact');
var sujet = document.getElementById('sujet_message');
var corps = document.getElementById('message');
var bouton = document.getElementById('envoyer');


bouton.addEventListener('click', envoi_mail, false);
