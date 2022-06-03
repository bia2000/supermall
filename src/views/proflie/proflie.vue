<template>
  <div class="proflie">
    <proflie-user></proflie-user>
    <proflie-list></proflie-list>
  </div>
</template>
<script>
import ProflieList from './childComps/ProflieList.vue'
import ProflieUser from './childComps/ProflieUser.vue'
export default {
  components: { ProflieUser, ProflieList },
  name: 'profile',
}
</script>
<style scoped></style>
