<template>
    <div class="row g-1">
        <div v-for="producto in catalogo" :key="producto.id" class="col-12 col-sm-6 col-lg-2-4-custom mb-4">
            <div class="card h-100" @click="selecImagen(producto.id)">
                <div class="card-header">
                    <img :src="rutaImagen(producto.imagen)" :alt="producto.producto" class="img-fluid producto-img">
                </div>
                <div class="card-body">
                    <h5>{{ producto.producto }}</h5>
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
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { API_BASE_URL } from '@/config/api-urls';
    // Importa el servicio para listar productos
    import { getProductos } from '@/services/catalogo-services';
    // key referencia
    const tarjeta = ref(null);

    const catalogo = ref([]);

    const listarProductos = async () => {
        getProductos().then(
            (data) => {
                catalogo.value = data.productos;
            }
        ).catch(error => {
            console.log("Error al obtener los datos: ", error);
        });
    };
    // Contruye la ruta de la imagen
    const rutaImagen = (urlRelativa) => {
        return `${API_BASE_URL}${urlRelativa}`;
    }
    onMounted(listarProductos);

    const selecImagen = (id) => {
        console.log(id);

    }
</script>

<style scoped>
    #logoMarca {
        max-width: 8%;
    }

    .row {
        margin-top: 3rem;
    }

    .card {
        border-radius: 10px;
        max-width: 100%;
        max-height: 100%;
        margin-inline: 0.7rem;
        box-shadow: 0 7px 15px rgb(0 0 0 / 0.2);
    }

    .card-header {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }

    .producto-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .card-header {
        background-color: #dadcdf;
        border-radius: 10px;
    }
    .color1 {
        background-color: #c56cf0;
    }
    .color2 {
        background-color: #B53471;
    }
    .color3 {
        background-color: #6D214F;
    }

    @media (min-width: 992px) {
    /* Aplica solo en el breakpoint "lg" (escritorio) de Bootstrap */
    .col-lg-2-4-custom {
        flex: 0 0 auto;
        /* Cada columna ocupa el 20% del ancho del row */
        width: 20%;
    }
}
</style>