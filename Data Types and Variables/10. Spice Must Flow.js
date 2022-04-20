function spiceMustFlow(startingYeild) {
  let dayCaunter = 0;
  let spiceExtracted = 0;
  while (startingYeild >= 100) {
    dayCaunter++;
    spiceExtracted += startingYeild - 26;
    startingYeild -= 10;
  }
  console.log(dayCaunter);
  if (dayCaunter !== 0) {
    console.log(spiceExtracted - 26);
  } else {
      console.log(spiceExtracted)
  }
}
spiceMustFlow(450);
