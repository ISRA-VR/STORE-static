// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el controlador del carrito
    const cartController = new CartController();
    
    console.log('🚀 Aplicación STORE iniciada correctamente');
    console.log('📦 Carrito de compras activo');
    
    // Hacer el controlador accesible globalmente para debugging
    window.cartController = cartController;
});
