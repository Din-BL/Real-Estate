// Images And Horizontal Dots
const img = document.querySelector("picture img");
const source = document.querySelector("picture source");
const dot_1 = document.querySelector(".state_1");
const dot_2 = document.querySelector(".state_2");

// Desktop
setInterval(() => {
  if (img.src === "http://127.0.0.1:5500/assets/main_top_banner/desktop.jpg") {
    img.src = "./assets/main_top_banner/desktop2.jpg";
    dot_1.style.backgroundColor = "transparent";
    dot_2.style.backgroundColor = "white";
    setTimeout(() => {
      img.src = "http://127.0.0.1:5500/assets/main_top_banner/desktop.jpg";
      dot_2.style.backgroundColor = "transparent";
      dot_1.style.backgroundColor = "white";
    }, 2000);
  }
}, 2000);

// Mobile
setInterval(() => {
  if (source.srcset === "./assets/main_top_banner/mobile.jpg") {
    source.srcset = "./assets/main_top_banner/mobile2.jpg";
    setTimeout(() => {
      source.srcset = "./assets/main_top_banner/mobile.jpg";
    }, 2000);
  }
}, 2000);
