export default function changeHeaderOnScroll (selector) {
  const hero = document.querySelector(selector);
  if (!hero) return;
  const header = hero.querySelector('header');
  if (!header) return;
  //const button = header.querySelector('.header__btn');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      hero.classList.add('scroll');
      header.classList.add('scroll');
    } else {
      hero.classList.remove('scroll');
      header.classList.remove('scroll');
    }
  }

  const handleLoaded = () => {
    if (window.scrollY > 0) {
      hero.classList.add('scroll');
      header.classList.add('scroll');
    }
  }
  document.addEventListener('scroll', handleScroll);
  document.addEventListener('DOMContentLoaded', handleLoaded)
}

