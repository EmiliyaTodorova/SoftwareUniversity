function mouvies(arr) {
  let movies = [];
  for (let element of arr) {
    let line = element.split(" ");

    if (line.includes("addMovie")) {
      line.shift();
      line = line.join(" ");
      let obj = {};
      obj.name = line;
      movies.push(obj);
    } else if (line.includes("directedBy")) {
      line = line.join(" ").split(" directedBy ");

      let name = line[0];
      let director = line[1];

      for (let movie of movies) {
        if (movie.name === name) {
          movie.director = director;
        }
      }
    } else if (line.includes("onDate")) {
      line = line.join(" ").split(" onDate ");
      let name = line[0];
      let date = line[1];

      for (let movie of movies) {
        if (movie.name === name) {
          movie.date = date;
        }
      }
    }
  }
  for (let object of movies) {
    if (
      object.hasOwnProperty("name") &&
      object.hasOwnProperty("director") &&
      object.hasOwnProperty("date")
    ) {
        let objectAsJSON = JSON.stringify(object)
        console.log(objectAsJSON)
    }
  }
}
mouvies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
