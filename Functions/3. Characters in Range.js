function characterInRange(ch1, ch2){

    let startChar = Math.min(ch1.charCodeAt(0), ch2.charCodeAt(0));
    let endChar = Math.max(ch2.charCodeAt(0), ch1.charCodeAt(0));
    let result = [];

    for(let i = startChar + 1; i < endChar; i++){
        let currentElement = String.fromCharCode(i)
        result.push(currentElement)

    }
console.log(result.join(" "))


}
characterInRange('C',
'#')