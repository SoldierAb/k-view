<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/tree">Tree</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    .container{
        $bgBase:#efefef;
        width:100%;
        height:100%;
        background: $bgBase;
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }
        ul,li{
            list-style:none;
        }

    }
</style>


<script>

    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    }
</script>
