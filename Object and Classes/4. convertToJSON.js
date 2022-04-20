function convertToJSON(firstName, lastName, haircolor){

    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: haircolor
    }
    let result = JSON.stringify(obj)
    console.log(result)

}
convertToJSON('George', 'Jones', 'Brown')