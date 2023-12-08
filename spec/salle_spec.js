const Salle = require('../objets/Salle');

describe("Test d'une salle'", function(){
	
	
	beforeAll(function() {
		this.s = new Salle("A001",80);
	});
	
	it("Une salle peut être crée", function(){
		expect(this.s).toBeDefined();		
	});

    it("La méthode getNbPlaces() retourne la capacité de la salle", function(){
		expect(this.s.getNbPlaces()).toBe(80);
	});

    it("La méthode setNbPlaces() fonctionne", function(){
		this.s.setNbPlaces(85);
		expect(this.s.getNbPlaces()).toBe(86);//nombre pair
	});

	it("La méthode getSalle() retourne l'ID de la salle", function(){
		expect(this.s.getSalle()).toBe("A001");
	});

	it("La méthode is_libre() vérifie si la salle est libre pendant une période donnée", function(){
		const Session = require('../objets/Session');
        const sessiontest = new Session(10,1,"lundi",8,0,0,11,"A002","LE01");
		this.s.Ajout_session(sessiontest); 
		// Vérifie si la salle est libre de 11 à 12 le lundi 
		expect(this.s.is_libre(1, 11, 12)).toEqual(true);
		// Vérifie si la salle est libre de 9 à 10 le lundi
		//expect(this.s.is_libre(1, 9, 10)).toEqual(false);
	});
});