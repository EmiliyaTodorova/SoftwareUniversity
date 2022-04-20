function vacBook(input){

    let page = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let dayRead = Number(input[2]);
    let totalHourPerDay = page / pagePerHour / dayRead

    console.log(totalHourPerDay)
}

vacBook(["212","20","2"])
