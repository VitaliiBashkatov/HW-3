class Character{
	constructor(props){
		this.name = props.name;
		this.attack = props.attack;
		this.totalHp = props.hitpoints;
		this.currentHp = this.totalHp;
	}

	getHitpoints(){
		return this.currentHp;
	}

	setHitpoints(hitpoints){
		this.currentHp = hitpoints > this.totalHp ? this.totalHp : hitpoints;
	}

	getTotalHitppoints() {
		return this.totalHp;
	}

	setTotalHitpoints(hitpoints) {
		this.totalHp = hitpoints;
	}

	getAttack() {
		return this.attack;
	}

	setAttack(value) {
		this.attack = value;
	}

	isAlive() {
		return this.currentHp > 0 ? true: false;
	}

	fight(character, damage) {
		if(character instanceof Character && this.isAlive() && character.isAlive()){
			character._takeADamage(damage);
		}
	}

	_takeADamage(damage) {
		this.currentHp -= damage;
	}

	_healing(value) {
		if(!this.isAlive()) {
			console.log(`${this.name} is dead`);
			return this.currentHp;
		}

		const newHp = this.currentHp + value;
		
		return newHp > this.totalHp ? this.totalHp : newHp;
	}
}

class Champion extends Character{
	constructor(props) {
		super(props);
		this._block = false;
	}

	rest() {
		this.currentHp = this._healing(5);
	}

	takeADamage(damage) {
		if(this._block) return;
		super.takeADamage(damage);
	}

	defence(){
		this._block = true;
	}
	fight(character){

		super.fight(character,this.attack);

		if(!character.isAlive()) this.attack++;
	}
}

class Monster extends Character{
	constructor(props) {
		super(props);

		this._enrageStacks = 0;
	}

	enrage() {
		this._enrageStacks = 2;
	}

	fight(character) {
		if(this._enrageStacks){
			super.fight(character,this.attack * 2);
			this._enrageStacks--;
		}
		else{
			super.fight(character,this.attack);
		}

		if(!character.isAlive()) {
			this.totalHp = Math.floor(this.totalHp + character.totalHp * 0.1);
			this.currentHp = this._healing(Math.floor(character.totalHp * 0.25));
		}
	}

 }

	var heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 50})
	var boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 100});

	boar.setAttack(30);
	boar.getTotalHitppoints();
	boar.enrage();
	boar.fight(heracles);
	console.log(heracles.isAlive());
	heracles.getHitpoints();
	heracles.rest();
	heracles.getHitpoints();
	boar.getTotalHitppoints();

	