const gallery = document.querySelector("div.gallery-page");
const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
let activeNumber = 1;

const addElements = () => {
  images.forEach(function(image) {
    const a = document.createElement("a");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.textContent = `obraz${activeNumber++}`;
    div.classList.add("galleryElement");
    img.src = `img/${image}`;
    a.href = `img/${image}`;
    a.dataset.lightbox = "gallery";
    div.appendChild(a);
    a.appendChild(img);
    div.appendChild(p);
    gallery.appendChild(div);
  });
};
window.onload = addElements();
