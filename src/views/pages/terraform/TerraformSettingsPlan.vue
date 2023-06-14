<script setup>
import { useTerraformStore } from './useTerraformStore'
const instance = getCurrentInstance();
const isLoading = ref(false);
const TerraformStore = useTerraformStore()
const { planResults, applyResults } = storeToRefs(TerraformStore)



const submitApply =  () => {
  isLoading.value = true;
  TerraformStore.postApply()
    .then((response) => {
      applyResults.value = response.data
      instance.emit('clickNextTab'); // 다음 탭으로 이동하는 이벤트 발생
      isLoading.value = false;
    }).catch(error => {
    console.error(error)
  })
}
const goBack = () => {
  instance.emit('goBack');
}

</script>

<template>
  <VForm @submit.prevent="() => { }" method="post">
    <VCol cols="12">
      <VCard title="PLAN 그래프">
        <VCardText>
          <img src="/src/assets/images/graph.svg" alt="SVG 이미지" style="max-width: 100%; max-height: 100%;">
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="PLAN 결과">
        <VCardText class="scrollable-p">
          <p v-for="d in planResults">
            <span>{{ d }}</span>
          </p>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="submitApply" type="submit">
        Apply
      </VBtn>
      <VBtn @click="goBack" color="secondary" variant="tonal">
        뒤로 가기
      </VBtn>
    </VCol>
  </VForm>
  <div class="spinner-wrap" v-if="isLoading">
    <VProgressCircular class="spinner" :size="70" :width="7" color="primary" indeterminate />
  </div>
</template>
<style lang="scss">
.spinner-wrap {
  display: block;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);

  .spinner {
    top: 50%;
    left: 50%;
  }

}

.scrollable-p {
  max-height: 500px;
  overflow: auto;
}
</style>