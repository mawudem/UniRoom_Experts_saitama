class Salle 
{
    constructor(salle_id, nb_places)
    {
        this.salle_id = salle_id;
        this.nb_places = nb_places;
        let j24hr = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        this.sessions = new Array(j24hr, j24hr, j24hr, j24hr, j24hr, j24hr, j24hr);
    }
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
    getNbPlaces()
    {
        return parseInt(this.nb_places);
    }
    getSalle()
    {
        return this.salle_id;
    }
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
    get_SessionIndice(jour, indice)
    {
        return this.sessions[jour][indice];
    }
    get_SessionHeure(jour, heure)
    {
        return this.sessions[jour][this.heuresToIndex(heure)];
    }
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
