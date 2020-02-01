import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

/* eslint-disable import/prefer-default-export */
export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state, payload: User) {
    state.error = false;
    state.user = payload;
  },
  profileError(state) {
    state.error = true;
    state.user = undefined;
  },
};
