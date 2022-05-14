var heart = document.querySelector('.card-heart i');
var cart = document.querySelector('.card-cart i');
var cartValue = document.querySelector('.card-cart i .cart-value').innerText;
var buyNow = document.querySelector('.card-button .buy-now');
var buyCart = document.querySelector('.card-button .buy-cart');

var activeColor = document.querySelectorAll('.card-color div');
var activeSize = document.querySelectorAll('.card-size span');

heart.addEventListener('click', function () {
  this.classList.toggle('bxs-heart');
});

var result = 0;
cart.addEventListener('click', function () {
  result += 1;
  document.querySelector('.cart-value').innerText = result;
});

buyNow.addEventListener('click', function () {
  var valueSize = document.querySelector('.active-size').innerText;
  var colorValue = document.querySelector('.active-color').value;
  alert(
    `Mày muốn mua ${result} đôi, size ${valueSize}, màu ${colorValue} đúng chứ?`
  );
  alert('Không Bán');
});

buyCart.addEventListener('click', function () {
  result += 1;
  document.querySelector('.cart-value').innerText = result;
});

function removeSize() {
  for (let i = 0; i < 4; i++) {
    activeSize[i].addEventListener('click', function (e) {
      for (let j = 0; j < 4; j++) activeSize[j].classList.remove('active-size');
      this.classList.add('active-size');
    });
  }
}

function removeColor() {
  for (let i = 0; i < 3; i++) {
    activeColor[i].addEventListener('click', function (e) {
      for (let j = 0; j < 3; j++)
        activeColor[j].classList.remove('active-color');
      this.classList.add('active-color');
    });
  }
}

removeSize();
removeColor();
