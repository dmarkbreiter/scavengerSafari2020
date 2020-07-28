// Timescale hover effect
    $(".item")
    .click(function () {
        $(".content").hide();
        $(".intro").hide();
        var name = "#" + $(this).attr("class").split(/\s+/)[1];
        $(name).show();
    })


// Make sure that image carousels do not move up and down on Firefox/Safari
var indicators = document.querySelectorAll('.indicators')
var indicatorsList = Array.prototype.slice.call(indicators)
indicatorsList.forEach((indicator) => {
    indicator.addEventListener('click', (event) => {
        const $slide = document.querySelector(event.target.getAttribute('href'));
        if (!$slide) return;
            
        if ($slide.scrollIntoViewIfNeeded) {
            event.preventDefault();
            $slide.scrollIntoViewIfNeeded();
        } else if ($slide.scrollIntoView) {
            event.preventDefault();
            $slide.scrollIntoView();
            }
        })
    })


// HIDE SLIDE EFFECT
var slides = document.querySelectorAll('.slide')
var slideList = Array.prototype.slice.call(slides)
var periods = document.querySelectorAll('.period')
var slideIndicatorDots = document.getElementsByClassName('slide-dot')
var pointer = document.querySelector(".pointer")

var slideOptions = {
    root: null,
    rootMargin: "0px",
    threshold: .6
  };

slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //const slideIndicatorDots = document.getElementsByClassName('slide-dot')
      var slideId = (entry.target.id)
      var slide = document.getElementById(slideId)
      var index = slideList.indexOf(slide)
      console.log(index)
        if (entry.intersectionRatio>0) {
            // Set all indicator dots to light grey
            Array.prototype.filter.call(slideIndicatorDots, e => e.style.backgroundColor='lightgrey');
            // Remove the fade class from all slides, making them not visible
            Array.prototype.filter.call(slides, elem => elem.classList.remove('fade'));
            // Remove the pulse class from all timescale elements
            Array.prototype.filter.call(periods, p => p.classList.remove('pulse'));
            // Add make current slide visible
            slide.classList.add('fade');
            // Add dark grey styling to slides corresponding indicator dot
            document.querySelector(`#slide-dot-${slideId}`).style.backgroundColor='darkgrey';
            // Add pulse class to slides corresponding time period
            document.querySelector(`#${slideId}-period`).classList.add('pulse');
            // Add or remove pointer styling to move pointer to corresponding time period 
            if (pointer.classList.contains(`pointer-position${index+1}`)) {
                pointer.classList.remove(`pointer-position${index+1}`);      
            } else {
                pointer.classList.add(`pointer-position${index}`);
            }
        }
    })
      }, slideOptions)
  
  slides.forEach(slide => {
      slideObserver.observe(slide);
  });


// IMAGE CAROUSELS 
const carouselContainer = document.querySelector('.carousel-container');

    // Trilo carousel
    const triloImages = document.querySelectorAll('.trilo-image')
    let captionText = document.getElementsByClassName('carousel-caption')
    let indicatorDots = document.getElementsByClassName('indicator-dot')

    let options = {
        root: document.querySelector('.trilo-carousel')[1],
        rootMargin: "0px",
        threshold: 0.9
      };

    triloObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let captionID = (entry.target.id).split("-")[0]
          let captionIndex = (entry.target.id).split("-")[1]
            if (entry.intersectionRatio>0) {
                Array.prototype.filter.call(indicatorDots, e => e.style.backgroundColor='lightgrey');
                Array.prototype.filter.call(captionText, elem => elem.style.display='none');
                document.querySelector(`#${captionID}-caption-${captionIndex}`).style.display='block';
                document.querySelector(`#trilo-dot-${captionIndex}`).style.backgroundColor='darkgrey';
            }
        })
          }, options)
      
      triloImages.forEach(image => {
          triloObserver.observe(image);
      });

    // Coral carousel
    const coralImages = document.querySelectorAll('.coral-image')
    let coralCaptionText = document.getElementsByClassName('carousel-caption')

      let coralOptions = {
        root: document.querySelectorAll('.coral-carousel')[1],
        rootMargin: "0px",
        threshold: 0.9
      };

    coralObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let captionID = (entry.target.id).split("-")[0]
          let captionIndex = (entry.target.id).split("-")[1]
            if (entry.intersectionRatio>0) {
                Array.prototype.filter.call(indicatorDots, e => e.style.backgroundColor='lightgrey');
                Array.prototype.filter.call(coralCaptionText, elem => elem.style.display='none');
                document.querySelector(`#${captionID}-caption-${captionIndex}`).style.display='block';
                document.querySelector(`#${captionID}-dot-${captionIndex}`).style.backgroundColor='darkgrey';
            } 
        })
          }, coralOptions)
      
      coralImages.forEach(image => {
          coralObserver.observe(image);
      });
    
    // Ammonite carousel
    const ammoImages = document.querySelectorAll('.ammo-image')
    let ammoCaptionText = document.getElementsByClassName('carousel-caption')

      let ammoOptions = {
        root: document.querySelectorAll('.ammo-carousel')[1],
        rootMargin: "0px",
        threshold: 0.9
      };

    ammoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          let captionID = (entry.target.id).split("-")[0]
          let captionIndex = (entry.target.id).split("-")[1]
            if (entry.intersectionRatio>0) {
                Array.prototype.filter.call(indicatorDots, e => e.style.backgroundColor='lightgrey');
                Array.prototype.filter.call(ammoCaptionText, elem => elem.style.display='none');
                document.querySelector(`#${captionID}-caption-${captionIndex}`).style.display='block';
                document.querySelector(`#${captionID}-dot-${captionIndex}`).style.backgroundColor='darkgrey';
            } 
        })
          }, ammoOptions)
      
      ammoImages.forEach(image => {
          ammoObserver.observe(image);
      });


// Bootstrap Popover
$('[data-toggle="popover"]').popover({
    container:'body', 
    trigger:'hover',
    placement: "auto"
    }
);

// Bootstrap Tooltip
$('[data-toggle="tooltip"]').tooltip({
    container:'body', 
    trigger:'hover',
    placement: "auto"
    }
);

    