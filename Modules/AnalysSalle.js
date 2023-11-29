class AnalysSalle {

    constructor(liste_salle){
        this.liste_salle = liste_salle; // tableau de salles
        console.log('liste_salle in constructor:', this.liste_salle);
    }

    // retourne l'index de la salle dans roomliste
    get_salle_index(loc) {
        console.log('liste_salle in get_salle_index:', this.liste_salle);
        let index = -1;
        for (let i = 0; i < this.liste_salle.length; i++) {
            if (this.liste_salle[i].getSalle() === loc){
                index = i;
                break;
            }
        }   
        return index;
    }

    //verifie la disponiblite d'une salle pour un jour et une heure donnée
    is_disponible(salle, jour, heure) {
        let index = this.get_salle_index(salle);
        if (index >= 0) {
            let session = this.liste_salle[index].get_SessionHeure(jour, heure);
            console.log(session.toString());
            if (session === 0) {
                console.log("La salle est libre");
                return true;
            } else {
                let nom = session.toString();
                console.log(`La salle est occupée par ${nom}`);
                return false;
            }
        } else {
            console.error(`Pas de salle ${salle} dans la base de donnée`);
        }
    }

    //recupere la capacité de la salle
    getCapacite(salle){
        let index = this.get_salle_index(salle);
        if (index >= 0) {
             return this.liste_salle[index].getNbPlaces();
        } else {
            console.error(`Pas de salle ${salle} dans la base de données`);
        }
    }
}

module.exports = AnalysSalle;
