import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/types';
// import { user } from '/src/store/modules/user'

Vue.use(Vuex);

// export default new Vuex.Store({
//   strict: true,
//   modules: {
//     user,
//   },
//   plugins: [],
// });

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    // user
  },
};

export default new Vuex.Store<RootState>(store);
