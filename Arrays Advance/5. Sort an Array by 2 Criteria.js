function sortByTwoCriteria(array){

   let sortByLength = array.sort((a, b) => a.localeCompare(b)).sort((a,b) => a.length - b.length)

   console.log(sortByLength.join('\n'))
   

}
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])