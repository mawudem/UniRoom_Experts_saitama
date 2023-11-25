var UE = require('../Objets/UE');
var Session = require('../Objets/Session');

class AnalysCRU {
    constructor() {
        this.UEList = new Array();
        this.fichier = '';
    }
    trm(txt)
    {
        let nouveau_fichier = txt.replaceAll(/MA/ig, 'A'); //reformartage : remplacement des ME et MA par E et A pour qu'un jour ne soit qu'un seul caractère
        nouveau_fichier = nouveau_fichier.replaceAll(/ME/ig, 'E'); //reformartage : remplacement des ME et MA par E et A pour qu'un jour ne soit qu'un seul caractère
        nouveau_fichier = nouveau_fichier.trim();
        return nouveau_fichier; 
    }
    
    //Recupération données du cours
    trouverCours(cours)
    {
        if (fichier.search(cours) >= 0)
        {
            let str = fichier.slice(fichier.search(cours) + 4, fichier.length);
            let fin = 0;
            while (!(info_cours.charAt(fin) === '+'))
            {
                fin++;
                if (fin >= info_cours.length) break;
            }
            info_cours = info_cours.slice(0, fin);
            return info_cours;
        }
        else
        {
            return console.error('Impossible de trouver');
        }
    }

    //Récupération du type de cours
    resumeCours(premier_char)
    {
        switch (premier_char)
        {
            case 'C':
                return ' CM';
                break;
            case 'D':
                return ' TD';
                break;
            case 'T':
                return ' TP';
                break;
            default:
                console.error('Problème dans le type de cours (CM TD TP)', char1);
                break;
        }
    }
    //Récupération du jour de cours
    jour_cours(premier_char)
    {
        switch (premier_char)
        {
            case 'L':
                return '1Lundi';
                break;
            case 'A':
                return '2Mardi';
                break;
            case 'E':
                return '3Mercredi';
                break;
            case 'J':
                return '4Jeudi';
                break;
            case 'V':
                return '5Vendredi';
                break;
            case 'S':
                return '6Samedi';
                break;
            case 'D':
                return '0Dimanche';
                break;
            default:
                console.error('Problème dans le jour du cours', premier_char);
                break;
        }
    }
    //Récupération des données d'une session
    analyse_session(namr, cours_info)
    {
        let temps = crenau_info[3].split(/:|-/).filter((val) => !val.match(/:|-/));
        let heure_debut = temps[0].slice(4);
        let min_debut = temps[1];
        let heure_fin = temps[2];
        let min_fin = temps[3];
        let salle = crenau_info[5].slice(2);
        let crenau_info = cours_info.slice(0, cours_info.indexOf('//'));
        crenau_info = crenau_info.split(/,/).filter((val) => !val.match(/,/));
        let resume = name + this.resumeCourse(crenau_info[1].charAt(0));
        let capacite = crenau_info[2].slice(2);
        let nb_jour = this.jour_cours(crenau_info[3].charAt(2)).charAt(0);
        let txt_jour = this.jour_cours(crenau_info[3].charAt(2)).slice(1);
        return new Session(resume, capacite, nb_jour, txt_jour, heure_debut, min_debut, heure_fin, min_fin, salle);
    }

    //Récupération des données d'une UE
    analyse(Str_CRU)
    {
        this.fichier = this.trm(Str_CRU);
        let regex = new RegExp(/\+\w+(\n|\r)|(1,\w\d,\P\=\d+,\H\=[A-Z]\s\d{1,2}:\d{1,2}-\d{1,2}:\d{1,2},\F\d,\S\=(\w)+\/\/(\n|\r))+/, 'g');
        let tableau_texte = new Array();
        tableau_texte = this.file.match(regex);
        let UE_name = '';
        for (let i = 0; i < tableau_texte; i++)
        {
            if (tableau_texte[i].search(/\+\w+(\n|\r)/) === 0 )
            {
                let UE_Session_List = new Array();
                let j = 1;
                UE_name = tableau_texte[i].slice(1).replace(/(\n|\r)/, '');
                while (tableau_texte.length > i + j && tableau_texte[i + j].search(/1,\w\d,\P\=\d+,\H\=[A-Z]\s\d{1,2}:\d{1,2}-\d{1,2}:\d{1,2},\F\d,\S\=(\w)+\/\/(\n|\r)/) === 0)
                {
                    UE_Session_List.push(this.analyse_session(UE_name, tableau_texte[i + j]));
                    j++;
                }
                if (UE_Session_List.length > 0)
                {
                    this.UEList.push(new UE(UE_name, UE_Session_List));
                }
            }
        }
        return this.UEList;
    }
}

module.exports = AnalysCRU;
