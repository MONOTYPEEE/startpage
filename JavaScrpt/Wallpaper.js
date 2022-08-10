const walp = ["1.jpg","2.jpg","3.jpg","6762.jpg","5894.jpg"];

const chosenImage = walp[Math.floor(Math.random() * walp.length)];

const bgImg = document.createElement("img");

bgImg.src="image/" + chosenImage;
document.body.appendChild(bgImg);