class User {
    constructor (name, lastName, books, mascots) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.mascots = mascots;
    }

    getFullName (){
        return `${this.name} ${this.lastName}`
    }

    addMascot (mascotName){
        this.mascots.push(mascotName)
        console.log(this.mascots)
    }

    countMascots (){
        return this.mascots.length
    }

    addBook (name, author) {
        this.books.push({name, author})
        console.log(this.books)
    }

    getBookNames (){
        let bookName = this.books.map(function(book){
            return book.name
        })
    }
}

const user1 = new User('Joaquin', 'Garcia',[{name: 'Los cuatro acuerdos', author: 'Miguel Angel Ruiz'},{name:'El Monje que vendio su Ferrari', author:'Robin Sharma'}],["Benito", "Firulais"]);

user1.getFullName()

user1.addMascot('Tomas')

user1.countMascots()

user1.addBook('La Divina Comedia', 'Dante Allegheri')

user1.getBookNames()