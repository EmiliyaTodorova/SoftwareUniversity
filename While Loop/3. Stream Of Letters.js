function streamOfLetters(input){
    let index = 0;
    let letter = input[index]
    index++
    countC = 0;
    countN = 0;
    countO = 0;
    let currLett = 0;

    while(letter !== "End"){
        if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
          
            if (letter === "c"){
                countC ++;
            } else if (letter === "o"){
                countO ++;
            } else if(letter === "n") {
                countN++;
            }

            if (countC > 1){
                currLett += letter
            } else if (countO > 1){
                currLett += letter
            } else {
                currLett += letter
            }
        }
    }

    console.log(currLett)


}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])