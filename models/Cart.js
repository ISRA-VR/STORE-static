// Model: Cart - Representa el carrito de compras.
class Cart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
    }

    // Agrega un producto al carrito
    addProduct(product) {
        const existingProduct = this.items.find(item => item.id === product.id);
        
        if (existingProduct) {
            existingProduct.incrementQuantity();
        } else {
            this.items.push(product);
        }
        
        this.saveToStorage();
        return existingProduct ? 'updated' : 'added';
    }

    // Obtiene todos los productos del carrito
    getItems() {
        return this.items;
    }

    // Calcula el total del carrito
    getTotal() {
        return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
    }

    // Cuenta la cantidad total de productos
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Guarda el carrito en localStorage
    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    // Carga el carrito desde localStorage
    loadFromStorage() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const items = JSON.parse(storedCart);
            this.items = items.map(item => {
                const product = new Product(item.id, item.name, item.price, item.image, item.description);
                product.quantity = item.quantity;
                return product;
            });
        }
    }

    // Limpia el carrito
    clear() {
        this.items = [];
        this.saveToStorage();
    }

    // Elimina un producto del carrito
    removeItem(productId) {
        this.items = this.items.filter(item => String(item.id) !== String(productId));
        this.saveToStorage();
    }
}