export const createAbstractDesign = () => {
  const el = document.querySelector('.twenties-block');
  if (!el) return;

  el.innerHTML = `
  <div class="bg-primary-500 flex items-center justify-center overflow-hidden">
    <svg width="24" height="24" viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C15.6623 0 19.6472 2.90062 21.2484 6.99571C21.333 7.15528 21.4168 7.3233 21.5 7.50001C25.5 16 28 17.5 38.5 17L38.5012 17.0081C38.6668 17.0027 38.8331 17 39 17C47.2843 17 54 23.7157 54 32C54 40.2843 47.2843 47 39 47C38.6596 47 38.3218 46.9887 37.987 46.9663L38 47C33.5 46.6667 21 48.3 19 57.5C18.9619 57.6753 18.9225 57.8425 18.8819 58.002C18.1619 62.535 14.2356 66 9.5 66C4.25329 66 0 61.7467 0 56.5C0 51.2533 4.25329 47 9.5 47C9.66869 47 9.83635 47.0044 10.0029 47.0131L10 47C14 46.8333 23.6 44.8 24 34C24.0043 33.8849 24.0096 33.7727 24.0161 33.6635C24.0106 33.6094 24.0052 33.555 24 33.5C23.2 25.1 15 22.5 11 22V22Z" fill="#fe4c02"/>
    </svg>
  </div>

  <div class="bg-fire-500 flex items-center justify-center overflow-hidden">
    <svg width="24" height="24" viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C15.6623 0 19.6472 2.90062 21.2484 6.99571C21.333 7.15528 21.4168 7.3233 21.5 7.50001C25.5 16 28 17.5 38.5 17L38.5012 17.0081C38.6668 17.0027 38.8331 17 39 17C47.2843 17 54 23.7157 54 32C54 40.2843 47.2843 47 39 47C38.6596 47 38.3218 46.9887 37.987 46.9663L38 47C33.5 46.6667 21 48.3 19 57.5C18.9619 57.6753 18.9225 57.8425 18.8819 58.002C18.1619 62.535 14.2356 66 9.5 66C4.25329 66 0 61.7467 0 56.5C0 51.2533 4.25329 47 9.5 47C9.66869 47 9.83635 47.0044 10.0029 47.0131L10 47C14 46.8333 23.6 44.8 24 34C24.0043 33.8849 24.0096 33.7727 24.0161 33.6635C24.0106 33.6094 24.0052 33.555 24 33.5C23.2 25.1 15 22.5 11 22V22Z" fill="#3d015b"/>
    </svg>
  </div>
  
  <div class="bg-secondary-500 flex items-center justify-center overflow-hidden">
    <svg width="24" height="24" viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C15.6623 0 19.6472 2.90062 21.2484 6.99571C21.333 7.15528 21.4168 7.3233 21.5 7.50001C25.5 16 28 17.5 38.5 17L38.5012 17.0081C38.6668 17.0027 38.8331 17 39 17C47.2843 17 54 23.7157 54 32C54 40.2843 47.2843 47 39 47C38.6596 47 38.3218 46.9887 37.987 46.9663L38 47C33.5 46.6667 21 48.3 19 57.5C18.9619 57.6753 18.9225 57.8425 18.8819 58.002C18.1619 62.535 14.2356 66 9.5 66C4.25329 66 0 61.7467 0 56.5C0 51.2533 4.25329 47 9.5 47C9.66869 47 9.83635 47.0044 10.0029 47.0131L10 47C14 46.8333 23.6 44.8 24 34C24.0043 33.8849 24.0096 33.7727 24.0161 33.6635C24.0106 33.6094 24.0052 33.555 24 33.5C23.2 25.1 15 22.5 11 22V22Z" fill="#3d015b"/>
    </svg>
  </div>

  <div class="bg-[--black] flex items-center justify-center overflow-hidden">
    <svg width="24" height="24" viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C15.6623 0 19.6472 2.90062 21.2484 6.99571C21.333 7.15528 21.4168 7.3233 21.5 7.50001C25.5 16 28 17.5 38.5 17L38.5012 17.0081C38.6668 17.0027 38.8331 17 39 17C47.2843 17 54 23.7157 54 32C54 40.2843 47.2843 47 39 47C38.6596 47 38.3218 46.9887 37.987 46.9663L38 47C33.5 46.6667 21 48.3 19 57.5C18.9619 57.6753 18.9225 57.8425 18.8819 58.002C18.1619 62.535 14.2356 66 9.5 66C4.25329 66 0 61.7467 0 56.5C0 51.2533 4.25329 47 9.5 47C9.66869 47 9.83635 47.0044 10.0029 47.0131L10 47C14 46.8333 23.6 44.8 24 34C24.0043 33.8849 24.0096 33.7727 24.0161 33.6635C24.0106 33.6094 24.0052 33.555 24 33.5C23.2 25.1 15 22.5 11 22V22Z" fill="#02f6b6"/>
    </svg>
  </div>
`
}


export const createTwentiesPattern = () => {
  const el = document.querySelector('.twenties');
  if (!el) return;

  el.innerHTML = `<div class=" flex flex-wrap items-center justify-center whitespace-nowrap *:flex-grow *:text-primary-500 *:font-bold *:text-3xl">
  <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
    <p>Twenties Connect</p>
  </div>`
}
