// app.js
const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const port = 3002; // Cambia el puerto según tus necesidades

const productManager = new ProductManager();

app.use(express.json());

app.get('/products', async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await productManager.getAllProducts();

    if (limit) {
      res.json(products.slice(0, limit));
    } else {
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.get('/products/:pid', async (req, res) => {
  const productId = req.params.pid;

  try {
    const product = await productManager.getProductById(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado', productId });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
