
/*		Inheritance


		class Charmander{
			constructor(height,weight){
				this.height = height;
				this.weight = weight;
				this.type = 'Fire';
				this.specie = 'Lizzard';
			}

			getType(){
				return this.type;
			}
			canWalk(){
				return true;
			}
			canFly(){
				return false;
			}
			getSpecie(){
				return `${this.specie} Pokemon`;
			}
			getHeight(){
				return this.height;
			}
			getWeight(){
				return this.weight;
			}
		}
		class Charmeleon extends Charmander{
			constructor(height,weight){
				super(height,weight);
				this.specie = 'Flame';
			}
		}
		class Charizard extends Charmeleon{
			constructor(height,weight){
				super(height,weight);
			}
			canFly(){
				return true;
			}
		}


		var embury = new Charmander({ height: 1, weight: 15 });
		var mercury = new Charmeleon({ height: 2, weight: 45 });
		var morderbrand = new Charizard({ height: 10, weight: 200 });
		
		embury.getType(); // -> “Fire”
		embury.getType() === mercury.getType();
		mercury.getType() === morderbrand.getType(); // -> true

		embury.getSpecie(); // -> “Lizard Pokémon”
		mercury.getSpecie(); // -> “Flame Pokémon”
		morderbrand.getSpecie() === mercury.getSpecie(); // -> true

		embury.getHeight(); // -> 1
		morderbrand.canWalk(); // -> true

		embury.canFly(); // -> false
		embury.canFly() === mercury.canFly(); // -> true
		morderbrand.canFly(); // -> true*/


		

		/*   		Pure Function 

		const string = '11-15-1944';
		function pureFunction(str) {
			return str.split('-').reverse().join(',');
		}

		console.log(pureFunction(string)); */
				


	/*	         Exception   

		let i = 0;
		try{
			while(true){
				console.log(i++);
				if(i > 10) throw new Error('ten is enough');
			}
		}	
		catch(e){
			console.error(e);
		}
		finally{
			console.log('i`m done');
		}
			
	*/	

			



	/*		Promises


		const request = new Promise((resolve,reject) => {
			setTimeout(function() {
				console.log('a');
					resolve('a')
			}, 1000);
		})
		.then(data =>{
			return new Promise((resolve,reject) =>{
				setTimeout(() => {
					console.log('ab');
					resolve(`${data}b`);
				},1000);
			});
		})
		.then(data =>{
			throw new Error('ab');
		})
		.then(null, onRejected => {
			throw onRejected;
		})
		.catch(e => console.error(e))
	*/




	/*        Async/Await */

	
	function timeout(data) {
		return new Promise((resolve,reject) => {
			setTimeout(()=>{
				console.log(data);
				resolve(data);
			},1000);
		});
	}

	async function asyncTry() {
		try{
			const a = await timeout('a');
			const ab = await timeout(`${a}b`);
			throw new Error('ab');
		}
		catch(e){
			console.error(e);
		}
	}

	asyncTry();

