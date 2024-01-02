//PROJET GL02 A2023
//SUJET A
//GROUPE : LES EXPERTS

//Objets
var UE = require('./objets/UE');
var Session = require('./objets/Session');
var Salle = require('./objets/Salle');

//Modules
var AnalysSalle = require('./Modules/AnalysSalle');
var iCal = require('./Modules/ExportiCal');
var ImportCRU = require('./Modules/ImportCRU');
var RemplissSalle = require('./Modules/RemplissSalle');
var AnalysCRU = require('./Modules/AnalysCRU');
var Trisalle = require('./Modules/Trisalle');

//Librairies externes
const { readFileSync, promises: fsPromises } = require('fs');
const fs = require("fs");
const { time } = require('console');
const prompt = require('prompt-sync')({ sigint: true });

// instances of classes--------
let orderClass = new Trisalle();
let UE_Liste = new Array();
let analyser = new AnalysCRU();

// --------------------------------

//Fonction qui permet d'éliminer les doublons
function elim__Doublon(article, position, liste) {
    return liste.indexOf(article) === position;
}

let Document_Cru = String;

let importeur = new ImportCRU(); //Importer le document CRU
Document_Cru = importeur.Importation(); //Importer le document CRU
let UEs = analyser.analyse(Document_Cru); //Analyser le document CRU
UE_Liste = UE_Liste.concat(UEs); //Ajouter les UE dans la liste des UE
let liste_salle = new Array(); //Créer un tableau de salles
let salles = new RemplissSalle(UE_Liste);  //Créer un tableau de salles
liste_salle = salles.remplirSalles(); //Remplir le tableau de salles
let R_A = new AnalysSalle(liste_salle); //Analyser les salles
let calendrier = new iCal(UE_Liste); //Créer un calendrier iCal


// Fonction principale pour le menu
menu_Principal();

//============================ debut lister_Salles====================================

// Fonction pour lister les salles associées à un sujet
function lister_Salles() {
    // Demande à l'utilisateur de saisir le sujet pour les salles
    let sujet = prompt("Quel sujet pour les salles voulez-vous trouver? ");

    // Vérifie si le sujet existe dans le document CRU
    while (Document_Cru.search(sujet) == -1) {
        // Si le sujet n'existe pas, demande à l'utilisateur de réessayer
        const sujet1 = prompt("Le sujet n'existe pas! Veuillez réessayer. Si vous avez une question, veuillez contacter PGC: pgc.sru: ");
        sujet = sujet1;
    }

    // Récupère la partie du document CRU à partir du sujet saisi
    let ceCours = Document_Cru.slice(Document_Cru.search(sujet), Document_Cru.length);

    // Trouve la fin du cours (indiquée par le caractère '+')
    let fin = 0;
    while (!(ceCours.charAt(fin) === '+')) {
        fin++;
    }

    // Coupe la partie du document pour obtenir les détails du cours
    ceCours = ceCours.slice(0, fin);

    // Initialise un tableau pour stocker les salles
    let listeSalles = [];

    // Parcourt la partie du document pour trouver les salles associées
    for (let i = 0; i < ceCours.length; i++) {
        // Vérifie si la lettre actuelle est 'S' et la suivante est '='
        if (ceCours[i] === "S" && ceCours[i + 1] === "=") {
            // Ajoute la salle à la liste
            listeSalles.push(ceCours.substring(i + 2, i + 6));
        }
    }

    // Affiche les salles associées au cours (élimine les doublons)
    console.log("Les salles pour ce cours sont: " + (listeSalles).filter(elim__Doublon));
}

//============================ fin lister_Salles====================================


function Trouver(str, car, num)
{
    var i = str.indexOf(car);
    for (var j = 0; j < num; j++)
    {
        i = str.indexOf(car, i + 1);
    }
    return i;
}

function get_nb_car(str, car)
{
    let regex = new RegExp(car, 'g');
    let result = str.match(regex);
    let count = !result ? 0 : result.length;
    return count;
}

function timeStr_To_Num(str)
{
    let heure = parseInt(str);
    let get = str.slice(-2);
    let minute = parseInt(get);
    let tempsEnMinutes = (heure * 60) + minute;
    return tempsEnMinutes;
}

function get_Temps(temps)
{
   return timeStr_To_Num(temps);
}

