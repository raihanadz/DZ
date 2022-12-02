function calcul_moyenne()
{
    var note1= prompt("donner la premier note: ");
    var coef1= prompt("donnez le premier coeficient");
    var note2= prompt("donner la deuxième note: ");
    var coef2= prompt("donnez le deuxième coeficient");
    var note3= prompt("donner la troisième note: ");
    var coef3= prompt("donnez le troisième coeficient");

    var somme= Number(note1)+Number(note2)+Number(note3);
    var coef= Number(coef1)+Number(coef2)+Number(coef3);

    document.write ("Voici la somme: "+ somme+ "<br>");
    var moyenne= somme/3;

    document.write("Voici la moyenne:" + moyenne+ "<br>");

    if (moyenne<10)
    document.write("Vous êtes redoublant :(");
    else
    document.write("Vous êtes admis :)");

}

function test_age()
{
    var age= prompt("Donnez votre âge");
    if (age<18)
    {
    document.write("Vous êtes mineur :(");
    document.bgColor="red";
    }
    else
    {
    document.write("Vous êtes majeur :)");
    document.bgColor="green";
    }
}

function simple_affichage()
{
    var nom=prompt("Donner votre nom");
    var prenom=prompt("Donner votre prenom");

    document.write("<div style='color: red; background-color: skyblue; padding: 3px; border-radius: 5px; margin:auto; border: 2px solid blue; width:300px; '>");
    document.write("Bonjour"+" " + prenom+ " "+ nom);
    document.write("</div>");
}

function test_couleur()
{
    var couleur= prompt("Donnez une couleur");
    if (couleur=="rouge" ||couleur=="ROUGE" ||couleur=="Rouge")
    
    document.body.style.background="red";
    
    else if (couleur=="bleu" ||couleur=="Bleu"||couleur=="Bleu")
    
    document.body.style.background="blue";

    else if (couleur=="vert" ||couleur=="VERT" ||couleur=="Vert")
    
    document.body.style.background="green";
    
    else
    document.write("Couleur non disponible");


}

function permuter()
{
    var V3= "";
    a = document.getElementById.t1.value;
    b = document.getElementById.t2.value;
    V3=a;
    a=b;
    b=V3;

    t1.value = a;
    t2.value =b;
}

function parite()
{
    var v = Number(document.getElementById("t1").value);
    if (v % 2==0)
       
        alert("Ce nombre est pair")
    else

        alert("Ce nombre est impair")

    
}

function addition()
{
    var a = document.getElementById("t1").value;
    var a = document.getElementById("t1").value;
    var c = Number(a)+Number(b);

    t3.value = c;
}

function soustraction()
{
    var a = document.getElementById("t1").value;
    var a = document.getElementById("t1").value;
    var c = Number(a)-Number(b);

    t3.value = c;
}

function multiplication()
{
    var a = document.getElementById("t1").value;
    var a = document.getElementById("t1").value;
    var c = Number(a)*Number(b);

    t3.value = c;
}

function division()
{
    var a = document.getElementById("t1").value;
    var a = document.getElementById("t1").value;
    var c = Number(a)/Number(b);

    t3.value = c;
}