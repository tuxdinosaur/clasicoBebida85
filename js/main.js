$(document).ready(function() {
  $(".variable-width").slick({
    fade: true,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 250,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    // centerPadding: "150px",
    // centerMode: true,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          // centerMode: false
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".slider-desktop").slick({
    fade: true,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 250,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    // centerPadding: "150px",
    // centerMode: true,
    nextArrow: $(".nextD"),
    prevArrow: $(".prevD"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });
});
