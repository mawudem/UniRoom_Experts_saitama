const salle = require('../objets/Salle.js')
class Trisalle 
{ 

    constructor (liste_salle)
    {
        this.liste_salle = liste_salle;
    }
    //On veut afficher tous les objets de type salle triés d'une façon décroissante selon le nombre de places par salle.
        trier() {
            let n = this.liste_salle.length;
            let passage = true;
    
            while (passage) {
                passage = false;
    
                for (let i = 0; i < n - 1; i++) {
                    if (this.liste_salle[i].getNbPlaces() < this.liste_salle[i + 1].getNbPlaces()) {
                        // Échanger les éléments si l'ordre n'est pas correct
                        let temp = this.liste_salle[i];
                        this.liste_salle[i] = this.liste_salle[i + 1];
                        this.liste_salle[i + 1] = temp;
    
                        passage = true;
                    }
                }
            }
    
            return this.liste_salle;
        }

}
