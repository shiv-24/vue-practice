<template>
    <div class="message-position">
        <b-button class="my-2 my-sm-0 btn btn-outline-info text-uppercase text-white mr-2 text-center" style="width:5%">Log</b-button>
        <b-button class="my-2 my-sm-0 btn btn-outline-info text-uppercase text-white text-center" style="width:5%">Buy-Ins</b-button>
        <div class="my-2 message-box-width">
            <b-form-textarea
                id="textarea"
                rows="3"
                max-rows="3"
                class="bg-dark text-white rounded"
                v-model="labelText"
                disabled
            ></b-form-textarea>
            <div class="container">
                <div class="row">
                    <b-form-input v-model="inputText" placeholder="Enter message" class="col-10 rounded"></b-form-input>
                    <b-button class="col-2 btn btn-info rounded" @click="sendMessage">Send</b-button>
                </div>
                <div class="row">
                    <span>{{ totalMembers }} in chat</span>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import io from 'socket.io-client';

export default {
    name: 'MessageComponent',
    data() {
        return {
            labelText: '',
            inputText: '',
            totalMembers: 0,
            // socket: io.connect('ws://localhost:8000', {
            //         withCredentials: true,
            // })
        }
    },
    computed: {
        ...mapGetters({
            getLastMessage: 'getLastMessage',
            // totalMemebers: 'getTotalNumberOfPlayers'
        }),
    },
    methods: {
        ...mapActions({
           addMessage: 'addMessage',
           fetchLastMessage: 'fetchLastMessage'
        }),
        sendMessage() {
            // this.socket.emit('chat', this.inputText)
            // this.socket.on('chat', (msg)=> {
            //     this.labelText = this.labelText ? this.labelText + '\n' + msg : msg
            // })
            this.addMessage(this.inputText);
            // console.log(this.getLastMessage)
            this.fetchLastMessage()
            // console.log(this.getLastMessage)
            this.inputText = ''
            // this.labelText = this.labelText ? this.labelText + '\n' + this.getLastMessage : this.getLastMessage;
        },
        getLabelText() {
            return 
            console.log('label text', this.labelText)
        }
    },
    created() {
        // this.socket.on('members', data => {
        //     this.totalMembers = data;
        // });
    }
}
</script>

<style scoped>
.message-position {
    position: relative;
    bottom: 10px;
    margin-left: 10em;
}
.message-box-width {
    width: 30% !important;
}
</style>