import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '@/types';

/* eslint-disable import/prefer-default-export */
export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'https://....',
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