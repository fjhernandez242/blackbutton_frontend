// stores/cartStore.js

import { defineStore } from 'pinia';
import { productoById } from '@/services/catalogo-services';

export const useCartStore = defineStore('cart', {
    // El 'state' es donde se guarda la información (el carrito en sí)
    state: () => ({
        // 'items' será un array de objetos, donde cada objeto es un producto en el carrito
        items: [],
    }),

    // Los 'actions' son las funciones que modifican el estado (añadir, quitar, etc.)
    actions: {
        /**
         * Agrega un producto al carrito. Si ya existe, incrementa la cantidad.
         * @param {Object} product - El producto a añadir (debe tener id, nombre, precio, etc.)
         */
        addItem(product) {
            const existingItem = this.items.find(item => item.id === product.id);

            if (existingItem) {
                // Si el producto ya existe, solo aumentamos la cantidad
                existingItem.quantity++;
            } else {
                // Si es un producto nuevo, lo agregamos con quantity: 1
                this.items.push({
                    ...product,
                    quantity: 1,
                });
            }
        },
        deleteItem(id) {
            this.items = this.items.filter(item => item.id !== id);
            console.log(`Producto con ID ${id} eliminado del carrito`);
            return id;
        },

        // Podrías añadir más acciones como removeItem, clearCart, etc.
    },

    // Los 'getters' son como propiedades computadas para el store (para leer información)
    getters: {
        /**
         * Devuelve el número total de productos en el carrito.
         * Esto es lo que usarás para el contador en tu header.
         */
        totalItemsCount: (state) => {
            // Usamos .reduce para sumar la propiedad 'quantity' de todos los items
            return state.items.reduce((total, item) => total + item.quantity, 0);
        },

        loadedProducts: (state) => {
            return state.items;
        },
    },
});