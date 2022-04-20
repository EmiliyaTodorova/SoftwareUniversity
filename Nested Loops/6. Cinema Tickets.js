function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++

    let studentCount = 0;
    let standartCount = 0;
    let kidsCount = 0;
    let totalTicketCounter = 0;

    while (command !== "Finish") {
        let filmName = command;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;

            if (ticketType === "student") {
                studentCount++;
            } else if (ticketType === "standard") {
                standartCount++;
            } else if (ticketType === "kid") {
                kidsCount++;
            }
            if (ticketCounter >= freeSpace) {
                break;
            }

            ticketType = input[index];
            index++
        }
        totalTicketCounter += ticketCounter

        let procentBusySpace = ticketCounter / freeSpace * 100
        console.log(`${filmName} - ${procentBusySpace.toFixed(2)}% full.`)

        command = input[index];
        index++


    }

    let procentStudentTickets = studentCount / totalTicketCounter * 100
    let procentStandartTickets = standartCount / totalTicketCounter * 100;
    let procentKidsTickets = kidsCount / totalTicketCounter * 100;
    console.log(`Total tickets: ${totalTicketCounter}`)
    console.log(`${procentStudentTickets.toFixed(2)}% student tickets.`)
    console.log(`${procentStandartTickets.toFixed(2)}% standard tickets.`)
    console.log(`${procentKidsTickets.toFixed(2)}% kids tickets.`)

}







cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])