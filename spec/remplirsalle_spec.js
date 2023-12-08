const RemplissSalle = require('../Modules/RemplissSalle');
const Salle = require('../objets/Salle');
const UE = require('../objets/UE');
const Session = require('../objets/Session'); 

describe('RemplissSalle', function(){
  it('Devrait remplir les salles avec les sessions d\'UE', () => {
    const sessions = [
      new Session(30, 1, 'Lundi', 8, 0, 0, 10, 'C105', 'Anglais'),
      new Session(25, 1, 'Lundi', 9, 30, 0, 12, 'B208', 'Anglais'),
    ];

    const ue = new UE('LE08', sessions); 
    const listeUE = [ue]; 

    const remplisseur = new RemplissSalle(listeUE);

    const result = remplisseur.remplirSalles();

    expect(result.length).toBeGreaterThan(0);

    const salleTest = result.find((salle) => salle.getSalle() === 'C105');
    expect(salleTest).toBeDefined();
    expect(salleTest.getNbPlaces()).toEqual(30);
  });
});
