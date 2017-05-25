var names = [
        'Kateryna Shukaieva',
        'Hanna Yerynska',
        'Vadym Khytryk',
        'Mykyta Dubenchuk',
        'Vladyslav Yakymenko',
        'Vlada Myhaleiko',
        'Alina Sedletska'
    ];

class Group {
	provideResponse () {
		var randomNames = [];
    
        randomNames.push(names[this.getRandomIndex()]);
        randomNames.push(names[this.getRandomIndex()]);
        randomNames.push(names[this.getRandomIndex()]);
	
		return '{names: [' + randomNames.toString() + ']}';
	}
	
	getRandomIndex () {
		return Math.floor(Math.random()*7);
	}
}

module.exports = new Group();