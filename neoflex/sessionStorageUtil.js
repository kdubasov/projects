class SessionStorageUtil {
    constructor() {
        this.keyNazvanie = 'products'
    }

    //для получения значений товаров
    getProducts(){
        const productsSessionStorage = sessionStorage.getItem(this.keyNazvanie);
        if (productsSessionStorage !== null){
            return JSON.parse(productsSessionStorage)
        }
        return []
    }

    //для добавления товаров в сс
    putProducts(id){
        let products = this.getProducts();
        // const indexTovar = products.indexOf(id);
        // if (indexTovar === -1){
        //     products.push(id)
        // }else {
        //     products.splice(indexTovar,1)
        // }
        products.push(id)

        sessionStorage.setItem(this.keyNazvanie, JSON.stringify(products))
    }
    delAllProducts(id){
        let products = this.getProducts();
        let newProducts = products.filter(function(f) { return f !== id })
        sessionStorage.setItem(this.keyNazvanie, JSON.stringify(newProducts))
    }
    //для удаления товаров из сс
    delProducts(id){
        let products = this.getProducts();
        let myIndex = products.indexOf(id);
        if (myIndex !== -1) {
            products.splice(myIndex, 1);
        }
        sessionStorage.setItem(this.keyNazvanie, JSON.stringify(products))
    }
}

const sessionStorageUtil = new SessionStorageUtil()
// console.log(sessionStorageUtil.getProducts())
// sessionStorageUtil.putProducts('tovar7')
// sessionStorageUtil.putProducts('tovar8')