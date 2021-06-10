<template>
    <div class="container-fluid">
        <h2 class="py-5 text-center text-bold text-white">Welcome to Poker</h2>
        <h6 class="text-center text-white">Set up your game</h6>
        <b-form @submit="onCreateGame">
            <b-form-group class="center-padding">
                <div class="row">
                    <b-form-input
                        id="input-1"
                        class="col"
                        v-model="form.name"
                        type="text"
                        placeholder="Name"
                        required
                    >
                    </b-form-input>
                </div>
            </b-form-group>
            <b-form-group class="center-padding">
                <div class="row">
                    <b-form-input
                        id="input-2"
                        class="col"
                        v-model="form.packCount"
                        type="number"
                        placeholder="Starting Pack"
                     >
                    </b-form-input>
                </div>
                
            </b-form-group>
            <b-form-group class="center-padding">
                <div class="row">
                    <b-form-input 
                        id="input-3"
                        class="col mr-2"
                        v-model="form.smallBlind"
                        type="number"
                        placeholder="Small Blind"
                    >
                </b-form-input>
                <b-form-input 
                        id="input-4"
                        class="col"
                        v-model="form.bigBlind"
                        type="number"
                        placeholder="Big Blind"
                    >
                </b-form-input>
                </div>
            </b-form-group>
            <b-form-group class="center-padding">
                <div class="row">
                    <b-form-input
                        id="input-1"
                        class="col"
                        v-model="form.tableName"
                        type="text"
                        placeholder="Table Name (optional)"
                    >
                    </b-form-input>
                </div>
            </b-form-group>
            <b-form-group class="center-padding">
                <div class="row">
                     <b-form-checkbox
                        id="checkbox-1"
                        v-model="form.straddle"
                        name="checkbox-1"
                        value=true
                        unchecked-value=false
                        class="col-4 text-white"
                    >
                        Straddle
                    </b-form-checkbox>
                     <b-form-checkbox
                        id="checkbox-2"
                        v-model="form.multiStraddle"
                        name="checkbox-2"
                        value=true
                        unchecked-value=false
                        class="col-4 offset-4 text-white"
                    >
                        Multi-Straddle
                    </b-form-checkbox>
                </div>
            </b-form-group>
             <b-form-group class="center-padding">
                <div class="row">
                    <b-button block variant="info" class="text-uppercase font-weight-light" type="submit"><small>Create game</small></b-button>
                </div>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          packCount: null,
          straddle: false,
          multiStraddle: false,
          bigBlind: null,
          smallBlind: null,
          tableName: ''
        }
      }
    },
    methods: {
        ...mapActions({
            addPlayerInfo: 'addPlayerInfo'
        }),
        onCreateGame(event) {
            event.preventDefault();
            console.log(this.form)
            this.addPlayerInfo(this.form);
            this.$router.push('/game')
        }
    }
}
</script>

<style scoped>
.center-padding {
    padding: 0 35% 0 35%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

</style>