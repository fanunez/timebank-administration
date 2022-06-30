<template>
    <div class="text-container text-left mt-2">        
        Bonos de tiempo disponibles
        <div class="row mt-1">
            <div class="col-3 pl-2">
                <Icon icon="bx:time-five" width="48" height="48"/>
            </div>
            <div class="col number-container" style="display: flex; align-self: center;">
                {{ balance }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                balance: ''
            }
        },
        created () {
            this.balance = 15;
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