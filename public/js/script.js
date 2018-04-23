$(document).ready(function() {
  handleAmountShoppingCart();
});

function handleAmountShoppingCart() {
  // Shopping Cart

  var shoppingCartDivAmount = $(".shopping-cart-item-amount");
  for (i = 0; i < shoppingCartDivAmount.length; i++) {
    handleOnClickAmount(shoppingCartDivAmount[i]);
  }
}

function handleOnClickAmount(shoppingCartDivAmount) {
  var shoppingCartAmountButton = $(shoppingCartDivAmount).children("button");
  var shoppingCartAmount = $(shoppingCartDivAmount).children("div");
  var shoppingCartAmountNumber = parseInt(shoppingCartAmount.text());
  shoppingCartAmountButton.on("click", function() {
    // check current button
    if ($(this).hasClass("shopping-cart-item-minus")) {
      if (shoppingCartAmountNumber > 0) {
        $(shoppingCartAmount).html(--shoppingCartAmountNumber);
      }
    } else {
      if (shoppingCartAmountNumber < 99) {
        $(shoppingCartAmount).html(++shoppingCartAmountNumber);
      }
    }
  });
}

function LamAoSelected_display() {
  var path = "../../public/img/";
  var mauAo = document.querySelectorAll(".mauAo img");
  for (i = 0; i < mauAo.length; i++) {
    if (mauAo[i].classList.contains("mauAo_active")) {
      path += mauAo[i].getAttribute("name") + "_";
      break;
    }
  }
  var mauSac = document.querySelectorAll(".mauSac div");
  for (i = 0; i < mauSac.length; i++) {
    if (mauSac[i].classList.contains("mauSac_active")) {
      path += mauSac[i].getAttribute("name") + "_";
      break;
    }
  }
  var mauHinh = document.querySelectorAll(".mauHinh img");
  for (i = 0; i < mauHinh.length; i++) {
    if (mauHinh[i].classList.contains("mauHinh_active")) {
      path += mauHinh[i].getAttribute("name") + ".jpg";
      break;
    }
  }
  console.log(path);
  document.getElementById("display").src = path;
}

function LamAoSelected_mauAo(select) {
  var a = document.querySelectorAll(".mauAo img");
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove("mauAo_active");
  }
  // add 'active' classs to the element that was clicked
  select.classList.add("mauAo_active");
  LamAoSelected_display();
}

function LamAoSelected_mauSac(select) {
  var a = document.querySelectorAll(".mauSac div");
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove("mauSac_active");
  }
  // add 'active' classs to the element that was clicked
  select.classList.add("mauSac_active");
  LamAoSelected_display();
}

function LamAoSelected_mauHinh(select) {
  var a = document.querySelectorAll(".mauHinh img");
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove("mauHinh_active");
  }
  // add 'active' classs to the element that was clicked
  select.classList.add("mauHinh_active");
  LamAoSelected_display();
}
