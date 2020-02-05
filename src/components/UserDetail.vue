<template>
  <div class="hello">
    <div v-if="user.user">
      <p>
        Full name: {{ fullName }}
      </p>
      <p>
        Email: {{ email }}
      </p>
    </div>
    <div v-if="user.error">
      Oops an error occured
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { UserState, User } from '../store/user/types';

const namespace: string = 'user';

@Component
export default class UserDetail extends Vue {
  @State('user') user: UserState;

  @Action('fetchData', { namespace }) fetchData: any;

  @Getter('fullName', { namespace }) fullName: string;

  mounted() {
    // fetching data as soon as the component's been mounted
    this.fetchData();
  }

  // computed variable based on user's email
  get email() {
    const user = this.user && this.user.user;
    return (user && user.email) || '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  color: #42b983;
}
</style>
