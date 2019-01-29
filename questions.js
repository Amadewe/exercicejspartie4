/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

 // on cherche la taille du texte avec la fonction length
var tailleString = function (texte) {
    return texte.length;
}

// On remplace e par des espaces avec la fonction replace
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
// on concat le texte1 et 2 avec la fonction concat
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
//  Afficher le cinquième caractère de la chaine içi un "e" avec la propriété substr
// .substr(début[, longueur])
var afficherCar5 = function (texte) {
    return texte.substr(4, 1);
}
// Afficher les 9 premiers caractères
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
//  Mettre en majuscule la chaine
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
//  Mettre en minuscule la chaine
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
// Supprimer les espaces avant et après la chaine
var SupprEspaceString = function (texte) {
    return texte.trim();
}
// Afficher true si le parametre d'entrée de la fonction est de type string
var IsString = function (texte) {
    return typeof '' === 'string';
}
// Afficher l'extension du fichier
var AfficherExtensionString = function (texte) {
  var test = texte.split('.');
    return test[1];
}
// Compter le nombre d'espace dans la chaine
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
//  Inverser une chaine de caractères
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

 // Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
// Afficher la valeur absolue d'un nombre
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
// Afficher les valeurs absolues de plusieurs nombres
var valeurAbsolueArray = function (array) {
  // Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.
//   var x = ["un", "deux", "trois" ]; => dans l'exo notre variable x est égal à array
//   for(var i= 0; i < x.length; i++){
// Maintenant on veut que notre variable soit égale à la valeur absolue de x + i
// donc on crée une variable var1 avec la fonction Math.abs()
//   var var1 = Math.abs(x[i]);
// }

for (var i = 0; i < array.length; i++) {
  var ValueAbsolue = Math.abs(array[i]);
  array[i] = ValueAbsolue;
}
    return array;
}
// Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * Math.pow(rayon, 2));
}
//  Calculer l'hypthènuse d'un triangle rectangle
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
// Calculer l'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.
var calculIMC = function (poids, taille) {
    return Math.round((poids/(taille*taille)*100))/100;
}
