<template>
    <div class="header">
        <v-container>
            <v-navigation-drawer
                fixed
                right
                v-model="drawer"
                :color="color"
                src="../assets/blur.jpg"
                :mini-variant="miniVariant"
                :top="right"
                :permanent="permanent"
                dark
            >
                <v-list dense nav class="py-0">
                    <v-list-item>
                        <v-list-item-avatar></v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title></v-list-item-title>
                            <v-list-item-subtitle></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        :to="item.to"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "AppBar",

    data: function () {
        return {
            drawer: true,
            items: [
                {
                    title: "10kW",
                    icon: "mdi-numeric-1-box-multiple",
                    to: "/",
                },
                {
                    title: "powerpack_detail15",
                    icon: "mdi-numeric-2-box-multiple",
                    to: "/powerpack_detail15",
                },

            ],
            color: "#3b1a9e",

            right: true,
            permanent: true,
            miniVariant: true,
            expandOnHover: true,
            background: false,
        };
    },

    methods: {},
};
</script>

<style>
.header {
    display: flex;
    align-items: center;
}
</style>
