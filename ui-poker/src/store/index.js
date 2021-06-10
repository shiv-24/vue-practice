import Vue from 'vue';
import Vuex from 'vuex';

import playerInfo from './modules/playerInfo';
import messages from './modules/messages';
// import * as modules from ''

Vue.use(Vuex);

export const createStore = () => {
  const store = new Vuex.Store({
    modules: {  
      playerInfo,
      messages
    }
  });

  return store;
};

export default { createStore };