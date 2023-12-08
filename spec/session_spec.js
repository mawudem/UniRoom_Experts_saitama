const Session = require('../objets/Session');

describe("Test d'une session'", function(){
	
	
	beforeAll(function() {
		this.s = new Session(10,3,"Mercredi",10,0,0,11,"A002","LE01");
	});
	
	it("Une session peut être crée", function(){
		expect(this.s).toBeDefined();		
	});

	it("La méthode String() retourne les informations de la session", function(){
		expect(this.s.String()).toBe("LE01 Mercredi 10:0 11:0 10 A002");
	});

	it("La méthode get_jour() retourne le numéro du jour de la session", function(){
		expect(this.s.get_jour()).toBe(3);
	});

	it("La méthode get_debut() retourne l'heure de début de la session", function(){
		expect(this.s.get_debut()).toBe(10);
	});

	it("La méthode get_fin() retourne l'heure de fin de la session", function(){
		expect(this.s.get_fin()).toBe(11);
	});

	it("La méthode get_NbPlaces() retourne le nombre de places de la session", function(){
		expect(this.s.get_NbPlaces()).toBe(10);
	});

	it("La méthode get_Salle() retourne l'id de la salle de la session", function(){
		expect(this.s.get_Salle()).toBe("A002");
	});

	it("La méthode get_h_debut() retourne l'heure de début de la session", function(){
		expect(this.s.get_h_debut()).toBe(10);
	});

	it("La méthode get_min_debut() retourne les minutes de début de la session", function(){
		expect(this.s.get_min_debut()).toBe(0);
	});

	it("La méthode get_h_fin() retourne l'heure de fin de la session", function(){
		expect(this.s.get_h_fin()).toBe(11);
	});

	it("La méthode get_min_fin() retourne les minutes de fin de la session", function(){
		expect(this.s.get_min_fin()).toBe(0);
	});

	it("La méthode get_sommaire() retourne le sommaire de la session", function(){
		expect(this.s.get_sommaire()).toBe("LE01");
	});

});