<template>
    <v-app>
    <Header></Header>
    <router-view/>
    </v-app>
</template>

<script>
import Header from './layout/Header';

export default {
    name: 'App',
    components: {
        Header,
        
    },

    data: () => ({}),
};
</script>





