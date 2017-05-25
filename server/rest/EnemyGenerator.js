var enemies = [{
			name: 'Pig with flamethrower',			
			power: 200,
			health: 300			
		}, {
			name: 'Vagabond with shotgun',			
			power: 100,
			health: 420			
		}, {
			name: 'The Kamikaze Dove',		
			power: 950,
			health: 50			
		}, {
			name: 'Dragon of evil fate',			
			power: 50,
			health: 300			
		}, {
			name: 'Dragon "Sambuka"',		
			power: 250,
			health: 250			
		}, {
			name: 'The Ice Liquor Dragon',			
			power: 200,
			health: 600			
		}, {
			name: '127 squalled zombies',
			power: 127,
			health: 127			
		}, {
			name: 'Team of armored road workers',			
			power: 50,
			health: 600			
		}, {
			name: 'Steam tank of hamster Jose',		
			power: 60,
			health: 900			
		}, {
			name: 'Squirrel with tea mortar cun',			
			power: 40,
			health: 60			
		}        
    ];

class EnemyGenerator {
	provideResponse () {
		var randomEnemy = enemies[this.getRandomIndex()];
            
		return JSON.stringify(randomEnemy);
	}
	
	getRandomIndex () {
		return Math.floor(Math.random()*10);
	}
}

module.exports = new EnemyGenerator();