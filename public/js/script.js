// varible
var itemInCart = {
  length: 0,
  data: []
};

var imgSave = new fabric.Text('SaveImg', {});

$(document).ready(function () {
  getAmoutInCart();
  handleNAmountInCart();
  handleAmountShoppingCart();
  deleteItemsCart();
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
  shoppingCartAmountButton.on("click", function () {
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
  var path = "/img/";
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
      path += mauSac[i].getAttribute("name") + ".jpg";
      break;
    }
  }
  console.log(path);
  fabric.Image.fromURL(path, function (img) {
    img.scaleToHeight(canvas.height);
    img.set({
      left: canvas.width / 2,
      top: canvas.height / 2,
      originX: 'center',
      originY: 'center'
    });
    canvas.setBackgroundImage(img);
    canvas.renderAll();
  });
  var json = JSON.stringify(canvas);
  document.getElementById("dataCanvas").value = json;
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

function popupInfo(id, name) {
  console.log(name);
  if (id == "") {
    return;
  } else {
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var shirt = JSON.parse(this.responseText);
        if (name.trim() == "shirts".trim()) {
          document.querySelector(".modal-body img").src = shirt.imgPath;
          document.querySelector(".modal-body .tensanpham").innerHTML = "Tên sản phẩm: " + shirt.name;
          document.querySelector(".modal-body .gia").innerHTML = "Giá: " + shirt.cost;
          document.querySelector(".modal-body .danhmuc").innerHTML = "Danh mục: " + shirt.danhMuc;
          document.querySelector(".modal-body .soluongdamua").innerHTML = "Số lượng đã mua: " + shirt.soluongmua;
        } else {
          document.querySelector(".modal-body img").src = shirt.imgPath;
          document.querySelector(".modal-body .tensanpham").innerHTML = "Tên sản phẩm: " + shirt.name;
          document.querySelector(".modal-body .gia").innerHTML = "Giá: " + shirt.costKhuyenMai;
          document.querySelector(".modal-body .danhmuc").innerHTML = "Danh mục: " + shirt.danhMuc;
          document.querySelector(".modal-body .soluongdamua").innerHTML = "Số lượng đã mua: " + shirt.soluongmua;
        }
      }
    };
    xmlhttp.open("GET", "/shirt?id=" + id + "&name=" + name, true);
    xmlhttp.send();
  }
}

function handleNAmountInCart() {
  $(".cost").on("click", function () {
    // set item
    var id = $(this)[0].id;
    var iter = 0;
    var checkbool = false;
    // popup info
    popupInfo(id, $(this)[0].name);
    // end popup info
    if (itemInCart.length !== 0)
      itemInCart.data.forEach(item => {
        if (item.id == id) {
          item.length++;
          checkbool = true;
        }
        iter++;
        if (iter === itemInCart.data.length) {
          // callback
          if (checkbool === false) {
            itemInCart.data.push({
              id: id,
              length: 1
            });
          }
        }
      });
    else {
      itemInCart.data.push({
        id: id,
        length: 1
      });
      // re-setup cookie
    }

    itemInCart.length++;
    var json_str = JSON.stringify(itemInCart);
    setCookie("cart", json_str);
    // increase number of cart
    var increasementCart = $("#number-item-in-cart");
    increasementCart.text(itemInCart.length);
  });
}

function getAmoutInCart() {
  if (getCookie("cart") != "") {
    var json_str = getCookie("cart");
    itemInCart = JSON.parse(json_str);
    var increasementCart = $("#number-item-in-cart");
    increasementCart.text(itemInCart.length);
  }
}

function deleteItemInCart(position) {
  if (getCookie("cart") != "") {
    var json_str = getCookie("cart");
    itemInCart = JSON.parse(json_str);
    if (position < itemInCart.length) {
      var tmpCut = itemInCart.data.splice(position, 1);
      itemInCart.length -= tmpCut[0].length;
    }
    if (itemInCart.length == 0) {
      setCookie("cart", "");
    } else {
      json_str = JSON.stringify(itemInCart);
      setCookie("cart", json_str);
    }
  }
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteItemsCart() {
  $(".shopping-cart-item-information button").on("click", function () {
    var index = $(this).parent().parent().index(".shopping-cart-item");
    $(this).parent().parent().next("hr").remove();
    $(this).parent().parent().remove();
    deleteItemInCart(index);
    window.location.replace("/cart");
  });
}