$('document').ready(function () {
 countOfGoods();
 loadGoods();
 loadFilter();
});

var count = 0;

function countOfGoods() {
 $.getJSON('../catalog/tehnica_dlya_kuhni/krupnaia_tehnica/holodilniki.json', function (data) {

  for (let key in data) {
   count++;
  }
  document.querySelector('.prod-count').innerHTML = count;
 })
}

function loadGoods() {
 $.getJSON('../catalog/tehnica_dlya_kuhni/krupnaia_tehnica/holodilniki.json', function (data) {

  let out = '';

  for (let key in data) {
   out += '<div class="prod-item">';
   out += ' <div class="prod-item__img">';
   out += '  <img src="' + data[key]['img'] + '" alt="">';
   out += '    </div>';
   out += '  <div class="prod-item__title">' + data[key]['name'] + '</div>';
   out += '  <div class="prod-item__content">';
   out += '   <div class="prod-item__prices">';
   out += '    <div class="prod-item__price">';
   out += '     <span class="item-price">' + data[key]['price'] + '</span>';
   out += '     <span class="item-valute">MDL</span>';
   out += '    </div>';
   out += '    <div class="prod-item__credit">' + data[key]['credit'] + ' MDL / мес.</div>';
   out += '   </div>';
   out += '   <div class="prod-item__rate_and_btns">';
   out += '    <div class="prod-item__btns">';
   out += '     <div class="prod-item__btn"><i class="far fa-heart"></i></div>';
   out += '     <div class="prod-item__btn"><i class="far fa-balance-scale"></i></div>';
   out += '     <div class="prod-item__btn"><i class="far fa-shopping-basket"></i></div>';
   out += '    </div>';
   out += '   </div>';
   out += '  </div>';
   out += ' </div>';
  }
  $('.prod-items').append(out);
 })
}

function loadFilter() {
 $.getJSON('../catalog/tehnica_dlya_kuhni/krupnaia_tehnica/holodilniki.json', function (data) {


  for (const key in data) {
   document.querySelector('.catalog').onclick
  }

 })
}



