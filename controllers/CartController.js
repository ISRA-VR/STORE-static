// Controller: CartController - Maneja la lógica del carrito.
class CartController {
    constructor() {
        this.cart = new Cart();
        this.view = new CartView();
        this.init();
    }

    // Inicializa el controlador
    init() {
        this.updateView();
        this.attachEventListeners();
    }

    // Adjunta los event listeners a los botones de compra
    attachEventListeners() {
        const buyButtons = document.querySelectorAll('.buy-btn');
        
        buyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAddToCart(button);
            });
        });
    }

    // Maneja la acción de agregar al carrito
    handleAddToCart(button) {
        // Obtiene los datos del producto desde los atributos data
        const productData = {
            id: button.getAttribute('data-id'),
            name: button.getAttribute('data-name'),
            price: parseFloat(button.getAttribute('data-price')),
            image: button.getAttribute('data-image')
        };

        // Crea una instancia del producto
        const product = new Product(
            productData.id,
            productData.name,
            productData.price,
            productData.image
        );

        // Agrega el producto al carrito
        const action = this.cart.addProduct(product);

        // Actualiza la vista
        this.updateView();

        // Muestra notificación
        this.view.showNotification(product.name, action);

        // Animación del botón
        this.animateButton(button);
    }

    // Actualiza la vista con los datos actuales del carrito
    updateView() {
        const totalItems = this.cart.getTotalItems();
        const total = this.cart.getTotal();
        
        this.view.updateCartCount(totalItems);
        this.view.updateCartTotal(total);
    }

    // Animación del botón al hacer clic
    animateButton(button) {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    }

    // Obtiene el carrito actual
    getCart() {
        return this.cart;
    }
}
