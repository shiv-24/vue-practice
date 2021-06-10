<template>
     <b-navbar toggleable="lg" type="light" variant="faded" fixed="top">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="my-2" is-nav>
      <b-navbar-nav>
        <b-button class="my-2 my-sm-0 btn btn-info text-uppercase btn-xl mr-2 mar-left">Get Sharable Link</b-button>
        <b-button class="my-2 my-sm-0 btn btn-outline-secondary text-uppercase text-white mr-2">Quit</b-button>
        <b-button class="my-2 my-sm-0 btn btn-outline-secondary text-uppercase text-white mr-2">Host Options</b-button>
        <b-button class="my-2 my-sm-0 btn btn-outline-secondary text-uppercase text-white">Sit Down</b-button>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button class="my-2 my-sm-0 btn btn-outline-secondary btn-lg text-uppercase text-white mar-right text-center" disabled>Blind: {{ setBlindText }}</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NavComponent',
    data() {
        return {
            // blindText: ''
        }
    },
    computed :{
         ...mapGetters({
            getPlayerInfo: 'getPlayerInfo'
        }),
        setBlindText() {
            return this.getPlayerInfo.smallBlind + '/' + this.getPlayerInfo.bigBlind;
        }
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