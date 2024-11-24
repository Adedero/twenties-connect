const tiltText = () => {
  const options = { threshold: 0.8 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('tilted');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const els = document.querySelectorAll('.tilt');
  els.forEach(el => {
    observer.observe(el);
  });
}

export default tiltText;