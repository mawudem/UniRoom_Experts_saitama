class AnalysSalle
{

    constructor(liste_salle){
        this.liste_salle=liste_salle; //tableau de salles
    }

    //retourne l'index de la salle dans liste_salle
    get_salle_index(salle) {
        let index;
        for(let i=0; i<this.liste_salle.length();i++){
            if(this.liste_salle[i]==salle.salle_id){
                index=i;
                break;
            }
        }
        return index;
    }

    //verifie la disponiblite d'une salle pour un jour et une heure donnée
    is_disponible(salle, jour, heure) {
        let libre = new Boolean(true);
        if (salle.sessions[jour][i] != 0) {
            libre = false;
        }
        return libre;
    }

    //recupere la capacité de la salle
    get_capacite(salle) {
        return salle.getNbPlaces();
    }
}

module.exports = AnalysSalle;
