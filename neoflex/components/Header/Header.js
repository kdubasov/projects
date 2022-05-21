class Header{

    handleOpenShopCart(){
        shoppingPage.render()
    }

    render(count){
        const html = `
        <nav class="navbar navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">QPICK</a>
            <div class="d-flex">
                <div onclick="headerPage.handleOpenShopCart()">
                    <div class="counter-nav-top-korz"><p>${count}</p></div>
                    <img alt="serdce" src="../../images/navbarTop/serdce.svg">
                </div>
                <div>
                    <img alt="korz" src="../../images/navbarTop/korz.svg">
                </div>
            </div>
          </div>
        </nav>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = sessionStorageUtil.getProducts()
headerPage.render(productsStore.length)