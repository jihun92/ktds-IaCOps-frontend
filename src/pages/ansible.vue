<script setup>
const projectList = [
  'Demo Project',
  'ABC Project',
]
</script>
<template>
  <div>
    <VCard title="Create Awesome 🙌">
      <VCardText>This is your ansible page.</VCardText>
      <VCardText>
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
        wafer tart marzipan bonbon. Gingerbread jelly-o dragée
        chocolate.
      </VCardText>
    </VCard>
  </div>
  <VCol cols="12">
      <VCard title="프로젝트 선택">
        <VCardText>
          <VRow>
            <VCol cols="12" md="6">
              <VSelect label="프로젝트 선택" :items="projectList" />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
</template>
