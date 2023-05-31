<script setup>
import { reactive } from 'vue';
import { useTerraformStore } from './useTerraformStore'
import ParameterWebEdit from './ParameterWebEdit.vue';
import ParameterWasEdit from './ParameterWasEdit.vue';
import ParameterDBEdit from './ParameterDBEdit.vue';
const results = ref([])
const instance = getCurrentInstance();
const isLoading = ref(false);

const props = defineProps({
  data: {
    type: null,
    required: true,
  },
})

const TerraformStore = useTerraformStore()

const postPlan = async () => {
  try {
    const response = await TerraformStore.postPlan({});
    results.value = response.data;
    // 결과값을 이벤트를 통해 전달
  } catch (error) {
    console.error(error);
  }
}

const submitPlan = async () => {
  try {
    // 로딩 화면 표시
    isLoading.value = true;
    await postPlan() // postPlan 함수 호출

    instance.emit('clickNextTab'); // 다음 탭으로 이동하는 이벤트 발생
    instance.emit('plan-results', results.value); // plan-results 값을 전달

    // 로딩 화면 숨김
    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
}

// 👉 Add webitem function
const addWebItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingWeb.push({
    name: 'Web Server -1',
    image: 'Webserver-centos7-230518',
    type: 'T2.micro',
  })
}

// 👉 Add webitem function
const addWasItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingWas.push({
    name: 'Was Server -1',
    image: 'Wasserver-centos7-230519',
    type: 'T2.micro',
  })
}

// 👉 Add webitem function
const addDBItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingDB.push({
    name: 'DB Server -1',
    image: 'DBserver-centos7-230520',
    type: 'T2.micro',
  })
}

const removeWebProduct = id => {

  props.data.settingWeb.splice(id, 1)
}

const removeWasProduct = id => {

  props.data.settingWas.splice(id, 1)
}
const removeDBProduct = id => {

  props.data.settingDB.splice(id, 1)
}


</script>

<template>
  <VForm @submit.prevent="" method="post">

    <!-- 👉 web 선택 -->
    <VCol cols="12">
      <VCard title="WEB 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingWeb" class="mb-4">
            <ParameterWebEdit :id="index" :data="product" @remove-product="removeWebProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addWebItem">
            Add
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 was 선택 -->
    <VCol cols="12">
      <VCard title="WAS 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingWas" class="mb-4">
            <ParameterWasEdit :id="index" :data="product" @remove-product="removeWasProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addWasItem">
            Add
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 db 선택 -->
    <VCol cols="12">
      <VCard title="DB 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingDB" class="mb-4">
            <ParameterDBEdit :id="index" :data="product" @remove-product="removeDBProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addDBItem">
            Add
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="submitPlan" type="submit">
        Plan
      </VBtn>
      <VBtn  type="reset" color="error" variant="tonal">
        Reset
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

</style>