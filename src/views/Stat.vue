<template>
  <div class="stat">
    <h1>Параметры персонажа</h1>
    <PersonageDetail></PersonageDetail>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PersonageDetail from '../components/PersonageDetail.vue';
@Component({
  components: { PersonageDetail },
})
export default class Stat extends Vue {
}


</script>
