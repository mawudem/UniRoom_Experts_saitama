const prompt = require('prompt-sync')({ sigint: true });
const iCal = require('ical-generator');

class ExportiCal 
{
    constructor(UE_Liste)
    {
        this.UE_Liste = UE_Liste; //liste des UE
        this.cours_a_exporter = new Array(); //liste des cours à exporter
        this.liste_cours = new Array(); //liste des cours à exporter
        this.cal = iCal({name: 'Timetable'}); //création du calendrier
    }

    //trouve le cours dans la liste des UE
    trouver_cours_dliste(nom)
    {
        console.log(this.UE_Liste);
        let i = 0;
        while (this.UE_Liste[i].get_identifiant() != nom)
        {
            i++;
            if (i > this.UE_Liste.length)
            {
                console.error(`Impossible de trouver : `, nom);
                return false;
            }
        }
        return this.UE_Liste[i];
    }

    //Génération du iCalendar
    est_acceptable(heure_debut, minute_debut, heure_fin, minute_fin)
    {
        if ((heure_debut >= 8) && (heure_fin + (minute_fin / 60) <= 20)) //début et fin respectant les limites
        {
            if (heure_debut + (minute_debut / 60) + 1 < heure_fin + (minute_fin / 60)) // horraires cohérents
            {
                return true;
            }
        }
        return false;
    };
     //Ajout d'un cours dans le calendrier
    Ajout_evenement(annee, mois, jour, heure_debut, minute_debut, heure_fin, minute_fin, titre, salle)
    {
        if (this.est_acceptable(heure_debut, minute_debut, heure_fin, minute_fin))
        {
            this.cal.creation_evenement({
                start: new Date(annee, mois, jour, heure_debut - 1, minute_debut, 0, 0, 0),
                end: new Date(annee, mois, jour, heure_fin - 1, minute_fin, 0, 0, 0),
                resume : titre,
                endroit: salle,
                time_zone: 'Europe/London',
            });
        }
        else 
        {
            console.error("Impossible Session Hours")
        }
    };
    //Export du calendrier
    debut_exportation() 
    {
        let input = '';
        while (true) //Choix des cours à inclure dans l'emploi du temps
        {
            input = prompt('Quel cours voulez-vous ajouter ? (entrez un cours ou entrez 0 pour générer le calendrier)').toUpperCase();
            if (parseInt(input) === 0) break;
            let currentUE = this.trouver_cours_dliste(input);
            if (!currentUE === false)
            {
                currentUE.toString();
                input = prompt("Entrez les numéros correspondant à vos créneaux (comme 134 pour 1 3 et 4) : "); //Choisir les sessions
                for (let i = 0; i < input.length; i++) //Ajouter les bons dans la liste des exports
                {
                    if (typeof (parseInt(input[i])) === "number")
                    {
                        this.cours_a_exporter.push(currentUE.getSession(parseInt(input[i]) - 1));
                    }
                }
                console.log('Cours ajoutés à l\'exportation');
            }
        };
        //Choix de la période d'export
        let debut_exportation_jour = prompt("Enter the begining date of the export period (format DD/MM/YYYY): ");
        let fin_exportation_jour = prompt("Enter the ending date of the export period (format DD/MM/YYYY): ");
        debut_exportation = debut_exportation_jour.split('/').filter((val) => !val.match('/'));
        fin_exportation = fin_exportation_jour.split('/').filter((val) => !val.match('/'));
        let nb_jours_exportation = (fin_exportation.getTime() - debut_exportation.get()) / (1000 * 3600 *24);
        this.cam.prodId(
            {
                company: 'iCalendar',
                product: 'Timetable',
                language: 'EN'
            });
        for (let i = 0; i < nb_jours_exportation; i++)
        {
            let jour = new Date(debut_exportation.getFullYear(), debut_exportation.getMonth(), (debut_exportation.getDate() + i), 0, 0);
            let cours_du_jour = this.cours_a_exporter.filter((cours) => (cours.getDay() === jour.getDay()));
            if (cours_du_jour.length > 0)
            {
                for (let j = 0; j < cours_du_jour.length; j++)
                {
                    console.log("Exportation en cours....");
                    cours_du_jour.forEach(session => this.Ajout_evenement(parseInt(jour.getFullYear()), parseInt(jour.getMonth()), parseInt(jour.getDate()), parseInt(session.startHour), parseInt(session.startMinute), parseInt(session.endHour), parseInt(session.endMinute), session.resume, session.endroit));
                }
            }
        }
        //Export du calendrier
        try 
        {
            this.cal.save('./export/timetable.ics');
            console.log('iCalendar exporté')
        }
        catch (error)
        {
            console.error(error);
        }
    }
}

module.exports = ExportiCal;
