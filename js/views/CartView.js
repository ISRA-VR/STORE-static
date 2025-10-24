// View: CartView - Maneja la actualización del DOM relacionada con el carrito
class CartView {
    constructor() {
        this.cartCountElement = document.getElementById('cart-count');
        this.notificationContainer = document.getElementById('notification-container');
    }

    // Actualiza el contador del carrito en el header
    updateCartCount(count) {
        if (this.cartCountElement) {
            this.cartCountElement.textContent = count;
            
            // Animación de pulso
            this.cartCountElement.classList.add('pulse');
            setTimeout(() => {
                this.cartCountElement.classList.remove('pulse');
            }, 300);
        }
    }

    // Muestra una notificación cuando se agrega un producto
    showNotification(productName, action = 'added') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        const message = action === 'added' 
            ? `✓ ${productName} agregado al carrito`
            : `✓ ${productName} actualizado en el carrito`;
        
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🛒</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        this.notificationContainer.appendChild(notification);
        
        // Animación de entrada
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Auto-remover después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Muestra el total del carrito (opcional, para uso futuro)
    updateCartTotal(total) {
        const cartTotalElement = document.getElementById('cart-total');
        if (cartTotalElement) {
            cartTotalElement.textContent = `$${total.toFixed(2)}`;
        }
    }
}
