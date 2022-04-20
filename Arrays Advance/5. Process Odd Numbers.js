function oddNumber(arr){

    let newArr = arr
    .filter((x, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(" ")

    console.log(newArr)


}

oddNumber([3, 0, 10, 4, 7, 3]
    )