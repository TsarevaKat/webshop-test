import '../node_modules/normalize.css/normalize.css'
import './assets/sass/style.sass'

const apportionmentBlock = (id) => {
  const main = document.getElementById(id),
    blocks = main.querySelectorAll('.section-block');
  let mainClass;
  if (blocks.length % 2 === 0) {
    mainClass = `section_2`;
  }
  if (blocks.length % 3 === 0) {
    mainClass = `section_3`;
  }
  if (blocks.length % 5 === 0) {
    mainClass = `section_5`;
  }
  if (blocks.length % 7 === 0) {
    mainClass = `section_7`;
  }
  if (blocks.length % 10 === 0) {
    mainClass = `section_10`;
  }
  if (mainClass !== '') {
    main.classList.add(mainClass);
  }
}

apportionmentBlock('section-main');

const mobileLink = () => {
  const blocks = document.querySelectorAll('.section-block');
  if (window.outerWidth < 992) {
    blocks.forEach(item => item.addEventListener('click', (e) => {
      item.querySelector('.section-block__btn').click();
    }));
  }
}

mobileLink();