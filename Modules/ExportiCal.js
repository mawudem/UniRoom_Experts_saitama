const prompt = require('prompt-sync')({ sigint: true });
const iCal = require('ical-generator');
const fs = require('fs');

class ExportiCal {
    constructor(UE_Liste) {
        this.UE_Liste = UE_Liste; //liste des UE
        this.cours_a_exporter = new Array(); //liste des cours à exporter
        this.liste_cours = new Array(); //liste des cours à exporter
        this.cal = iCal({ name: 'Timetable' }); //création du calendrier
    }

    //permet de verifier si une date est bien au format DD/MM/YYYY
    dateValide(input) {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(input);
    }

    //permet de vérifier que l'on saisie des chiffres
     numValide(input) {
        return /^\d+$/.test(input) && input.length > 0;
    }
    

    //trouve le cours dans la liste des UE
    trouver_cours_dliste(nom) {
        let i = 0;
        while (i < this.UE_Liste.length) {
            if (this.UE_Liste[i].get_identifiant() === nom) {
                console.log(this.UE_Liste[i]);
                return this.UE_Liste[i];
            }
            i++;
        }
        console.error(`Impossible de trouver : `, nom);
        return false;
    }


    //Génération du iCalendar
    est_acceptable(heure_debut, minute_debut, heure_fin, minute_fin) {
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
    Ajout_evenement(annee, mois, jour, heure_debut, minute_debut, heure_fin, minute_fin, titre, salle) {
        if (this.est_acceptable(heure_debut, minute_debut, heure_fin, minute_fin)) {

            this.cal.createEvent({
                start: new Date(annee, mois, jour, heure_debut, minute_debut, 0, 0, 0),
                end: new Date(annee, mois, jour, heure_fin, minute_fin, 0, 0, 0),
                summary: titre,
                location: salle,
                time_zone: 'Europe/London',
            });
        }
        else {
            console.error("Impossible Session Hours")
        }
    };
    //Export du calendrier
    debut_exportation() {
        let input = '';
        while (true) //Choix des cours à inclure dans l'emploi du temps
        {
            input = prompt('Quel cours voulez-vous ajouter ? (entrez un cours ou entrez 0 pour générer le calendrier)').toUpperCase();
            if (parseInt(input) === 0) break;
            let currentUE = this.trouver_cours_dliste(input);
            if (!currentUE === false) {
                currentUE.toString();
                let imput = '';
                //vérifier la saisie
                do {
                    input = prompt("Entrez les numéros correspondant à vos créneaux (ex: 123) : ");
                    if (!this.numValide(input)) {
                        console.log("Saisie incorrecte. Veuillez entrer uniquement une série de chiffres.");
                    }
                } while (!this.numValide(input));

                //input = prompt("Entrez les numéros correspondant à vos créneaux (comme 134 pour 1 3 et 4) : "); //Choisir les sessions
                for (let i = 0; i < input.length; i++) //Ajouter les bons dans la liste des exports
                {
                    if (typeof (parseInt(input[i])) === "number") {
                        this.cours_a_exporter.push(currentUE.get_Session(parseInt(input[i]) - 1));
                    }
                }
                console.log('Cours ajoutés à l\'exportation');
            }
        };
        //Choix de la période d'export
        let debut_exportation_jour = '';
        let fin_exportation_jour = '';
        //verifier la saisie de l'utilisateur
        do {
            debut_exportation_jour = prompt("Entrez la date de début de la période a exporter (format DD/MM/YYYY): ");
            if (!this.dateValide(debut_exportation_jour)) {
                console.log("Saisie invalide. Entrez une date au format DD/MM/YYYY.");
            }
        } while (!this.dateValide(debut_exportation_jour));

        do {
            fin_exportation_jour = prompt("Entrez la date de fin de la période a exporter (format DD/MM/YYYY): ");
            if (!this.dateValide(fin_exportation_jour)) {
                console.log("Saisie invalide. Entrez une date au format DD/MM/YYYY.");
            }
        } while (!this.dateValide(fin_exportation_jour));


        let debut_date = new Date(
            parseInt(debut_exportation_jour.split('/')[2]),
            parseInt(debut_exportation_jour.split('/')[1]) - 1,
            parseInt(debut_exportation_jour.split('/')[0]) + 1
        );

        let fin_date = new Date(
            parseInt(fin_exportation_jour.split('/')[2]),
            parseInt(fin_exportation_jour.split('/')[1]) - 1,
            parseInt(fin_exportation_jour.split('/')[0]) + 1
        );

        let nb_jours_exportation = Math.round(Math.abs(fin_date - debut_date) / (1000 * 60 * 60 * 24));

        for (let i = 0; i < nb_jours_exportation; i++) {
            let jour = new Date(debut_date.getFullYear(), debut_date.getMonth(), debut_date.getDate() + i, 0, 0);
            let cours_du_jour = this.cours_a_exporter;

            if (cours_du_jour.length > 0) {
                //for (let j = 0; j < cours_du_jour.length; j++) {
                console.log("Exportation en cours....");
                cours_du_jour.forEach(session => this.Ajout_evenement(parseInt(jour.getFullYear()), parseInt(jour.getMonth()), parseInt(jour.getDate()), parseInt(session.get_h_debut()), parseInt(session.get_min_debut()), parseInt(session.get_h_fin()), parseInt(session.get_min_fin()), session.get_sommaire(), session.get_Salle()));
                //}
            }
        }
        //Export du calendrier
        try {

            const filePath = './timetable.ics';
            fs.writeFileSync(filePath, this.cal.toString());
            console.log('iCalendar exporté');
        }
        catch (error) {
            console.error(error);
        }
    }
}

module.exports = ExportiCal;
