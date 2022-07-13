document.querySelector('.main').style.display = 'none';
document.querySelector('.loader').style.display = 'block';

setTimeout(() => {
  document.querySelector('.main').style.display = 'grid';
  document.querySelector('.loader').style.display = 'none';
}, 1500);