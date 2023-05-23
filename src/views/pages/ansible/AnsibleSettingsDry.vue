<template>
  <VForm @submit.prevent="() => { }">

    <VCol cols="12">
      <VCard title="DRY 결과">
        <VCardText>
          <VTextarea label="Default" disabled="true" />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="nextTab" type="submit">
        Run
      </VBtn>
      <VBtn type="reset" color="secondary" variant="tonal">
        Reset
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
