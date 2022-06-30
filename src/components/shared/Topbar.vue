<template>
    <div class="container navbar-buttons fixed-top mt-4">
        <div class="row">
            <Icon v-b-toggle.sidebar 
                icon="charm:menu-hamburger" 
                width="28" 
                height="32" 
                color="black" 
                class="col-2"
                style="cursor: pointer;"
            ></Icon>
            <div class="col timebank-title px-1" style="display: flex; align-items: center;">
                {{title}}
            </div>
        </div>
    <!-- Sidebar -->
    <b-sidebar id="sidebar" 
               aria-labelledby="sidebar-title"               
               backdrop
               shadow
               no-header
               style="position: absolute!important; top: 50%!important; left: 0!important;"
    >
      <template #default="{ hide }">
        <div class="p-3">
            <h4 id="sidebar-no-header-title">ADMINISTRACIÓN BANCO DE TIEMPO</h4>
            <!-- Timebank logo -->
            
            <!-- Navbar items -->
            <nav class="mb-3">
                <b-nav vertical>
                <b-nav-item href="/dashboard" @click="hide">Inicio</b-nav-item>
                <b-nav-item href="/registered-users" @click="hide">Ver usuarios registrados</b-nav-item>
                <b-nav-item href="/give-balance" @click="hide">Otorgar bonos de tiempo</b-nav-item>
                </b-nav>
            </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
    export default {
        name: 'Topbar',
        props: {
            title: String
        }
    }
</script>
<style>
.b-sidebar:not(.b-sidebar-right){
    left: auto!important;
    transition: 0.3s;    
}
.b-sidebar.slide{
    width: 0px;
}
.b-sidebar:not(.b-sidebar-right).slide:not(.show){
    transform: translateX(0%);
}
</style>
<style scoped>
.navbar-buttons{
    max-width: 425px;
    margin: 0 auto
}
.timebank-title{
    font-weight: bold;
    font-size: 24px;
}

</style>