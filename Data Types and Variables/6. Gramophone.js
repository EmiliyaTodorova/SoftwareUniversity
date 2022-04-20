function gramophone(bandName, albumName, songName){

    let songDuration = (albumName.length * bandName.length) * songName.length / 2
    let rotation = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`)
console.log(bandName.length)

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');