<script setup>
//import { useProjectListStore } from './useProjectListStore'
//import { ref, onMounted } from 'vue';

//const projectListStore = useProjectListStore()
//const projects = ref([])

/*
const fetchProjects = () => {
  projectListStore.fetchProjects().then(response => {
    projects.value = response.data.projects
  }).catch(error => {
    console.error(error)
  })
}

onMounted(fetchProjects)
*/
</script>
<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
      lg="4"
    >
      <VCard>
  
            <VBtn
            prepend-icon="mdi-plus"
            class="me-5" style="width: 56px; height: 185px;"
              block>
              <h6 class="text-h6" style="color: white;">New Project</h6>
            </VBtn>
      
      </VCard>
          
    </VCol>
    <VCol md="6" lg="4">
            <VCard class="text-center" @click="nextTab">

                <VCardText class="d-flex flex-column justify-center align-center">
                    <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
                        <VIcon size="2rem" icon="mdi-cloud-check-outline" />
                    </VAvatar>

                    인프라DX개발팀

                </VCardText>

                <VCardText>
                    <h6 class="text-h6">IaCOps 프로젝트</h6>

                </VCardText>
            </VCard>
        </VCol>
        <VCol md="6" lg="4">
            <VCard class="text-center" @click="nextTab">

                <VCardText class="d-flex flex-column justify-center align-center">
                    <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
                        <VIcon size="2rem" icon="mdi-cloud-check-outline" />
                    </VAvatar>

                    인프라DX개발팀

                </VCardText>

                <VCardText>
                    <h6 class="text-h6">전사 보안형상수집 프로젝트</h6>
                </VCardText>
            </VCard>
        </VCol>
  </VRow>



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



