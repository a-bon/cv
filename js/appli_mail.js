// Javascript file

var testouverture = function()
{
    if (win && win.open && !win.closed) win.close();
}

var envoi_mail = function()
{
    var temp = corps.value;
    var message = "";
    while (temp.indexOf("\n") != -1)
    {
        message = temp.replace("\n", "%0A");
        temp = message;
    }   

    var corps_message = message + "%0A %0A" + nom.value;
    
    var lienmail = 'mailto:' + email + '?subject=' + sujet.value + '&body=' + corps_message;

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

var email = 'adrien_bon@etu.u-bourgogne.fr';
var nom = document.getElementById('nom_contact');
var sujet = document.getElementById('sujet_message');
var corps = document.getElementById('message');
var bouton = document.getElementById('envoyer');

nom.value = "";
sujet.value = "";
corps.value = "";

bouton.addEventListener('click', envoi_mail, false);
