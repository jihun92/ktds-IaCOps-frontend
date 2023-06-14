<script setup>
const isDialogVisible = ref(false)
const showDiagram = () => {
  isDialogVisible.value = true;

}
</script>
<template>
  <VRow>
    <VCol cols="6" md="6" lg="4">
      <VCard class="text-center" @click="nextTab">
        <div style="display: flex; justify-content: space-between;">
          <h2 class="title" style="display: inline;"> AWS </h2>
          <VBtn @click.stop="showDiagram"  variant="text" color="info" style="display: inline;">
            다이어그램 보기
          </VBtn>
        </div>

        <VCardText class="d-flex flex-column justify-center align-center" style="height: 280px" >
          <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
            <VIcon size="2rem" icon="mdi-account-box-outline" />
          </VAvatar>
          Web Service
          <h6 class="text-h6">2-Tier Monolithic Architecture </h6><br>
          - WEB/WAS Tier : Multi EC2(With ALB) <br>
          - DB Server : Single EC2
        </VCardText>
      </VCard>
    </VCol>
  

    <VCol cols="6" md="6" lg="4">
      <VCard class="text-center" @click="nextTab">
        <div style="display: flex; justify-content: space-between;">
          <h2 class="title" style="display: inline;"> AWS </h2>
          <VBtn @click.stop="showDiagram" variant="text" color="info" style="display: inline;">
            다이어그램 보기
          </VBtn>
        </div>
        <VCardText class="d-flex flex-column justify-center align-center" style="height: 280px">
          <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
            <VIcon size="2rem" icon="mdi-account-box-outline" />
          </VAvatar>
          Web Service
          <h6 class="text-h6">3-Tier Monolithic Architecture </h6><br>
          - WEB Tier : Multi EC2 (With ALB) <br>
          - WAS Server : Single EC2<br>
          - DB Server : Single EC2
        </VCardText>
      </VCard>
    </VCol>


    <VCol cols="6" md="6" lg="4">
      <VCard class="text-center" @click="nextTab">
        <div style="display: flex; justify-content: space-between;">
          <h2 class="title" style="display: inline;"> AWS </h2>
          <VBtn @click.stop="showDiagram" variant="text" color="info" style="display: inline;">
            다이어그램 보기
          </VBtn>
        </div>

        <VCardText class="d-flex flex-column justify-center align-center" style="height: 280px">
          <VAvatar color="primary" variant="tonal" size="56" class="mb-4">
            <VIcon size="2rem" icon="mdi-account-box-outline" />
          </VAvatar>
          Web Service
          <h6 class="text-h6">3-Tier Monolithic Architecture<br>(Auto Scaler)</h6><br>
          - WEB Tier : Auto Scaling Group EC2 (With ALB)<br>
          - WAS Server : Auto Scaling Group EC2 (With ALB)<br>
          - DB Server : Amazon RDS
        </VCardText>
      </VCard>
    </VCol>

  </VRow>
  <VDialog v-model="isDialogVisible" width="700">
    <!-- Activator -->
    <template v-if="applySuccessDialog" #activator>
    </template>

    <!-- Dialog Content -->
    <VCard title="Diagram">
      <VCardText>
        <img src="/src/assets/images/diagram.png" alt="SVG 이미지" style="max-width: 100%; max-height: 100%;">
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          close
        </VBtn>
      </VCardActions>
    </VCard>

  </VDialog>
</template>

<script>
export default {
  methods: {
    nextTab() {
      this.$emit('clickNextTab');
    }
  },
  computed: {
    applySuccessDialog() {
      return this.isDialogVisible;
    },
  },
}

</script>


<style lang="scss">

.title {
  margin-top: 5px;
  margin-left: 10px;
  color: orange;
}
</style>
