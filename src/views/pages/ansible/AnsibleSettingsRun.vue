<template>
  <VForm @submit.prevent="() => { }">

    <VCol cols="12">
      <VCard title="RUN 결과">
        <VCardText>
          <VTextarea label="Default" />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="nextTab" type="submit">
        Confirm
      </VBtn>
    </VCol>
  </VForm>
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
