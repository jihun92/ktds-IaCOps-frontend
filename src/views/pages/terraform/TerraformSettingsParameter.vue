<script setup>
import { useTerraformStore } from './useTerraformStore'
import ParameterWebEdit from './ParameterWebEdit.vue';
import ParameterWasEdit from './ParameterWasEdit.vue';
import ParameterDBEdit from './ParameterDBEdit.vue';
import TerraformDiagram from "@/views/pages/terraform/TerraformDiagram.vue";
//const results = ref([])
const instance = getCurrentInstance();
const isLoading = ref(false);

const props = defineProps({
  data: {
    type: null,
    required: true,
  },
})

const webShow = ref(false);
const wasShow = ref(false);
const dbShow = ref(false);

const TerraformStore = useTerraformStore()
const { planResults } = storeToRefs(TerraformStore)


const submitPlan =  () => {
  isLoading.value = true;
  TerraformStore.postPlan()
    .then((response) => {
      planResults.value = response.data
      instance.emit('clickNextTab'); // 다음 탭으로 이동하는 이벤트 발생
      isLoading.value = false;
    }).catch(error => {
    console.error(error)
  })
}


// 👉 Add webitem function
const addWebItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingWeb.push({
    name: 'WEB-SEVER1',
    os: 'centOS',
    version: '7.9',
    type: '',
    zone: '',
    id: ''
  })
}

// 👉 Add webitem function
const addWasItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingWas.push({
    name: '',
    os: '',
    version: '',
    type: '',
    zone: '',
    id: ''
  })
}

// 👉 Add webitem function
const addDBItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingDB.push({
    name: '',
    os: '',
    version: '',
    type: '',
    zone: '',
    engine: '',
    dbversion: '',
    id: ''
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


const saveWebItem = () => {
  sessionStorage.setItem(props.data.settingWeb[0].id, JSON.stringify(props.data.settingWeb[0]));
}

const saveWasItem = () => {
  sessionStorage.setItem(props.data.settingWas[0].id, JSON.stringify(props.data.settingWas[0]));
}

const saveDBItem = () => {
  sessionStorage.setItem(props.data.settingDB[0].id, JSON.stringify(props.data.settingDB[0]));
}

const sessionStorage = window.sessionStorage;

const propertySelect = id => {
  webShow.value = false;
  wasShow.value = false;
  dbShow.value = false;
  removeWebProduct(0);
  removeWasProduct(0);
  removeDBProduct(0);
  if(id!==undefined){
    if(id.indexOf("WebServer") > -1 || id.indexOf("ec2") > -1){
      if(sessionStorage.getItem(id)){
        props.data.settingWeb.push(JSON.parse(sessionStorage.getItem(id)));
      }else{
        props.data.settingWeb.push({
          name: '',
          os: '',
          version: '',
          type: '',
          zone: '',
          id: id
        });
      }
      webShow.value = true;
    }else if(id.indexOf("WasServer")>-1){
      if(sessionStorage.getItem(id)){
        props.data.settingWas.push(JSON.parse(sessionStorage.getItem(id)));
      }else{
        props.data.settingWas.push({
          name: '',
          os: '',
          version: '',
          type: '',
          zone: '',
          id: id
        })
      }
      wasShow.value = true;
    }else if(id.indexOf("DbServer")>-1 || id.indexOf("rds")>-1){
      if(sessionStorage.getItem(id)){
        props.data.settingDB.push(JSON.parse(sessionStorage.getItem(id)));
      }else {
        props.data.settingDB.push({
          name: '',
          os: '',
          version: '',
          type: '',
          zone: '',
          engine: '',
          dbversion: '',
          id: id
        })
      }
      dbShow.value = true;
    }
  }

}
</script>

<template>
  <VForm @submit.prevent="" method="post">

    <TerraformDiagram @propertySelect="propertySelect"></TerraformDiagram>

    <!-- 👉 web 선택 -->
    <VCol cols="12" v-show="webShow">
      <VCard title="Property">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingWeb" class="mb-4">
            <ParameterWebEdit :id="index" :data="product" @remove-product="removeWebProduct" />
          </div>
          <VBtn size="small" @click="saveWebItem">
            SAVE
          </VBtn>
<!--          <VBtn size="small" prepend-icon="mdi-plus" @click="addWebItem">
            Add
          </VBtn>-->
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 was 선택 -->
    <VCol cols="12" v-show="wasShow">
      <VCard title="Property">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingWas" class="mb-4">
            <ParameterWasEdit :id="index" :data="product" @remove-product="removeWasProduct" />
          </div>
          <VBtn size="small" @click="saveWasItem">
            SAVE
          </VBtn>
<!--          <VBtn size="small" prepend-icon="mdi-plus" @click="addWasItem">
            Add
          </VBtn>-->
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 db 선택 -->
    <VCol cols="12" v-show="dbShow">
      <VCard title="Property">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingDB" class="mb-4">
            <ParameterDBEdit :id="index" :data="product" @remove-product="removeDBProduct" />
          </div>
          <VBtn size="small" @click="saveDBItem">
            SAVE
          </VBtn>
<!--          <VBtn size="small" prepend-icon="mdi-plus" @click="addDBItem">
            Add
          </VBtn>-->
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="submitPlan" type="submit">
        Plan
      </VBtn>
      <VBtn type="reset" color="error" variant="tonal">
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