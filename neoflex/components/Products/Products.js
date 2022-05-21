class Products{

    handleSetSS (elem, id){
        sessionStorageUtil.putProducts(id);
        // console.log(elem)
        // console.log(id)
        headerPage.render(sessionStorageUtil.getProducts().length)
    }

    render() {

        let htmlCatalog = '';
        CATALOG.forEach((elem)=>{
            // console.log(elem)
            htmlCatalog += `
                <div class="card">
                  <img src='${elem.img}' class="card-img-top" alt='${elem.nazvanie}'>
                  <ul class="list-group list-group-flush">
                  
                    <li class="list-group-item">
                        <span class="span-nazv-tov">${elem.nazvanie}</span>
                        <span class="span-price-tov">${elem.price.toLocaleString()} ₽</span>
                    </li>
                    
                    <li class="list-group-item">
                        <span><b>&#9733;</b>${elem.rate}</span>
                        <span><button onclick="productsPage.handleSetSS(this, '${elem.id}')">Купить</button></span>
                    </li>
                    
                  </ul>
                </div>
            `;
        });

        const htmlCatalogInner = `
            <div class="catalog-main">
                <div class='flex-catalog-main'>
                    <p>Наушники</p>
                    ${htmlCatalog}
                </div>
            </div>
        `;

        ROOT_PRODUCTS.innerHTML = htmlCatalogInner;
    }
}

const productsPage = new Products()
productsPage.render()