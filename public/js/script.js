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
