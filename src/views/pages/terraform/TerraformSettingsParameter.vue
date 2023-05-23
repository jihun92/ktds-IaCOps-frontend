<script setup>
import ParameterWebEdit from './ParameterWebEdit.vue'

const props = defineProps({
  data: {
    type: null,
    required: true,
  },
})


// 👉 Add item function
const addItem = () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingConfig.push({
    name: 'Web Server -1',
    image: 'Webserver-centos7-230518',
    type: 'T2.micro',
  })
}

const removeProduct = id => {

  // eslint-disable-next-line vue/no-mutating-props
  props.data.settingConfig.splice(id, 1)
}

</script>

<template>
  <VForm @submit.prevent="() => { }">

    <!-- 👉 web 선택 -->
    <VCol cols="12">
      <VCard title="WEB 서버">
        <!-- 👉 Add  -->
        <VCardText class="add-products-form">
          <div v-for="(product, index) in props.data.settingConfig" class="mb-4">
            <ParameterWebEdit :id="index" :data="product" @remove-product="removeProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addItem">
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
          <div v-for="(product, index) in props.data.settingConfig" class="mb-4">
            <ParameterWebEdit :id="index" :data="product" @remove-product="removeProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addItem">
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
          <div v-for="(product, index) in props.data.settingConfig" class="mb-4">
            <ParameterWebEdit :id="index" :data="product" @remove-product="removeProduct" />
          </div>

          <VBtn size="small" prepend-icon="mdi-plus" @click="addItem">
            Add
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Actions Button -->
    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="nextTab" type="submit">
        Plan
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
