$(".owl-carousel.v1").owlCarousel({
   items: 1,
   loop: true,
   autoplay: false,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
});

$(".owl-carousel.v2").owlCarousel({
   items: 3,
   loop: true,
   autoplay: false,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   margin: 12,
   responsiveClass: true,
   responsive: {
      0: {
         items: 1,
         nav: true,
      },
      600: {
         items: 2,
         nav: false,
      },
      768: {
         items: 3,
         nav: true,
         loop: false,
      },
   },
});

console.log(document.getElementsByClassName("owl-carousel v2"));

function myFunction1() {
   let moreText = document.getElementById("more1");
   let btnText = document.getElementById("btn-read1");

   console.log(moreText.style.display === "");

   if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "Read Less";
   } else if (moreText.style.display === "block") {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
   }
}

function myFunction2() {
   let moreText = document.getElementById("more2");
   let btnText = document.getElementById("btn-read2");

   console.log(moreText.style.display === "");

   if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "Read Less";
   } else if (moreText.style.display === "block") {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
   }
}

function myFunction3() {
   let moreText = document.getElementById("more3");
   let btnText = document.getElementById("btn-read3");

   console.log(moreText.style.display === "");

   if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "Read Less";
   } else if (moreText.style.display === "block") {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
   }
}
