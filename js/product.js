class Product {
    
    constructor(id, name, price, stock, category, img){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.img = img;
    }

    checkStock(quantity){
        if(quantity > 0 && quantity <= this.stock) return true;
        else return false;
    }
}