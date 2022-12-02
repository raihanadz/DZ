function connexion()
{
    var id = prompt("Donnez votre nom d'utilisateur");
    var mdp = prompt("Entrez votre mot de passse");
    if (id == "admin" && mdp == "admin")
    {
        document.write("Bienvenue:   " + id);
    }
    else
    {
        alert("Accès refusé");
    }
}

function chaine_caractere()
{
    var chaine=prompt("Donnez un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chiane contient  "+ chaine.length+"   caracteres  " + "<br>");
    document.write("La première lettre est  "+chaine.substr(0,1)+"<br>");
}

function affichage_tableau(){

document.write("<table border=2 width=30%>");
        for (i=0; i <=5; i++)
        {
            document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
        }
        document.write("</table>");
    
}

function affichage_tableau2()
{
    var id = prompt("Donnez le nombre de lignes pour le tableau")
    document.write("<table border=2 width=30%>");
            for (i=0; i <=id; i++)
            {
                document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>")
            }
            document.write("</table>");

}

function fun_switch()
{
    var color = prompt("Entrez une couleur");

    switch(color)
    {
        case "vert": document.body.style.background = "green";;
        break;
        case "VERT": document.body.style.background = "green";;
        break;
        case "bleu": document.body.style.background = "blue";;
        break;
        case "BLEU": document.body.style.background = "bleu";;
        break;
        case "rose": document.body.style.background = "pink";;
        break;
        case "ROSE": document.body.style.background = "pink";;
        break;
        case "orange": document.body.style.background = "orange";;
        break;
        case "ORANGE": document.body.style.background = "orange";;
        break;
              default:alert("Couleur non définie")

    }
}