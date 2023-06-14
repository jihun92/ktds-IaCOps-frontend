<script setup>
import { useGitStore } from '@/views/git/useGitStore'
import { useTerraformStore } from './useTerraformStore'
const isLoading = ref(false);
const isDialogVisible = ref(false)
const instance = getCurrentInstance();
const commitCode = ref(0);
const TerraformStore = useTerraformStore()
const GitStore = useGitStore()
const { applyResults } = storeToRefs(TerraformStore)
const { addResults, commitResults, pushResults } = storeToRefs(GitStore)

const postAdd = async () => {
  try {
    const response = await GitStore.postAdd({});
    addResults.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

const postCommit = async (commitMsg) => {
  try {
    const response = await GitStore.postCommit(commitMsg);
    commitResults.value = response.data;
    commitCode.value = response.status;
  } catch (error) {
    console.error(error);
  }
}

const postPush = async () => {
  try {
    const response = await GitStore.postPush({});
    pushResults.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
const submitGit = async () => {
  try {
    isLoading.value = true;
    await postAdd();
    //console.log(addResults.value);
    // 5초 대기
    await new Promise((resolve) => {
      setTimeout(resolve, 5000); // 5초 (5000 밀리초) 대기 후 resolve 호출
    });
    await postCommit('Commit message test');
    //console.log(commitResults.value);
    // 3초 대기
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    //console.log(isDialogVisible.value);
    //console.log(commitCode.value);
    await postPush(); 
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    isLoading.value = false;
    isDialogVisible.value = true;

  } catch (error) {
    console.error(error);
  }
}

const nextTab = () => {
  instance.emit('clickNextTab'); // 다음 탭으로 이동하는 이벤트 발생
}

</script>
<template>
  <VForm @submit.prevent="() => { }">

    <VCol cols="12">
      <VCard title="APPLY 그래프">
        <VCardText>
          <img src="/src/assets/images/graph.svg" alt="SVG 이미지" style="max-width: 100%; max-height: 100%;">
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="APPLY 결과">
        <VCardText class="scrollable-p">
          <p v-for="d in applyResults">
            <span>{{ d }}</span>
          </p>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="submitGit" type="submit">
        결과 저장
      </VBtn>
    </VCol>
    <VDialog v-model="isDialogVisible" width="500">
      <!-- Activator -->
      <template v-if="shouldShowDialog" #activator>
      </template>

      <!-- Dialog Content -->
      <VCard title="Success Message">
        <VCardText>
          결과 저장이 정상적으로 완료되었습니다.
        </VCardText>

        <VCardActions>
          <VSpacer />
          <VBtn @click="isDialogVisible = false; nextTab()">
            confirm
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VForm>
  <!-- 결과값을 팝업창으로 표시 -->
  <VSnackbar v-model="addResults"  :timeout="3000"> {{ addResults }} </VSnackbar>
  <VSnackbar v-model="commitResults"  :timeout="3000"> {{ commitResults }} </VSnackbar>
  <VSnackbar v-model="pushResults"  :timeout="3000"> {{ pushResults }} </VSnackbar>
  <div class="spinner-wrap" v-if="isLoading">
    <VProgressCircular class="spinner" :size="70" :width="7" color="primary" indeterminate />
  </div>
</template>
<script>
export default {
  computed: {
  shouldShowDialog() {
    return this.isDialogVisible && this.commitCode === 200;
  }
},
}
</script>

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
