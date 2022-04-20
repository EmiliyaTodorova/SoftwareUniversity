function oldBook(input) {

    let index = 1;
    let favoriteBook = input[0];
   
    let nextBook = input[index]
  index++
   
    
    let checkedBook = 0;

    while (nextBook !== "No More Books") {
        
                
        if (nextBook === favoriteBook) {
            
            console.log(`You checked ${checkedBook} books and found it.`)
            break;

        }
        checkedBook++
        nextBook = input[index];
        index++
        
    }



    if (nextBook !== favoriteBook) {
            
        console.log(`The book you search is not here!`)
        console.log(`You checked ${checkedBook} books.`)
        
    }


}
oldBook(["Troy",
"Stronger",
"Life Style",
"Troy"])


