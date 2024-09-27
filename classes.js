class UserList{
	constructor(users){
		this._users = users;
	}

	add(user) {
		if(!user.firstName) {
			console.log('Name is required');
		}
		else{
			user.id = this._generateId();
			this._users.push(user);
			console.log(`Hi everyone, i am ${user.firstName}`);
		}

		return this;
	}

	deleteById(id) {
		const user = this._getBy('id', id);

		if(user.length) {
			this._deleteUsers(user);
			console.log(`bye bye ${user[0].firstName}`);
		}
		else {
			console.log(`Unable to find user with id: ${id}`);
		}

		return this;	
	}

	_deleteUsers(users) {
		let userPosition;

		for(let user of users) {
			userPosition = this._users.indexOf(user);
			if(userPosition != -1) this._users.splice(userPosition,1);
		}
	}

	_generateId() {
		let id;

		while(true){
			id = `${(+new Date).toString()}`;

			if(!this._getBy('id',id).length) break;
		}

	 	return id;
	}	

	_getUserFullName(user){
		return `${user.firstName} ${user.lastName}`;
	}

	_getRepresentiveString(user) {
		let stringContainer = [];

		for(let property in user){
			stringContainer.push(`${property}: ${user[property]}`);
		}

		return stringContainer.join('\n');
	}

	showAll() {
		this._users.forEach(user => console.log(this._getRepresentiveString(user)));
		return this;
	}

	_getBy(property, value){
		return this._users.filter(user => user[property] == value);
	}

	showNames() {
		this._users.forEach(user => console.log(this._getUserFullName(user)));
		return this;
	}

	showById(id) {
		const user = this._getBy('id', id);

		console.log(user.length ? this._getRepresentiveString(user[0]): `Unable to find user with id: ${id}`);

		return this;
	}

	logUsersCould(){
		console.log(this._users.length);
		return this;
	}
}


const userList = new UserList([{
	id: '1485249082126',
	firstName: 'John',
	lastName: 'Snow',
	age: '23'
}, {
	id: '1485239082126',
	firstName: 'Robert',
	lastName: 'Stark',
	age: '25'
},{
	id: '1485249082156',
	firstName: 'Sansa',
	lastName: 'Stark',
	age: '19'
}]);

userList.showNames().add({lastName: 'Lannister'}).add({firstName: 'Night', lastName: 'King', age: '???'}).showById(1485249082156).deleteById(1485249082156).showById(1485249082156).showAll();





