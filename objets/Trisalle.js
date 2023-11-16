
class Trisalle 
{ 
    constructor ()
    {
    }
    //On veut afficher tous les objets de type salle triés d'une façon décroissante selon le nombre de places par salle.
        trier()
         {
            var len = tab_capacite.length;
            var temp, i, j, temp1;
            for (i = 1; i < len; i++) 
            {
                temp = parseInt(tab_capacite[i]);
                temp1 = tab_salle[i];
                j = i - 1;
                while (parseInt(tab_capacite[j]) < temp && j >= 0) 
                {
                    tab_capacite[j + 1] = tab_capacite[j];
                    tab_salle[j + 1] = tab_salle[j];
                    j--;
                }
                    tab_capacite[j + 1] = tmp;
                    tab_salle[j + 1] = temp1;
            }
            for (i = 0; i < len; i++) 
            {
                console.log(tab_salle[i] + " " + tab_capacite[i]);
            }
        }
}
