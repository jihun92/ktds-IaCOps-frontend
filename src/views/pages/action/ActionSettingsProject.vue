
<template>
    <VRow>
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




