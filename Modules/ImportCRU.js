//importation des fichiers
const {readFileSync, promises: fsPromises} = require('fs');
const prompt = require('prompt-sync')({sigint: true});
class ImportCRU 
{
    //Lecture des fichiers
    readFile(nom_file) {
        return readFileSync(nom_file, 'utf-8');
    }
    //Importation des fichiers cru
    Importation() 
    {
        const choix_importation = prompt("Quel fichier voulez-vous importer ? 1. les fichiers PGC par défaut 2. vos propres fichiers   ");
        let CRU_document = new String();
        //Importation des fichiers PGC
        switch (choix_importation)
        {
            case "1":
                CRU_document += this.readFile('./SujetA_data/AB/edt.cru');
                CRU_document += this.readFile('./SujetA_data/CD/edt.cru');
                CRU_document += this.readFile('./SujetA_data/EF/edt.cru');
                CRU_document += this.readFile('./SujetA_data/GH/edt.cru');
                CRU_document += this.readFile('./SujetA_data/IJ/edt.cru');
                CRU_document += this.readFile('./SujetA_data/KL/edt.cru');
                CRU_document += this.readFile('./SujetA_data/MN/edt.cru');
                CRU_document += this.readFile('./SujetA_data/OP/edt.cru');
                CRU_document += this.readFile('./SujetA_data/QR/edt.cru');
                CRU_document += this.readFile('./SujetA_data/ST/edt.cru');
                console.log("Fichiers PGC importés.");
                break;
            //Importation des fichiers personnels
            case "2":
                let fin_importation = false;
                while (fin_importation == false)
                {
                    const emplacement_fichier = prompt("Quel est l'emplacement du fichier ? e.g. ./SujetA_data/ST/edt.cru   ");
                    CRU_document += this.readFile(emplacement_fichier);
                    console.log(`Content of ${emplacement_fichier}:\n`, CRU_document);
                    const demande_fin_importation = prompt("Est-ce que c'est tout les fichiers dont vous avez besoin ? 1. Oui 2. Non   ");
                    if (demande_fin_importation == 1)
                    {
                        fin_importation = true;
                    }
                }
                break;
            default:
                console.log("Mauvaise entrée. Veuillez recommencer.");
                break;
        }
        return CRU_document; //return the cru file
    }
}

module.exports = ImportCRU;
