function housePaintng(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let green = 3.4;
    let red = 4.3;

    let greenWall1 = 2 * (x * x) - 2 * 1.2;
    let greenWall34 = 2 * (x * y) - 2 * (1.5 * 1.5);
    let redWall12 = (x * y) * 2;
    let redWall34 = x * h / 2 * 2;
    let greenPaint = (greenWall1 + greenWall34) / green;
    let redPaint = (redWall12 + redWall34) / red;
    
    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))


}

housePaintng([6, 10, 5.2])