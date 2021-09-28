$('.slider-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	dots: false
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});

$('.services-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	dots: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.review-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	dots: false
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});

$('.partners-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	dots: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    }
  ]
});