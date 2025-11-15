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
                        <li class="nav-item">
                            <RouterLink class="nav-link"
                                :class="{ 'active': currentActive == 'Catalogo'}"
                                @click="setActive('Catalogo')"
                                aria-current="page" to="/">
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
</template>

<script setup>
    import { ref } from 'vue';

    const currentActive = ref('Catalogo');
    // Función para realizar el cambio de la pantalla activa
    const setActive = (tabName) => {
        currentActive.value = tabName;
    };
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
        color: #6D214F;
        border-bottom: 1px solid black;
    }

    #bntShearch {
        background-color: #B53471;
    }

    #bntShearch:hover {
        background-color: #c56cf0;
    }
</style>