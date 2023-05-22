<script setup>
import avatar1 from '@images/avatars/avatar-1.png'


// 👉 Add item function
const addItem = () => {

// eslint-disable-next-line vue/no-mutating-props
props.data.purchasedProducts.push({
  title: 'App Design',
  cost: 24,
  hours: 1,
  description: 'Designed UI kit & app pages.',
})
}

const projectList = [
  'Demo Project',
  'ABC Project',
]
</script>

<template>
  <!-- 👉 프로젝트 선택 -->
  <VForm @submit.prevent="() => {}">
    <VCol cols="12">
      <VCard title="프로젝트 선택">
        <VCardText>
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  label="프로젝트 선택"
                  :items="projectList"
                />
              </VCol>
            </VRow>
        </VCardText>
      </VCard>
    </VCol>

      <!-- 👉 web 선택 -->
      <VCol cols="12">
      <VCard title="WEB 서버">
        <VCardText>
            <VRow>
                    <VBtn
                    size="small"
                    prepend-icon="mdi-plus"
                    @click="addItem"
                    >
                    
                  </VBtn>
            </VRow>
        </VCardText>
      </VCard>
    </VCol>
          <!-- 👉 was 선택 -->
          <VCol cols="12">
      <VCard title="WAS 서버">
        <VCardText>
            <VRow>
                    <VBtn
                    size="small"
                    prepend-icon="mdi-plus"
                    @click="addItem"
                    >
                    
                  </VBtn>
            </VRow>
        </VCardText>
      </VCard>
    </VCol>

              <!-- 👉 Actions Button -->
      <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn @click="nextTab" type="submit">
                  Plan
                </VBtn>
                <VBtn
                  type="reset"
                  color="secondary"
                  variant="tonal"
                >
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
