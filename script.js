// Declarations of variables
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCardContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

const cardsContainer = document.querySelector(".cards-container");

// Events Declarations
navEmail.addEventListener("click", toggleDesktopMenu);
hamMenu.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleProductDetail);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
  const isShoppingCardContainerClosed =
    shoppingCardContainer.classList.contains("inactive");

  if (!isShoppingCardContainerClosed) {
    shoppingCardContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isShoppingCardContainerClosed =
    shoppingCardContainer.classList.contains("inactive");

  if (!isShoppingCardContainerClosed) {
    shoppingCardContainer.classList.add("inactive");
  }

  closeProductDetail();

  mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("active");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  shoppingCardContainer.classList.toggle("inactive");

  const isProductAsideClosed =
    productDetailContainer.classList.contains("active");

  if (!isProductAsideClosed) {
    productDetailContainer.classList.add("inactive");
  }
}

function openProductDetailAside() {
  shoppingCardContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetail() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computadora Gamer",
  price: 520,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computadora Gamer",
  price: 520,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.img);

    img.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // append img y div contenedor
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    // append del div vacio y el figure al contenedor
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    // append de los parrafos al div
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    // append de la imagen al figure
    productInfoFigure.appendChild(productImgCart);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
