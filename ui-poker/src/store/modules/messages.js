import { STORE_MESSAGE, LAST_MESSAGE } from '@/store/mutations'
import { io } from 'socket.io-client';

const socket = io.connect('ws://localhost:8000', {
    withCredentials: true,
})
console.log('socker is ', socket)

const initialState = () => ({
   messages:[],
   lastMessage: ''
});

const mutations = {
    [STORE_MESSAGE](state, data) {
        // state.messages.push(data)
        // console.log('messages ', state.messages)
        socket.emit('chat', data)
    },

    [LAST_MESSAGE] (state) {
    //   socket.on('chat', (msg)=> {
    //       console.log('message is ', msg)
    //       state.lastMessage = msg
    // })
    console.log('in fetch?')
      socket.on('members', (data) => {
        console.log('total Memebers are ', data)
    })
    }
};

const getters = {
    getLastMessage: state => state.lastMessage,
    // getTotalNumberOfPlayers: socket.on('members', (data) => data)
};

const actions = {
    async addMessage({ commit }, message) {
       commit(STORE_MESSAGE, message)
    },
    fetchLastMessage ({commit}){
         commit(LAST_MESSAGE)
        //  return state.lastMessage
    }
};
export default {
    state: initialState,
    mutations,
    getters,
    actions
};