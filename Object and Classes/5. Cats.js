function cats(arr){

    class Cat {
        constructor(name, age){
            this.name = name,
            this.age = age,
            this.meaw = () => {
                console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }
    }

    let newCatsArr = []
    for (let currantString  of arr) {
        let currantEl = currantString.split(" ")
        let currantCat = new Cat(currantEl[0], currantEl[1])
        newCatsArr.push(currantCat)
    }
    
     newCatsArr.map(c => c.meaw())

}
cats(['Mellow 2', 'Tom 5'])