function get_Occupation()
{
    let colHeureDebut = Array();
    let colHeureFin = Array();
    let colPosition = Array();
    let colNomSalle = new Array()
    let colOccupation = new Array();

    let question = prompt("Veuillez saisir un numéro pour quel jour vous souhaitez vérifier ? (1.Lundi 2.Mardi 3.Mercredi 4.Jeudi, 5.Vendredi 6.Samedi 7.Dimanche)");
    let jour = '';
    switch (question)
    {
        case '1':
            jour = 'H=L';
            break;
        case '2':
            jour = 'H=MA';
            break;
        case '3':
            jour = 'H=ME';
            break;
        case '4':
            jour = 'H=J';
            break;
        case '5':
            jour = 'H=V';
            break;
        case '6':
            jour = 'H=S';
            break;
        case '7':
            jour = 'H=D';
            break;
        default:
            console.log("Veuillez saisir un numéro valide!");
            break;
    }

    let num_b = get_nb_car(Document_Cru, jour);
    for (let k = 0; k < num_b; k++)
    {
        let début = Trouver(Document_Cru, jour, k);
        colPosition.push(début);
        for (let i = 0; i < 30; i++)
        {
            if (Document_Cru.slice(début + i, début + i + 2) === 'S=')
            {
                for (let j = 0; j < 30; j++)
                {
                    if (Document_Cru.slice(début + j, début + j + 1) === '/')
                    {
                        let nomSalle = Document_Cru.slice(début + i + 2, début + j);
                        colNomSalle.push(nomSalle);
                        break;
                    }
                }
                break;
            }
        }
        for (let i = 0; i < 10; i++)
        {
            if (Document_Cru.slice(début - i - 2, début - i) === 'P=')
            {
                let personneNum = parseInt(Document_Cru.slice(début - i, début - i + 2));
                colOccupation.push(personneNum);
                break;
            }
        }

        for (let i = 0; i < 30; i++)
        {
            if (Document_Cru.slice(début + i, début + i + 1) === '-')
            {
                let heureDebut = Document_Cru.slice(début + 5, début + i);
                colHeureDebut.push(heureDebut)
                for (let j = 0; j < 30; j++)
                {
                    if (Document_Cru.slice(début + j, début + j + 2) === ',F')
                    {
                        let heureFin = Document_Cru.slice(début + i + 1, début + j);
                        colHeureFin.push(heureFin)
                        break;
                    }
                }
                break;
            }
        }

    }

    let colHeureDebut2 = new Array();
    let colHeureFin2 = new Array();
    let length = colHeureFin.length

    for (let i = 0; i < length; i++)
    {
        colHeureDebut2.push(get_Temps(colHeureDebut[i]));
    }
    for (let i = 0; i < length; i++)
    {
        colHeureFin2.push(get_Temps(colHeureFin[i]))
    }

    let data = {};
    var inp = prompt("Veuillez saisir une heure telle que 10h00    ");
    let inp2 = get_Temps(inp);
    let ptr = 0;
    for (let i = 0; i < length; i++)
    {
        if (colHeureDebut2[i] <= inp2 && inp2 < colHeureFin2[i])
        {
            data[ptr] = {};
            data[ptr]['Salle'] = colNomSalle[i];
            data[ptr]['Occupation'] = colOccupation[i] / parseInt(R_A.getCapacite(colNomSalle[i]));
            ptr++;
        }
    }
    console.log("\n--------------------"+"\nLe fichier Vega-lite sera généré après avoir quitté le menu principal. \n"+"----- ---------------\n" );
    let Json = new Array();
    for (let i = 0; i < ptr; i++)
    {
        let add =
        {
            Salle: data[i]['Salle'],
            Occupation: data[i]['Occupation']
        }
        Json.push(add);
    }
    let Json2 = JSON.stringify(Json);
    //console.log(Json2)
    return(Json2)
}

function menu_Principal()
{
    let run = true;
    while(run)
    {
        const choice = prompt("Veuillez choisir une option:\n 1. voir les salles de classe liées à un sujet \n 2. Visualiser la capacité d'accueil d'une salle de classe \n 3. vérifier l'accessibilité d'une salle à un moment donné \n 4. générer un fichier iCalender \n 5. afficher l'occupation taux d'une salle de classe à un moment donné \n 6. Afficher les salles de classe par ordre de capacité \n 0. Quitter le programme ");
        switch(choice)
        {
            case "1":
                lister_Salles();
                break;
            case "2":
                let salle2 = prompt("Quelle salle ?");
                console.log(R_A.getCapacite(salle2));
                break;
            case "3":
                let salle3 = prompt("Quelle salle ?").toUpperCase();
                let jour = prompt("Quel jour voulez-vous vérifier ? (1.Lundi 2.Mardi 3.Mercredi 4.Jeudi, 5.Vendredi 6.Samedi 7.Dimanche)");
                let heure = prompt("Quelle heure voulez-vous vérifier ?");
                R_A.is_disponible(salle3, jour, heure);
                break;
            case "4":
                calendrier.debut_exportation();
                break;
            case "5":
                let objet = get_Occupation();
                const fs = require('fs');
                fs.writeFile('data.json', objet, (err) =>
                {   
                    if (err)
                    {
                        return console.log(err);
                    }
                    console.log("\nJson pour Vega-lite a été generé.ouvre le html");
                    console.log(objet);
                });
                break;
            case "6":
                let Tab_capacite = new Array(); //le tableau de capacité d'accueil maximale des salles de classe(SPEC4)
                let salles_Par_Ordre_De_Capacite = new Array();
                liste_salle.forEach(salle =>
                {
                    Tab_capacite.push(salle.getNbPlaces())
                    salles_Par_Ordre_De_Capacite.push(salle.getSalle());
                });
                orderClass.trier(Tab_capacite, salles_Par_Ordre_De_Capacite);
                break;
            case "0":
                run = false;
                console.log("Merci d'avoir utilisé notre programme! ");
                break;
            default:
                console.log("Veuillez saisir un numéro valide!");
                break;
        }
    }
}
