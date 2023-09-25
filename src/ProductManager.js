// ProductManager.js
class ProductManager {
    constructor() {
      this.products = [
        { id: 1, name: 'Producto 1' },
        { id: 2, name: 'Producto 2' },
        { id: 3, name: 'Producto 3' },
      ]; // Datos de ejemplo
    }
  
    async getAllProducts() {
      return this.products;
    }
  
    async getProductById(productId) {
      const product = this.products.find(product => product.id === parseInt(productId));
      console.log('Producto encontrado:', product); // Agregado para depuración
      return product;
    }
  }
  
  module.exports = ProductManager;
  
  