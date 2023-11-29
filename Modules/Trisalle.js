
class Trisalle 
{ 
    constructor ()
    {
    }
    //On veut afficher tous les objets de type salle triés d'une façon décroissante selon le nombre de places par salle.
    //fonction trier(tab_capacite, tab_salle) qui prend en paramètre deux tableaux : tab_capacite et tab_salle
        trier(tab_capacite, tab_salle)
         {
            var len = tab_capacite.length;
            var temp, i, j, temp1;
             //On va utiliser l'algorithme de tri par insertion
            for (i = 1; i < len; i++) 
            {
                temp = parseInt(tab_capacite[i]);
                temp1 = tab_salle[i];
                j = i - 1;
                //On va comparer chaque élément du tableau avec les éléments qui le précèdent
                while (parseInt(tab_capacite[j]) < temp && j >= 0) 
                {
                    tab_capacite[j + 1] = tab_capacite[j];
                    tab_salle[j + 1] = tab_salle[j];
                    j--;
                }
                //On va insérer l'élément dans la bonne position
                    tab_capacite[j + 1] = temp;
                    tab_salle[j + 1] = temp1;
            }
             //On affiche le tableau tab_salle et tab_capacite triés
            for (i = 0; i < tab_capacite.length; i++) 
            {
                console.log(tab_salle[i] + " " + tab_capacite[i]);
            }
        }
}
module.exports = Trisalle;
