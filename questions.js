/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

 // on cherche la taille du texte avec la fonction length
 // Cette propriété renvoie le nombre de « codets » (ou unités de code ou bien code units en anglais) d'une chaîne de caractères
var tailleString = function (texte) {
    return texte.length;
}

// On remplace e par des espaces avec la fonction replace
// la méthode replace() renvoie une nouvelle chaîne de caractères dans laquelle tout ou partie des correspondances à un modèle sont remplacées par un remplacement
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
// on concat le texte1 et 2 avec la fonction concat
// La méthode concat() combine le texte de plusieurs chaînes avec la chaîne appelante et renvoie la nouvelle chaîne ainsi formée.
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
//  Afficher le cinquième caractère de la chaine içi un "e" avec la propriété substr
// La méthode substr() retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.
// .substr(début[, longueur])
var afficherCar5 = function (texte) {
    return texte.substr(4, 1);
}
// Afficher les 9 premiers caractères
// La méthode substr() retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.
// .substr(début[, longueur])
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
//  Mettre en majuscule la chaine
// La méthode toUpperCase() retourne la valeur de la chaîne courante, convertie en majuscules
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
//  Mettre en minuscule la chaine
// La méthode toLowerCase() retourne la chaîne de caractères courante en minuscules.
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
// Supprimer les espaces avant et après la chaine
// La méthode trim() permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement (espace, tabulation, espace insécable, etc.)
var SupprEspaceString = function (texte) {
    return texte.trim();
}
// Afficher true si le parametre d'entrée de la fonction est de type string
// L'opérateur typeof renvoie une chaîne qui indique le type de son opérande.
// operande est une expression qui représente la valeur dont on souhaite obtenir le type.
//  'string', 'numbers', 'boolean'... sont des résultats possibles de l'opérateur typeof.
//  exemple : typeof "bla" === 'string';
var IsString = function (texte) {
    return typeof '' === 'string';
}
// Afficher l'extension du fichier
// La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
// içi on met extention[1], car on veut afficher l'extention si on voulait le nom du fichier on mettrait extention[0]
var AfficherExtensionString = function (texte) {
  var extension = texte.split('.');
    return extension[1];
}
// Compter le nombre d'espace dans la chaine
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
//  Inverser une chaine de caractères
// split renvoie un tableau sur lequel on peut appliquer reverse
// enfin on utilise join pour assembler le tout.
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

 // Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
 // La fonction Math.pow() renvoie un nombre à une certaine puissance
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
// Afficher la valeur absolue d'un nombre
// La fonction Math.abs() retourne la valeur absolue d'un nombre, c'est-à-dire
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
// La propriété Math.PI représente le ratio entre le périmètre d'un cercle et son diamètre. Elle vaut environ 3.14159:
// La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * Math.pow(rayon, 2));
}
//  Calculer l'hypthènuse d'un triangle rectangle
// La fonction Math.hypot() renvoie la racine carrée de la somme des carrés de ses arguments.
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
// Calculer l'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.
var calculIMC = function (poids, taille) {
    return Math.round((poids/(taille*taille)*100))/100;
}
