<script setup>
import ParameterSWEdit from './ParameterSWEdit.vue'
import ParameterOSEdit from './ParameterOSEdit.vue'
import { useAnsibleStore } from './useAnsibleStore'
import { onMounted } from 'vue';
const results = ref([])
const selectedInventory = ref(null)
const inventoryOptions = ref([])

const props = defineProps({
  data: {
    type: null,
    required: true,
  },
})

const AnsibleStore = useAnsibleStore()

const getInventories = () => {
  AnsibleStore.getInventories({
  }).then(response => {
    results.value = response.data
    Object.keys(response.data).forEach(function (key) {
      let data = response.data[key]
      inventoryOptions.value.push(`${data.id}, ${data.ip}, ${data.hostname}`);
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
    swMainList: '',
    List: '',
  })
}

// add os item function
const addOSItem = () => {

  props.data.settingOS.push({
    key: '',
    value: '',
  })
}
const removeOSProduct = id => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingOS.splice(id, 1)
}
const removeSWProduct = id => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingSW.splice(id, 1)
}

</script>

<template>
  <VForm @submit.prevent="() => { }">
    <VCol cols="12">
      <VCard title="인벤토리 선택">
        <VCardText>
          <VRow>
            <VCol cols="12" md="6">
              <!-- p v-for="result in results"> {{ result.id }}, {{ result.ip }}, {{ result.hostname }} </p> -->
              <VSelect label="인벤토리 선택" :items="inventoryOptions" v-model="selectedInventory" />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="SW 선택">
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
      <VBtn @click="nextTab" type="submit">
        형상 적용
      </VBtn>
      <VBtn @click="nextTab" type="submit">
        Dry
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
