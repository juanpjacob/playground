export class User {
	name = "";
	age = 0;

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getInfo() {
		return `${this.name} has ${this.age} years`;
	}
}
