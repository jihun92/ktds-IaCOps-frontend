<script setup>
import ParameterSWEdit from './ParameterSWEdit.vue'
import ParameterOSEdit from './ParameterOSEdit.vue'
import { onMounted } from 'vue';
import { useAnsibleStore } from './useAnsibleStore'
import { useProjectStore } from '@/views/pages/project/useProjectStore'
const ProjectStore = useProjectStore()


const AnsibleStore = useAnsibleStore()
const inventoryOptions = ref([])
const selectedInventory = ref('')
const configApplyStatus = ref('')
const isSuccessDialogVisible = ref(false)
const isFailDialogVisible = ref(false)
const buttonDisabled = ref(false)
const dryButton = ref(false)
const isLoading = ref(false);
const ansibleResults = ref({})
const ddselectedSwMain = ref({})


const { configId, dryResults } = storeToRefs(AnsibleStore)
const instance = getCurrentInstance();
const props = defineProps({
  data: {
    type: null,
    required: true,
  },
})

const getAnsibleFile = () => {
  const selected = selectedInventory.value.split(',');
  const id = selected[0];
  ProjectStore.getAnsibleFile(id)
    .then(response => {
      props.data.settingSW = []
      props.data.settingOS = []

      ansibleResults.value = response.data;
      const { sw, os } = ansibleResults.value;
      for (const key in sw) {
        if (Object.hasOwnProperty.call(sw, key)) {
          const subObject = sw[key];
          for (const subkey in subObject) {
            if (Object.hasOwnProperty.call(subObject, subkey)) {
              const s = subObject[subkey];
              const { version, state, install } = s;
              props.data.settingSW.push({
                selectedSwMain: key,
                selectedSwSub: subkey,
                selectedVersion: version,
                selectedState: state,
                selectedInstall: install,
              });
            }

          }
        }
      }
      for (const key in os) {
        if (Object.hasOwnProperty.call(os, key)) {
          const subObject = os[key];
          console.log(key) // keylist
          console.log(subObject)
          const { tcp_mem_min, tcp_mem_pressure, tcp_mem_max } = subObject;
          props.data.settingOS.push({
            keyMain: key,
            keySub1: "tcp_mem_min",
            keySub2: "tcp_mem_pressure",
            keySub3: "tcp_mem_max",
            value1: tcp_mem_min,
            value2: tcp_mem_pressure,
            value3: tcp_mem_max,
          })

        }
      }
      // console.log(os);
    })
    .catch(error => {
      console.error(error);
    });
};

watch(selectedInventory, (newVal, oldVal) => {
  getAnsibleFile();
});

