<script setup>
import { storeToRefs } from 'pinia';
import { useActionStore } from './useActionStore'
import { useAnsibleStore } from '@/views/pages/infrachange/ansible/useAnsibleStore'
const ActionStore = useActionStore()
const AnsibleStore = useAnsibleStore()
const inventoryOptions = ref([])
//const { runResults } = storeToRefs(ActionStore)
const actionList = ['재기동', '점검']
const selectedInventory = ref('')
const selectedAction = ref('')
const runResults = ref('')
const isLoading = ref(false);
const isDialogVisible = ref(false)


const getInventories = () => {
  AnsibleStore.getInventories({
  }).then(response => {
    Object.keys(response.data).forEach(function (key) {
      let data = response.data[key];
      if (data.id.startsWith('i-')) {
        let inventoryItem = `${data.id}, ${data.ip}, ${data.hostname}`;
        inventoryOptions.value.push(inventoryItem);
      }
    });

  }).catch(error => {
    console.error(error)
  })
}

onMounted(() => {
  getInventories();
});


const submitRun = () => {
  isLoading.value = true;
  const selected = selectedInventory.value.split(',')
  const data = {
    ip: selected[1].trim(),
    action: "reboot",

  }

  const jsonData = JSON.stringify(data)
  console.log(jsonData)
  ActionStore.postAction(jsonData)
    .then((res) => {
      runResults.value = res.data
      //console.log(runResults);
      isLoading.value = false;
      isDialogVisible.value = true;

    }).catch(error => {
      console.error(error)
    });


}

const goMain = () => {
  window.location.href = '/';
}




</script>

<template>
  <VForm @submit.prevent="" method="post">
    <VCol cols="12">
      <VCard title="인벤토리 선택">
        <VCardText>
          <VRow>
            <VCol cols="12" md="4">
              <VSelect label="인벤토리 선택" :items="inventoryOptions" v-model="selectedInventory" />
            </VCol>

            <VCol md="4" cols="4">
              <VSelect id="sublist" label=" action 선택" :items="actionList" v-model="selectedAction" />
            </VCol>
            <VCol md="4" cols="4">
              <VBtn @click="submitRun" type="submit">
                ACTION 수행
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="RUN 결과">
        <VCardText class="scrollable-p">
          <p v-for="d in runResults">
            <span>{{ d }}</span>
          </p>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="goMain">
        메인화면으로 돌아가기
      </VBtn>
    </VCol>
  </VForm>
  <VDialog v-model="isDialogVisible" width="500">
      <!-- Activator -->
      <template v-if="shouldShowDialog" #activator>
      </template>

      <!-- Dialog Content -->
      <VCard title="Success Message">
        <VCardText>
          재기동이 정상적으로 완료되었습니다. 아래 결과 로그를 통해 확인하세요.
        </VCardText>

        <VCardActions>
          <VSpacer />
          <VBtn @click="isDialogVisible = false;">
            confirm
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
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