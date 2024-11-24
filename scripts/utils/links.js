export default function setActiveLink () {
  const links = document.querySelectorAll('.nav__link');
  const menu = document.querySelector('#menu');
  const sections = document.querySelectorAll('section');

  const options = { threshold: 0.5 };
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelectorAll(`.nav__link[href="#${id}"]`);
      if (entry.isIntersecting) {
        if (link) link.forEach(item => item.classList.add('active'));
      } else {
        if (link) link.forEach(item => item.classList.remove('active'));
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (!menu) return;
      menu.checked = false;
    })
  })
}