class Car{
    constructor(color, model, seat){
        this.color = color;
        this.model = model;
        this.seat = seat;
    }
    start(){
        console.log("Engine Started");
    }
    carBreak(){
        console.log("slow down.");
    }
    acc(){
        console.log("speed up.");
    }
    stearing(){
        console.log("turn left or right.");
    }
}

let c1 = new Car("Brown", "Swift", 4);
let c2 = new Car("White", "Dzire", 4);
let c3 = new Car("Red", "WagonR", 4);

console.log(c1);
c1.start();
c1.acc();
c1.stearing();
c1.carBreak();