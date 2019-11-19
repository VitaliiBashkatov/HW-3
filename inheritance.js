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
		this.setHitpoints(this.getHitpoints() - damage);
	}

	_healing(value) {
		if(!this.isAlive()) {
			console.log(`${this.name} is dead`);
			return this.getHitpoints();
		}
		else{
			const newHp = this.getHitpoints() + value;
			this.setHitpoints (newHp > this.getTotalHitppoints() ? this.getTotalHitppoints(): newHp);
		} 
	}
}

class Champion extends Character{
	constructor(props) {
		super(props);
		this._block = false;
	}

	rest() {
		this._healing(5);
	}

	_takeADamage(damage) {
		this._block ? this._block = false: super._takeADamage(damage);
	}

	defence(){
		this._block = true;
	}
	fight(character){

		super.fight(character,this.getAttack());

		if(!character.isAlive()) this.setAttack(this.getAttack() + 1);
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
			super.fight(character,this.getAttack() * 2);
			this._enrageStacks--;
		}
		else{
			super.fight(character,this.getAttack());
		}

		if(!character.isAlive()) {
			this.setTotalHitpoints( Math.floor(this.getTotalHitppoints() + character.getTotalHitppoints() * 0.1) );
			this._healing(Math.floor(character.getTotalHitppoints() * 0.25));
		}
	}

 }

	var heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 30})
	var boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 100});

	heracles.defence();
	boar.fight(heracles);
	console.log(heracles.getHitpoints());
	boar.fight(heracles);
	console.log(heracles.getHitpoints());
	heracles.rest();
	console.log(heracles.getHitpoints());
	heracles.rest();
	console.log(heracles.getHitpoints());
	boar.enrage();
	boar.fight(heracles);
	console.log(heracles.getHitpoints());
	boar.fight(heracles);
	console.log(heracles.getHitpoints());
	boar.fight(heracles);
	heracles.fight(boar);
	console.log(heracles.getHitpoints());
	console.log(boar.getHitpoints());
	console.log(boar.getTotalHitppoints());
	boar.fight(heracles);
	console.log(boar.getHitpoints());
	console.log(boar.getTotalHitppoints());
	

	