const getInventories = () => {
  AnsibleStore.getInventories({
  }).then(response => {
    //console.log(response.data)
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


// 👉 Add SW item function
const addSWItem = () => {
  props.data.settingSW.push({
    selectedSwMain: '',
    selectedSwSub: '',
    selectedVersion: '',
    selectedState: '',
    selectedInstall: '',
  });
};

// add os item function
const addOSItem = () => {

  props.data.settingOS.push({
    keyMain: '',
    keySubList: '',
    keySub1: "tcp_mem_min",
    keySub2: "tcp_mem_pressure",
    keySub3: "tcp_mem_max",
  })
}
const removeOSProduct = id => {

  props.data.settingOS.splice(id, 1)
}
const removeSWProduct = id => {

  props.data.settingSW.splice(id, 1)
}

const configApply = () => {
  const selected = selectedInventory.value.split(',')
  const id = selected[0]
  configId.value = id


  const swData = {};
  props.data.settingSW.forEach(product => {
    const { selectedSwMain, selectedSwSub, selectedVersion, selectedState, selectedInstall } = product;

    if (!swData[selectedSwMain]) {
      swData[selectedSwMain] = {};
    }

    swData[selectedSwMain][selectedSwSub] = {
      version: selectedVersion,
      state: selectedState,
      install: selectedInstall === 'true' || selectedInstall === true ? true : false
    };
  });


  const osData = {};
  props.data.settingOS.forEach(product => {
    const { keyMain } = product;
    const subData = {};

    Object.keys(product).forEach(key => {
      if (key.startsWith("keySub")) {
        const index = key.slice(6); // "keySub" 다음의 인덱스 추출
        const valueKey = `value${index}`;
        if (valueKey in product) {
          const keySub = product[key];
          const value = product[valueKey];
          subData[keySub] = value;
        }
      }
    });

    osData[keyMain] = subData;
  });


  const data = {
    id: selected[0],
    ip: selected[1].trim(),
    hostname: selected[2].trim(),
    sw: swData,
    os: osData,

  }

  const jsonData = JSON.stringify(data)
  console.log(jsonData)

  AnsibleStore.configApplyData(jsonData, id)
    .then((status) => {
      configApplyStatus.value = status
      console.log(configApplyStatus);
      if (configApplyStatus.value == 200) {
        isSuccessDialogVisible.value = true;
        buttonDisabled.value = true;
        dryButton.value = true;

      }
      else if (configApplyStatus.value != 200) {
        isFailDialogVisible.value = true;
      }
    }).catch(error => {
      console.error(error)
    });

};

const submitDry = () => {
  isLoading.value = true;
  AnsibleStore.postDryRun(configId.value).then(response => {
    dryResults.value = response.data
    //console.log(dryResults.value)
    instance.emit('clickNextTab'); // 다음 탭으로 이동하는 이벤트 발생
    isLoading.value = false;
  }).catch(error => {
    console.error(error)
  })
}


</script>

<template>
  <VForm @submit.prevent="() => { }">
    <VCol cols="12">
      <VCard title="인벤토리 선택">
        <VCardText>
          <VRow>
            <VCol cols="12" md="6">
              <VSelect label="인벤토리 선택" :items="inventoryOptions" v-model="selectedInventory" @change="getAnsibleFile" />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="SW 업데이트">
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingSW" class="mb-4">
            <ParameterSWEdit :id="index" :data="product" @remove-product="removeSWProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addSWItem">
            Add
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="OS 변경">
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingOS" class="mb-4">
            <ParameterOSEdit :id="index" :data="product" @remove-product="removeOSProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addOSItem">
            Add
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn :disabled="buttonDisabled" @click="configApply" type="submit">
        형상 적용
      </VBtn>
      <VBtn v-if="dryButton" @click="submitDry" type="submit">
        DryRun
      </VBtn>
      <VBtn :disabled="buttonDisabled" type="reset" color="error" variant="tonal">
        Reset
      </VBtn>
    </VCol>
  </VForm>
  <VDialog v-model="isSuccessDialogVisible" width="500">
    <!-- Activator -->
    <template v-if="applySuccessDialog" #activator>
    </template>

    <!-- Dialog Content -->
    <VCard title="Success Message">
      <VCardText>
        형상 적용이 정상적으로 완료되었습니다. DRYRUN버튼을 눌러 계속 진행하세요.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isSuccessDialogVisible = false">
          confirm
        </VBtn>
      </VCardActions>
    </VCard>

  </VDialog>
  <VDialog v-model="isFailDialogVisible" width="500">
    <!-- Activator -->
    <template v-if="applyFailDialog" #activator>
    </template>

    <!-- Dialog Content -->
    <VCard title="Fail Message">
      <VCardText>
        형상 적용이 실패되었습니다.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isFailDialogVisible = false">
          confirm
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
  <div class="spinner-wrap" v-if="isLoading">
    <VProgressCircular class="spinner" :size="70" :width="7" color="primary" indeterminate />
  </div>
</template>

<script>
export default {
  computed: {
    applySuccessDialog() {
      return this.isSuccessDialogVisible && this.configApplyStatus === 200;
    },
    applyFailDialog() {
      return this.isFailDialogVisible && this.configApplyStatus !== 200;
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
</style>