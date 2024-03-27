// Tenere fermo la navbar on scroll
window.onscroll = function() {

};
    

  
  // goToTop button
  function goToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('scroll', function() {
      let goToTopBtn = document.getElementById('goToTopBtn');
      if (window.scrollY > 1000) {
          goToTopBtn.style.display = 'block';
      } else {
          goToTopBtn.style.display = 'none';
      }
  });
  