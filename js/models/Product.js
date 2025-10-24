// Model: Product - Representa un producto en la tienda
class Product {
    constructor(id, name, price, image, description = '') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.quantity = 1;
    }

    // Calcula el subtotal del producto
    getSubtotal() {
        return this.price * this.quantity;
    }

    // Incrementa la cantidad
    incrementQuantity() {
        this.quantity++;
    }

    // Decrementa la cantidad
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
}
