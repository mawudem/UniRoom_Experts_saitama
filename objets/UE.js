class UE{
    constructor(identifiant,listeSalle,listeSession){
        this.identifiant=identifiant; //Identifiant de l'UE, string
        this.listeSalle=listeSalle; //Liste des salles associées à l'identifiant de l'UE, tableau de Salle
        this.listeSession=listeSession; //Liste des sessions de cours pour une ue, tableau de Session
    }

    //affiche les informations d'une UE
    String(){
        return ("UE : "+this.identifiant+", Salles : "+this.listeSalle+", Sessions : "+this.listeSession);
    }

    //Retourne l'identifiant d'une UE
    getIdentifiant(){
        return this.identifiant;
    }

    //Retourne pour un identifiant donné la liste des salles associées à l'UE
    getListeSalle(identifiant){
        return this.listeSalle;
    }

}