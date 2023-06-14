<script setup>
import { storeToRefs } from 'pinia'
import { useAnsibleStore } from './useAnsibleStore'
const AnsibleStore = useAnsibleStore()

const { swMainList, swSubList, state, install, version } = storeToRefs(AnsibleStore)

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }, 
    data: {
        type: String,
        required: true,
    },
})


const updateList = () => {
    switch (props.data.selectedSwMain) {
        case 'mw':
            swSubList.value = ['tomcat', 'apache', 'nginx','zabbix']
            break
        case 'db':
            swSubList.value = ['postgreSQL', 'mysql']
            break
        default:
            swSubList.value = [];
            break
    }
}

watch(() => props.data.selectedSwMain, updateList);

updateList() 
const emit = defineEmits([
    'removeProduct',
])


const removeProduct = () => {
    emit('removeProduct', props.id)
}
</script>

<template>
    <VCard flat border class="d-flex flex-sm-row flex-column-reverse">
        <!-- 👉 Left Form -->
        <div class="pa-5 flex-grow-1">
            <VRow>
                <VCol md="6" cols="12">
                    <VCardText>
                        <VRow>
                            <VCol>
                                <VSelect id="mainlist" label="대분류 선택" :items="swMainList" v-model="props.data.selectedSwMain"
                                    @change="updateList" /> 
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCol>
                <VCol md="6" cols="12">
                    <VCardText>
                        <VRow>
                            <VCol>
                                <VSelect id="sublist" label=" 중분류 선택" :items="swSubList" v-model="props.data.selectedSwSub" />
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCol>
                <VCol cols="12" md="4" v-if="props.data.selectedSwSub">
                    <label for="version" class="label">version</label>
                    <VSelect v-model="props.data.selectedVersion" :items="version" id="version" />
                   
                </VCol>
                <VCol cols="12" md="4" v-if="props.data.selectedSwSub">
                    <label for="state" class="label">state</label>
                    <VSelect v-model="props.data.selectedState" :items="state" />
                </VCol>
                <VCol cols="12" md="4" v-if="props.data.selectedSwSub">
                    <label for="install" class="label">install</label>
                    <VSelect v-model="props.data.selectedInstall" :items="install" />
                </VCol>
            </VRow>
        </div>

        <!-- 👉 Item Actions -->
        <div class="d-flex flex-column item-actions pa-1" :class="$vuetify.display.smAndUp ? 'border-s' : 'border-b'">
            <VBtn icon size="x-small" color="default" variant="text" @click="removeProduct">
                <VIcon :size="20" icon="mdi-close" />
            </VBtn>
        </div>
    </VCard>
</template>

<style lang="scss">
.label {
    font-size: large;
    font-weight: bold;
}
</style>