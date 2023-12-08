const UE = require('../objets/UE');
const Session = require('../objets/Session');

describe("Test d'une UE'", function(){
	
	
	beforeAll(function() {
		this.ue = new UE("LE08",[new Session(20,1,"Lundi",8,0,0,10,"C207","Anglais"),new Session(20,4,"Jeudi",13,0,0,14,"B107","Anglais")]);
	});
	
	it("Une UE peut être crée", function(){
		expect(this.ue).toBeDefined();		
	});

    it("La méthode get_identifiant() retourne l'identifiant", function(){
		expect(this.ue.get_identifiant()).toBe("LE08");
	});

    it("La méthode get_Session() retourne bien la sessions de L'ue demandée", function(){
		expect(this.ue.get_Session(0)).toEqual(new Session(20,1,"Lundi",8,0,0,10,"C207","Anglais"));
	});

    it("La méthode get_nb_Sessions() retourne bien le nombre de sessions de L'ue", function(){
		expect(this.ue.get_nb_Sessions()).toBe(2);
	});
    





});