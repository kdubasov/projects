class ShoppingCart{

    handleClear(){
        ROOT_SHOPPINGCART.innerHTML = '';
    }

    handleDeleteTovar(id){
        sessionStorageUtil.delAllProducts(id)
        shoppingPage.render()
        headerPage.render(sessionStorageUtil.getProducts().length)
    }

    handleMinusTovar(id){
        sessionStorageUtil.delProducts(id)
        shoppingPage.render()
        headerPage.render(sessionStorageUtil.getProducts().length)
    }

    handlePlusTovar(id){
        sessionStorageUtil.putProducts(id)
        shoppingPage.render()
        headerPage.render(sessionStorageUtil.getProducts().length)
    }

    render() {
        const productsStore = sessionStorageUtil.getProducts()
        let htmlCatalog = '';
        let sumCatalog = 0;


        CATALOG.forEach((elem)=>{
            if (productsStore.indexOf(elem.id) !== -1){
                htmlCatalog += `
                    <div class="shop-cart-main-card">
                        <div class="top-inner-shop-cart">
                            <img class="img-tovar-cart" src='${elem.img}' alt='${elem.nazvanie}'>
                            <div class="inner-shop-cart-info">
                                <p class="cart-info-nazv">${elem.nazvanie}</p>
                                <p class="cart-info-price">${elem.price} ₽</p>
                            </div>
                            <div onclick="shoppingPage.handleDeleteTovar('${elem.id}')">
                                <img class="close-card-shop-cart" alt="delete" src="../../images/shopCart/delete.svg">
                            </div>
                        </div>
                        <div class="footer-inner-shop-cart">
                            <div>
                                <button onclick="shoppingPage.handleMinusTovar('${elem.id}')">-</button>
                                <p>${productsStore.filter(function(x){return x=== elem.id}).length}</p>
                                <button onclick="shoppingPage.handlePlusTovar('${elem.id}')">+</button>
                            </div>
                            <div>
                                <p>${elem.price * productsStore.filter(function(x){return x=== elem.id}).length} ₽</p>
                            </div>
                        </div>
                    </div>
                `;
                sumCatalog += Number(elem.price * productsStore.filter(function(x){return x=== elem.id}).length)
            }
        });

        const html = `
            <div class="shop-cart-main">
                <img onclick="shoppingPage.handleClear()" class="close-but" alt="close" src="../../images/shopCart/close.png">
                
                <div class="shop-cart-card-container">
                    ${htmlCatalog}
                </div>
                
                <div class="shop-cart-sum">
                    <div>
                        <span>Итого:</span
                        <span>₽ ${sumCatalog.toLocaleString()}</span>
                    </div>
                    <button>Перейти к оформлению</button>
                </div>
                
            </div>
        `;
        ROOT_SHOPPINGCART.innerHTML = html;
    }
}

const shoppingPage = new ShoppingCart()
// shoppingPage.render()
