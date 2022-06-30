<template>
    <div class="text-container text-left mt-2">        
        Servicios disponibles
        <div class="row mt-1">
            <div class="col-3 pl-2">
                <Icon icon="ep:suitcase" width="48" height="48" />
            </div>
            <div class="col number-container" style="display: flex; align-self: center;">
                {{ services }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                services: ''
            }
        },
        created () {
            this.services = 15;
        }
    }
</script>

<style scoped>
    .text-container {
        font-size: 16px;
        font-weight: bold;
    }

    .number-container {
        font-size: 30px;
        font-weight: bold;
    }

</style>