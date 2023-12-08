const AnalysSalle = require('../Modules/AnalysSalle');
const Salle = require('../objets/Salle');
const Session = require('../objets/Session');

describe('AnalysSalle', function () {
    let listeSalle;

    beforeAll(function () {
        listeSalle = [
            new Salle('B105', 30),
            new Salle('B201', 20)
        ];
    });

    // it('Doit vérifier la disponibilité d\'une salle pour un jour et une heure donnés', () => {
    //     const analysSalle = new AnalysSalle(listeSalle);
    //     const sessiontest = new Session(10, 1, "Lundi", 8, 0, 0, 11, "B105", "LE01");
    //     listeSalle[0].Ajout_session(sessiontest); 
    //     expect(analysSalle.is_disponible('B105', "Lundi", 10)).toBe(true);
    //     expect(analysSalle.is_disponible('B201', "Lundi", 10)).toBe(true);
    // });

    it('Récupérer la capacité d\'une salle', () => {
        const analysSalle = new AnalysSalle(listeSalle);
        expect(analysSalle.getCapacite('B105')).toEqual(30);
        expect(analysSalle.getCapacite('B201')).toEqual(20);
    });
});
