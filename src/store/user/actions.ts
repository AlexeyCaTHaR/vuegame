import { ActionTree } from 'vuex';
import axios from 'axios';
import { UserState, User } from './types';
import { RootState } from '@/types';

/* eslint-disable import/prefer-default-export */
export const actions: ActionTree<UserState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: '/api/user.json',
    }).then((response) => {
      const payload: User = response && response.data;
      commit('profileLoaded', payload);
    }, (error) => {
      /* eslint-disable no-console */
      console.log(error);
      commit('profileError');
    });
  },
};
