<script setup>
import { storeToRefs } from 'pinia'
import { useAnsibleStore } from './useAnsibleStore'
const AnsibleStore = useAnsibleStore()

const { KeyList, keySubList } = storeToRefs(AnsibleStore)

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
    switch (props.data.keyMain) {
        case 'net_ipv4_tcp_mem':
            keySubList.value = ['tcp_mem_min', 'tcp_mem_pressure', 'tcp_mem_max']
            break
        case 'sample':
            keySubList.value = ['sample_mem', 'sample_cpu']
            break
        default:
            keySubList.value = [];
            break
    }
}

watch(() => props.data.keyMain, updateList);

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
        <div class="pa-5 flex-grow-1">
            <VRow>
                <VCol md="12" cols="12">
                    <VCardText>
                        <VRow>
                            <VCol>
                                <VSelect id="keyMain" label="key List선택" :items="KeyList" v-model="props.data.keyMain" />
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCol>
                <!-- 👉 Left Form -->
                <template v-for="index in keySubList.length" :key="index">
                    <VCol cols="12" md="6" v-if="props.data.keyMain">
                        <label class="label">key{{ index }}</label>
                        <VSelect v-if="props.data.keyMain" :items="keySubList" :value="keySubList[index - 1]"  v-model="props.data[`keySub${index}`]" />
                    </VCol>
                    <VCol cols="12" md="6" v-if="props.data.keyMain">
                        <label class="label">value{{ index }}</label>
                        <VTextField v-model="props.data[`value${index}`]" />
                    </VCol>
                </template>
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