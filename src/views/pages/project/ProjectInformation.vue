<script setup>

import { useProjectStore } from './useProjectStore'
import { useAnsibleStore } from '@/views/pages/infrachange/ansible/useAnsibleStore'

const AnsibleStore = useAnsibleStore()

const ProjectStore = useProjectStore()
const tfstateResults = ref([])
const ansibleResults = ref({})
const inventoryOptions = ref([])
const selectedInventory = ref('')


const getInventories = () => {
    AnsibleStore.getInventories({
    }).then(response => {
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

const getTerraformStatusFile = () => {
    ProjectStore.getTerraformStatusFile({
    }).then(response => {
        tfstateResults.value = response.data

    }).catch(error => {
        console.error(error)
    })
}


const getAnsibleFile = () => {
    const selected = selectedInventory.value.split(',')
    const id = selected[0]
    //console.log(id)

    ProjectStore.getAnsibleFile(id)
        .then(response => {
            ansibleResults.value = response.data
        })
        .catch(error => {
            console.error(error)
        })
}

onMounted(() => {
    getTerraformStatusFile();
    getInventories();
});
watch(selectedInventory, (newVal, oldVal) => {
    getAnsibleFile();
});
</script>

<template>
    <VCol cols="12">
        <div class="d-flex flex-wrap gap-4">
            <VBtn @click="submitGit"> 정보 현행화하기
            </VBtn>
        </div>
    </VCol>
    <VCol cols="12">
        <VCard title="프로비저닝  그래프">
            <VCardText>
                <img src="/src/assets/images/diagrams.png" alt="SVG 이미지" style="max-width: 100%; max-height: 100%;">
            </VCardText>
        </VCard>
    </VCol>

    <VRow>
        <VCol cols="6">
            <VCard title="프로비저닝 정보">

                <VCardText class="scrollable-p">

                    <p v-for="d in tfstateResults">
                        <span>{{ d }}</span>
                    </p>
                </VCardText>
            </VCard>
        </VCol>
        <VCol cols="6">
            <VCard title="형상 정보">
                <VCardText>
                    <VSelect label="인벤토리 선택" :items="inventoryOptions" v-model="selectedInventory"
                        @change="getAnsibleFile" /><br>
                    <template v-for="(result, name) in ansibleResults">
                        <template v-if="name === 'os' || name === 'sw'">
                            <p>
                            <h2 style="font-weight:bold;color:blue"> {{ name }} 정보</h2>
                            <span v-if="typeof result === 'object'">
                                <template v-for="(value, key) in result">
                                    <h2 style="font-weight:bold;color:red">{{ key }} </h2><br>
                                    <template v-if="typeof value === 'object'">
                                        <template v-for="(innerValue, innerKey) in value">
                                            <VCard>
                                                <VCardText>

                                                    <h3> [{{ innerKey }}]</h3>
                                                    <span v-if="typeof innerValue === 'object'">
                                                        <template v-for="(finalValue, finalKey) in innerValue">
                                                            <span>{{ finalKey }}: {{ finalValue }}</span><br>
                                                        </template>
                                                    </span>
                                                    <span v-else>{{ innerKey }}: {{ innerValue }}</span><br>
                                                </VCardText>
                                            </VCard><br>

                                        </template>

                                    </template>
                                    <span v-else>{{ key }}: {{ value }}</span><br>
                                </template>
                            </span>
                            <span v-else>{{ result }}</span>
                            </p>
                        </template>
                    </template>
                </VCardText>


            </VCard>
        </VCol>
    </VRow>
</template>
<style lang="scss">
.scrollable-p {
    max-height: 500px;
    overflow: auto;
}
</style>