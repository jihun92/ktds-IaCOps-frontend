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
    name: '',
    os: '',
    version: '',
    type: '',
    zone: '',
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

<script>
export default {
  methods:{
    propertyChange(id){
      console.log(id);
      this.$refs.webProperty.$el.style.display = "none";
      this.$refs.wasProperty.$el.style.display = "none";
      this.$refs.dbProperty.$el.style.display = "none";
      if(id.indexOf("WebServer")>-1 || id.indexOf("ec2")>-1){
        this.$refs.webProperty.$el.style.display = "block";
      }else if(id.indexOf("WasServer")>-1){
        this.$refs.wasProperty.$el.style.display = "block";
      }else if(id.indexOf("DbServer")>-1 || id.indexOf("rds")>-1 ){
        this.$refs.dbProperty.$el.style.display = "block";
      }
    }
  }
}

</script>

<template>
  <VForm @submit.prevent="" method="post">

    <TerraformDiagram @child="propertyChange"></TerraformDiagram>

    <!-- 👉 web 선택 -->
    <VCol cols="12" v-show="false" ref="webProperty">
      <VCard title="WEB 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingWeb" class="mb-4">
            <ParameterWebEdit :id="index" :data="product" @remove-product="removeWebProduct" />
          </div>

<!--          <VBtn size="small" prepend-icon="mdi-plus" @click="addWebItem">
            Add
          </VBtn>-->
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 was 선택 -->
    <VCol cols="12" v-show="false" ref="wasProperty">
      <VCard title="WAS 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingWas" class="mb-4">
            <ParameterWasEdit :id="index" :data="product" @remove-product="removeWasProduct" />
          </div>

<!--          <VBtn size="small" prepend-icon="mdi-plus" @click="addWasItem">
            Add
          </VBtn>-->
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 db 선택 -->
    <VCol cols="12" v-show="false" ref="dbProperty">
      <VCard title="DB 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingDB" class="mb-4">
            <ParameterDBEdit :id="index" :data="product" @remove-product="removeDBProduct" />
          </div>

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