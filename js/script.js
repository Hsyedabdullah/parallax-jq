// jq code



  $('.js-preloader').preloadinator({
    minTime: 2000
  });
 
  window.plausible = window.plausible || function() {
    (window.plausible.q = window.plausible.q || []).push(arguments)
  }
    /* init Jarallax */
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });

  
 