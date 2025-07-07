//prototype

function person(name)
{
    this.name=name
}

person.prototype.greet = function (name)
{
    console.log(`hello ${this.name}`);
}
const p1 = new person("kannan")
const p2=new person("divi")
p1.greet();
p2.greet();