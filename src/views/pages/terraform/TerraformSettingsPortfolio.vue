<template>
  <VCol cols="6" md="6" lg="4">
    <VCard class="text-center" @click="nextTab">

      <VCardText class="d-flex flex-column justify-center align-center">
        <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
          <VIcon size="2rem" icon="mdi-account-box-outline" />
        </VAvatar>


        Web Service
      </VCardText>

      <VCardText>
        <h6 class="text-h6">3-Tier Monolithic Architecture </h6>
      </VCardText>
    </VCard>
  </VCol>
  <VCol cols="6" md="6" lg="4">
    <VCard class="text-center" @click="nextTab">

      <VCardText class="d-flex flex-column justify-center align-center">
        <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
          <VIcon size="2rem" icon="mdi-account-box-outline" />
        </VAvatar>

        Web Service
      </VCardText>

      <VCardText>
        <h6 class="text-h6">3-Tier Monolithic Architecture</h6>
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

