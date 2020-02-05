<template>
  <div class="about">
    <h1>Параметры пользователя</h1>
    <UserDetail></UserDetail>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import UserDetail from '../components/UserDetail.vue';
  @Component({
    components: { UserDetail },
  })
export default class About extends Vue {
}


</script>
