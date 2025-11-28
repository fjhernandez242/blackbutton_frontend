<template>
    <div class="encabezado d-flex align-items-center fixed-top">
        <img id="logoMarca" src="../../assets/img/logo1_sinFondo.png" alt="" class="img-fluid me-3"></img>
        <nav class="navbar navbar-expand-lg flex-grow-1">
            <div class="container-fluid">
                <h3 id="titleNavbar">BlackButton</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <!--li class="nav-item">
                            <RouterLink class="nav-link"
                                :class="{ 'active': currentActive == 'Catalogo'}"
                                @click="setActive('Catalogo')"
                                aria-current="page" to="/"
                                @cont-carrito="conteoCarrito">
                                <i class="bi bi-journal-text"></i> Catálogo
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link"
                                :class="{ 'active': currentActive == 'Panel'}"
                                @click="setActive('Panel')"
                                to="/panel">
                                <i class="bi bi-gear"></i> Panel
                            </RouterLink>
                        </li-->
                        <li class="nav-item pe-4">
                            <button type="button" class="nav-link btn position-relative" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="loadedProducts">
                                <i class="bi bi-cart2"></i>
                                <span v-if="cartStore.totalItemsCount > 0"
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {{ cartStore.totalItemsCount }}
                                <span class="visually-hidden">Productos en carrito</span>
                                </span>
                            </button>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar">
                        <button class="btn" id="bntShearch" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    <!-- Zona de carro para compras -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi carrito</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div v-if="cartStore.totalItemsCount == 0">
                <span>No hay amigurumis cargados </span>
                <i class="bi bi-emoji-frown"></i>
            </div>
            <div v-for="producto in loader" class="col-12 col-sm-6 col-lg-2-4-custom mb-4">
                <div class="card">
                    <div class="card-bod">
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn-close" @click="deleteProduct(producto.id)" aria-label="Close"></button>
                        </div>
                        <span>{{ producto.producto }}</span>
                        <div class="row pb-2">
                            <div class="col-md-6 text-start">
                                <span>
                                    <b><i class="bi bi-currency-dollar"></i> {{ producto.precio }}</b>
                                </span>
                            </div>
                            <div class="col-md-6 text-end">
                                <small>
                                    <i class="bi bi-rulers pe-1"></i> {{ producto.dimensiones }} cm
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useCartStore } from '@/store/cartStore.js';
    import { storeToRefs } from 'pinia';

    // Instancia del store
    const cartStore = useCartStore();
    // Recopilado de productos cargados en carrito
    const loader = ref([]);

    // Función para cargar los productos en el carrito
    const loadedProducts = () => {
        loader.value = cartStore.loadedProducts;
    }

    const deleteProduct = (id) => {
        // Elimina el producto del carrito
        cartStore.deleteItem(id);
        // Carga de nuevo los items en el Canvas
        loadedProducts();
    }
</script>

<style scoped>
    .encabezado {
        background-color: rgb(238, 247, 255);;
        padding: 10px 15px;
        box-shadow: 0 7px 15px rgb(181, 52, 113);
    }

    #logoMarca{
        padding-left: 1rem;
        height: 50px;
        transition: all 0.9s;
    }

    #logoMarca:hover {
        transform: scale3d(1.9, 1.9, 1.9);
        transition: all 0.9s;
    }

    .navbar #titleNavbar {
        font-weight: bold;
        color: #6D214F;
    }

    .navbar .nav-item .nav-link.active {
        border-radius: 10px;
        box-shadow: 0 7px 10px rgb(181, 52, 113);
    }

    .navbar .nav-item .nav-link:hover {
        border-radius: 10px;
        box-shadow: 0 7px 10px rgb(181, 52, 113);
    }

    #bntShearch {
        background-color: #B53471;
    }

    #bntShearch:hover {
        background-color: #c56cf0;
    }
</style>