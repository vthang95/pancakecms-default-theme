// #Webcms
const handleScroll = () => {
  const header = document.getElementById('header')
  const mark = document.getElementById('header-mark')
  const container = document.getElementById('header-center')
  if (header.getBoundingClientRect().top <= -100) {
    header.className = 'header header-fixed'
    if (container) container.style.transition = '1s height ease-in'
    mark.style.display = 'block'
  }

  if (mark.getBoundingClientRect().top === 0) {
    header.className = 'header'
    mark.style.display = 'none'
    header.style.top = '-85px'
    if (container) {
      container.style.width = 'inherit'
      container.style.flexDirection = 'column'
      container.style.alignItems = 'center'
    }
  }

  if (mark.getBoundingClientRect().top < -120) {
    header.style.top = '0px';
    if (container) {
      container.style.width = '100%'
      container.style.flexDirection = 'row'
      container.style.justifyContent = 'space-between'
    }
  }
}

$(window).scroll(handleScroll)

$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    nav:true,
    loop:true,
    items: 1,
    smartSpeed:450,
    navText: [
      "<span class='is-carousel is-carousel-prev'><</i></span>",
      "<span class='is-carousel is-carousel-next'>></span>"
    ]
  })

  $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>')
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>')

  var myShuffle = new Shuffle(
    document.querySelector('.zg-grid'),
    {
      itemSelector: '.zg-grid--item',
      sizer: '.zg-grid__sizer',
      buffer: 1,
    }
  );
})