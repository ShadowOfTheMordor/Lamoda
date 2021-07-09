const headerCityButton = document.querySelector(".header__city-button");


headerCityButton.textContent = localStorage.getItem("lamoda-location") || "Ваш город?";
    
headerCityButton.addEventListener("click", () => {
    const city = prompt("Укажите ваш город");
    headerCityButton.textContent = city;
    localStorage.setItem("lamoda-location", city)
});


// блокировка скролла
const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
    // document.body.style.paddingRight = widthScroll;
};
const enableScroll = () => {
    document.body.style.cssText = ``;
    // window.scrollY = document.body.dbScrollY;
    window.scroll({
        top: document.body.dbScrollY
    });
};

// модальное окно

const subheaderCart = document.querySelector(".subheader__cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartBtnClose = document.querySelector(".cart__btn-close");

const cartModalOpen = () => {
    cartOverlay.classList.add("cart-overlay-open");
    disableScroll();
};

const cartModalClose = () => {
    cartOverlay.classList.remove("cart-overlay-open");
    enableScroll();
};

subheaderCart.addEventListener("click", cartModalOpen);

cartOverlay.addEventListener("click", (event) => {
    //закрытие модального окна
    const target = event.target;
    // console.log(target);
    if (target.matches(".cart-overlay") || target.matches(".cart__btn-close")) {
        cartModalClose();
    }
});