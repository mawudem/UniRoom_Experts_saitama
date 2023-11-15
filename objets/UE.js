class UE {
    constructor(identifiant, listeSession) {
        this.identifiant = identifiant; //Identifiant de l'UE, string
        this.listeSession = listeSession; //Liste des sessions de cours pour une ue, tableau de Session
    }

    //affiche les informations d'une UE
    String() {
            this.listeSession.forEach(session => console.log(session.toString()));
    }

    //Retourne l'identifiant d'une UE
    get_identifiant() {
        return this.identifiant;
    }

    //Retourne pour un identifiant donné la liste des salles associées à l'UE
    get_liste_Salle(identifiant) {
       return this.listeSession.forEach(session => session.get_Salle())
    }

    //Retourne pour un identifiant donné la liste des sessions associées à l'UE
    get_liste_Session() {
        return this.listeSession;
    }

    //Retourne le nombre de session pour une UE
    get_nb_Sessions() {
        return this.listeSession.length;
    }

    


}

module.exports = UE;