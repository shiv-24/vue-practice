import { START_GAME } from '@/store/mutations'

const initialState = () => ({
    playerInfo: {
        name: '',
        packCount: 1,
        straddle: false,
        multiStraddle: false,
        bigBlind: 50,
        smallBlind: 25,
        tableName: ''
    }
});

const mutations = {
    [START_GAME](state, data) {
        state.playerInfo = { 
            name: data.name ? data.name : '',
            packCount: data.packCount ? data.packCount : 1,
            straddle: data.straddle ? data.straddle : false,
            multiStraddle: data.multiStraddle ? data.multiStraddle : false,
            bigBlind: data.bigBlind ? data.bigBlind : 50,
            smallBlind: data.smallBlind ? data.smallBlind : 25,
            tableName: data.tableName ? data.tableName : ''
         }
    }
};

const getters = {
    getPlayerInfo: state => state.playerInfo
};

const actions = {
    async addPlayerInfo({ commit }, playerInfo) {
       commit(START_GAME, playerInfo)
    }
};
export default {
    state: initialState,
    mutations,
    getters,
    actions
};