function randomIntFromInterval(min, max) { // min and max included 
    return (Math.floor(Math.random() * (max - min + 1) + min));
  }
  
  const rndInt = randomIntFromInterval(20, 30);
  console.log(rndInt);