function convertJSON(string){
let obj = JSON.parse(string)
let result = Object.entries(obj)
for (let [key, value] of result) {
    console.log(`${key}: ${value}`)
}

}
convertJSON('{"name": "George", "age": 40, "town": "Sofia"}')