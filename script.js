let imageIndex = 0;
showImage(imageIndex);
let slideInterval = setInterval(showImage, 5000);

document.querySelector(".previous").addEventListener("click", () => {
  const images = document.querySelectorAll(".image");
  resetInterval();
  imageIndex = (imageIndex - 2 + images.length) % images.length;
  showImage(imageIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  resetInterval();
  showImage(imageIndex);
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showImage, 5000);
}

function drawDots() {
  const dotContainer = document.querySelector(".dots");
  
  while (dotContainer.hasChildNodes()) {
    dotContainer.removeChild(dotContainer.firstChild);
  }
  
  document.querySelectorAll(".image").forEach((image) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    document.querySelector(".dots").appendChild(dot);
  });
  
  document.querySelectorAll(".dot").forEach((element, index) => {
    element.addEventListener("click", () => {
      resetInterval();
      imageIndex = index;
      showImage(imageIndex);
    });
  });
}

function showImage(index) {
  drawDots();
  
  const images = document.querySelectorAll(".image");
  const dots = document.querySelectorAll(".dot");

  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  images[imageIndex].style.display = "grid";
  dots[imageIndex].classList.add("active");

  imageIndex++;
}
