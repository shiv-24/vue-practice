<template>
    <div>
    <nav-component/>
    <div class="container center-padding">
        <div class="row">
            <img src="../assets/table.png" alt="" class=".img-fluid rounded mx-auto d-block">
        </div>
    </div>
    <message-component/>
  </div>
</template>

<script>
import NavComponent from './NavComponent.vue';
import MessageComponent from './MessageComponent.vue';

export default {
    name: 'GameScreen',
    components: {
        NavComponent,
        MessageComponent
    }
}
</script>

<style scoped>
.mar-right{
    margin-right: 10em;
}
.mar-left{
    margin-left: 10em;
}
.center-padding {
    padding: 4em 0 4em 0;
}
</style>