const Trisalle = require('../Modules/Trisalle');

describe('Test de Trisalle', function() {

  it('Les salles devraient être triées par odre decroissant de capacite', () => {
    const trisalle = new Trisalle();

    const capacites = [50, 30, 70, 20];
    const salles = ['A002', 'B207', 'C002', 'C205'];

    const capacitesAttendues = [70, 50, 30, 20];
    const sallesAttendues = ['C002', 'A002', 'B207', 'C205'];

    trisalle.trier(capacites, salles);

    expect(capacites).toEqual(capacitesAttendues);
    expect(salles).toEqual(sallesAttendues);
  });
});
