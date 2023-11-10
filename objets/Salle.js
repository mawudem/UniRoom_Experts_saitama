class Salle 
{
    constructor(salle_id, nb_places)
    {
        this.salle_id = salle_id; //l'id de la salle c'est un String
        this.nb_places = nb_places; //nb_places c'est un entier
        let j24hr = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); // 8h 9h 10h 11h 12h 13h 14h 15h 16h 17h 18h, 30 minutes entre chaque 0.
        this.sessions = new Array(j24hr, j24hr, j24hr, j24hr, j24hr, j24hr, j24hr); //listes des jours.
    }
    //Ajuste la capacité d'une salle pour qu'elle soit toujours un nombre pair et supérieure ou égale à la capacité actuelle de la salle.
    setNbPlaces(places)
    {
        let nouv_places = parseInt(places);
        if (places > this.getNbPlaces())
        {
            if (nouv_places % 2 === 0)
            {
                this.nb_places = nouv_places;
            }
            else
            {
                this.nb_places = nouv_places + 1;
            }
        }
    }
    //Retourne la capacité de la salle.
    getNbPlaces()
    {
        return parseInt(this.nb_places);
    }
    //Retourne le id de la salle.
    getSalle()
    {
        return this.salle_id;
    }
    //vérifie si une salle est libre pendant une plage horaire spécifique sur un jour donné de la semaine en analysant les session programmées dans la salle pour cette période.
    is_libre(jour, debut, fin)
    {
        let libre = new Boolean(true);
        for (let i = debut; i < fin; i++)
        {
            if (this.sessions[jour][i] !== 0)
            {
                libre = false;
            }
        }
        return libre;
    }
    //L'ajout d'une session à la liste des sessions planifiées pour une salle, à condition que la salle soit libre pendant la plage horaire spécifiée
    Ajout_session(session)
    {
        let jour = session.get_jour();d
        let debut = this.heuresToIndex(session.get_debut());
        let fin = this.heuresToIndex(session.get_fin())-1; 
        if (this.is_libre(jour, debut, fin))
        {
            for (let i = debut ; i < fin; i++)
            {
                this.sessions[jour][fin] = session;
            }
        }
    }
    //itérer sur toutes les sessions d’un jour donné (j) et afficher chacune d’elles dans la console afficher chacune d'elles dans la console puis retourner la session correspondant à l’indice.
    get_SessionIndice(jour, indice)
    {
        return this.sessions[jour][indice];
    }
    //retourne la session planifiée pour un jour (jour) et une heure (heure) elle utilise la fonction get_SessionIndice.
    get_SessionHeure(jour, heure)
    {
        return this.sessions[jour][this.heuresToIndex(heure)];
    }
    //convertit une heure (h) en un indice qui représente l’heure dans le tableau this.session l’indice est calculé en multiplianrt l’heure par 2 et en sostrayant 16 mais il y a une limite de 24h (de0 à 24) et la fonction renvoie -1 si l’heure est en dehors de cette plage.
    heures_a_Indice(heure)
    {
        let i = 2 * heure - 16;
        if (i >= 0 && i <= 24)
        {
            return i;
        }
        else
        {
            console.error("heure impossible", heure);
            return -1;
        }
    }

};

module.exports = Salle;
