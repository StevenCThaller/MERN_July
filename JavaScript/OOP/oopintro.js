class Garment {
    constructor(fab, col){
        this.fabric = fab;
        this.color = col;
    }

    wear(type){
        return `You put on the ${this.color} ${this.fabric} ${type}`
    }
}

// class Cape : Garment
class Cape extends Garment {
    constructor(fab, col, len) {
        super(fab, col);
        this.length = len;
    }

    wear() {
        let string = super.wear("cape");
        string += `, and now ${this.length} of glorious ${this.fabric} flutter in the wind behind you`;
        console.log(string);
    }
}



let mygarment = new Garment("cotton", "red");

let myCape = new Cape("silk", "red", "4 feet");
// console.log(mygarment);
console.log(myCape);

// mygarment.wear();
// myCape.wear();


