function songs(arr) {
  let songsCount = Number(arr.shift());
  let typeList = arr.pop();

  class Song {
    constructor(album, songName, duration) {
      (this.album = album),
        (this.songName = songName),
        (this.duration = duration);
        (this.print = () => console.log(this.songName))
    }
  }

  let newSongArr = [];
  for (let i = 0; i < songsCount; i++) {
    let currantInput = arr[i];
    let currantArr = currantInput.split("_");
    let newSong = new Song(currantArr[0], currantArr[1], currantArr[2])
    newSongArr.push(newSong);
  }
  if (typeList === "all") {
    newSongArr.forEach((s) => s.print())
  } else {
    let filtered = newSongArr.filter((s) => s.album === typeList);
    filtered.forEach(s => s.print())
  }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
