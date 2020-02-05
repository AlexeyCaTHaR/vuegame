<template>
  <div class="stat">
    <h1>Параметры персонажа</h1>
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
export default class Stat extends Vue {
}


</script>
