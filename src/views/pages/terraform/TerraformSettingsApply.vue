<script setup>
const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <VForm @submit.prevent="() => { }">

    <VCol cols="12">
      <VCard title="APPLY 결과">
        <VCardText>
          <p> apply결과 : {{ data }}</p>
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
