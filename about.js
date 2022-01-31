$('.ply').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

let previous = document.querySelectorAll(".slick-prev");
let next=  document.querySelectorAll(".slick-next");

console.log(previous);
for (let i = 0; i < previous.length; i++) {
    const element = previous[i];
    element.innerHTML =`<i class="fas fa-arrow-circle-left"></i>`;
    
}
for (let i = 0; i < next.length; i++) {
    const element = next[i];
    element.innerHTML =`<i class="fas fa-arrow-circle-right"></i>`;
    
}
