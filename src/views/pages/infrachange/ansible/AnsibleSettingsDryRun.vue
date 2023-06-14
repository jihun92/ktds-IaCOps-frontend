
<script setup>
import { useAnsibleStore } from './useAnsibleStore'
const AnsibleStore = useAnsibleStore()
const { configId, dryResults, runResults } = storeToRefs(AnsibleStore)
const instance = getCurrentInstance();
const isLoading = ref(false);


const submitRun = () => {
  //console.log(configId.value);
  isLoading.value = true;
  AnsibleStore.postRun(configId.value).then(response => {
    runResults.value = response.data
    //console.log(runResults.value)
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
  <VForm @submit.prevent="() => { }">

    <VCol cols="12">
      <VCard title="DRYRUN 결과">
        <VCardText class="scrollable-p">
          <p v-for="(result, name) in dryResults">
            <span style="font-weight:bold;color:blue"> {{ name }}  </span>
            <p v-for= "re in result"> 
              <span>{{  re  }} </span>
            </p>
          </p>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="submitRun" type="submit">
        RUN
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
</style>x
