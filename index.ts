// class Car {
//     model: string;
//     color: string;
//     age: number;

//     private peopleInPolicy: string[] = []
//     private readonly manufactureDate: string = '2019-01-02'

//     constructor(model, color, age) {
//         this.model = model;
//         this.color = color;
//         this.age = age;
//     }
//     describe() {
//         console.log(`A ${this.age} years old ${this.color} ${this.model} driven by ${this.peopleInPolicy}`);
//     }
//     addToPolicy(name: string) {
//         this.peopleInPolicy.push(name);
//     }
//     getPolicy() {
//         console.log(this.peopleInPolicy)
//     }
// }

// const myKia = new Car("kia", "black", 1);
// myKia.addToPolicy('ahmed')
// myKia.describe();
// myKia.manufactureDate =
//     myKia.getPolicy()

class Vehicle {
  private peopleInPolicy: string[] = [];
  private readonly manufactureDate: string = "2019-01-02";
  constructor(public model: string, public color: string, public age: number) {}
  describe() {
    console.log(
      `A ${this.age} years old ${this.color} ${this.model} driven by ${this.peopleInPolicy}`
    );
  }

  addToPolicy(name: string) {
    this.peopleInPolicy.push(name);
  }

  getPolicy() {
    console.log(this.peopleInPolicy);
  }
}

const myKia = new Vehicle("Kia", "Black", 2);

myKia.addToPolicy("Eva");
myKia.getPolicy();
