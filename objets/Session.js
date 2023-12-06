class Session 
{

    constructor(nb_places, num_jour, text_jour, h_debut, min_debut, min_fin, heure_fin, salle_id, sommaire)
    {
        this.nb_places = nb_places; //nb_places c'est un entier 
        this.num_jour = num_jour; // num_jour est un entier compris entre 1 et 31
        this.text_jour = text_jour; // text_jour est un string des jours de la semaine (lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche)
        this.h_debut = h_debut; // h_debut est un entier compris entre 0 et 23
        this.min_debut = min_debut; // min_debut est un entier compris entre 0 et 59
        this.min_fin = min_fin; // min_fin est un entier compris entre 0 et 59
        this.heure_fin = heure_fin; // heure_fin est un entier compris entre 0 et 23
        this.salle_id = salle_id; // salle_id est un string
        this.sommaire = sommaire;  // sommaire est un string
    }
    // String() permet d'afficher les informations de la session
    String()
    {
        return (this.sommaire + " " + this.text_jour + " " + this.h_debut + ":" + this.min_debut + " " + this.heure_fin + ":" + this.min_fin + " " + this.nb_places + " " + this.salle_id);
    }
    // get_jour() permet de retourner le numéro du jour de la session
    get_jour()
    {
        return parseInt(this.num_jour);
    }
    // get_debut() permet de retourner l'heure de début de la session
    get_debut()
    {
        return parseInt(this.h_debut) + parseInt(this.min_debut)/60;
    }
    // get_fin() permet de retourner l'heure de fin de la session
    get_fin()
    {
        return parseInt(this.heure_fin) + parseInt(this.min_fin)/60;
    }
    // get_NbPlaces() permet de retourner le nombre de places de la session
    get_NbPlaces()
    {
        return this.nb_places;
    }
    // get_Salle() permet de retourner l'id de la salle de la session
    get_Salle()
    {
        return this.salle_id;
    }

    //test pour le ical


    get_h_debut(){
        return this.h_debut;
    }
    get_min_debut(){
        return this.min_debut;
    }
    get_h_fin(){
        return this.heure_fin;
    }
    get_min_fin(){
        return this.min_fin;
    }
    get_sommaire(){
        return this.sommaire;
    }

};

module.exports = Session;