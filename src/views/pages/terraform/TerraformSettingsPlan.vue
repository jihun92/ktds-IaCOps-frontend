<template>
  <VForm @submit.prevent="() => { }">

    <VCol cols="12">
      <VCard title="PLAN 결과">
        <VCardText>
          <VTextarea label="Default" />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="nextTab" type="submit">
        Apply
      </VBtn>
      <VBtn @click="goBack" type="reset" color="secondary" variant="tonal">
        Back
      </VBtn>
    </VCol>
  </VForm>
</template>
<script>

export default {
  methods: {
    nextTab() {
      this.$emit('clickNextTab');
    },

    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
