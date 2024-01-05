class Animal{
    constructor(name){
        this.name = name
    }
    walk(){
        console.log("animal " + Animal.capatalize(this.name)+ 'is walking');
    }
    static capitalize(name){
        return this.name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

j = new Animal('jack');
j.walk();
console.log(j.capitalize('thissd'));  // it doesn't work it is a static function method