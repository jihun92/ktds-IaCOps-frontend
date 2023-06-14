<template>
  <VCol cols="6" md="6" lg="4">
    <VCard class="text-center" @click="nextTab">

      <VCardText class="d-flex flex-column justify-center align-center" >
        <h2 class="title"> AWS </h2>
        <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
          <VIcon size="2rem" icon="mdi-account-box-outline" />
        </VAvatar>
        Web Service
        <h6 class="text-h6">3-Tier Monolithic Architecture </h6><br>
        - WEB Tier : Multi EC2 (With ALB) <br>
        - WAS Server : Single EC2<br>
        - DB Server : Single EC2
      </VCardText>

    </VCard>
  </VCol>
</template>

<script>
export default {
  methods: {
    nextTab() {
      this.$emit('clickNextTab');
    }
  }
}
</script>

<style lang="scss">
.title {
  margin-left: -350px;
  color: orange;
}

</style>


