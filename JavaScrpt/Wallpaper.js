const wallpaperArray = ["1.jpg","2.jpg","3.jpg","6762.jpg","5894.jpg"];

const chosenImage = wallpaperArray[Math.floor(Math.random() * wallpaperArray.length)];

document.body.style.backgroundImage = `url(image/${chosenImage})`
console.log("image/" + chosenImage);