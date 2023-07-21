<!-- eslint-disable vue/no-mutating-props -->
<script setup>
import { useTerraformStore } from './useTerraformStore'
const TerraformStore = useTerraformStore()

const { typeOptions, zoneOptions, osOptions,osVersionList, dbengineOptions, dbengineVersionList } = storeToRefs(TerraformStore)
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    data: {
        type: Object,
        required: true,
    },
})
const updateengineList = () => {
    switch (props.data.engine) {
        case 'postgreSQL':
        dbengineVersionList.value = ['13.1','15']
            break
        case 'mySQL':
        dbengineVersionList.value = ['5.6']
            break
        default:
        dbengineVersionList.value = [];
            break;

    }
}

const updateosList = () => {
    switch (props.data.os) {
        case 'centOS':
            osVersionList.value = ['7.9']
            break
        case 'ubuntu':
            osVersionList.value = ['20.04']
            break
        default:
            osVersionList.value = [];
            break;

    }
}

const emit = defineEmits([
    'removeProduct',
])


const removeProduct = () => {
    emit('removeProduct', props.id)
}
watch(() => props.data.os, updateosList);
watch(() => props.data.engine, updateengineList);
updateosList()
updateengineList()
</script>

<template>
    <!-- eslint-disable vue/no-mutating-props -->
    <div class="add-products-header mb-2 d-none d-md-flex">
        <VRow class="font-weight-medium px-5">
            <VCol cols="12" md="6">
                <h6 class="text-sm font-weight-medium">
                    Item
                </h6>
            </VCol>
        </VRow>
    </div>

    <VCard flat border class="d-flex flex-sm-row flex-column-reverse">
        <!-- 👉 Left Form -->
        <div class="pa-5 flex-grow-1">
            <VRow>
                <VCol cols="6" md="4" sm="4">
                    <VTextField v-model="props.data.name" type="text" label="Name" @focus="clearNameValue" />

                </VCol>
                <VCol>
                    <VSelect label="OS" :items="osOptions" v-model="props.data.os" @change="updateosList" />

                </VCol>
                <VCol>
                    <VSelect label="Version" :items="osVersionList" v-model="props.data.version" />
                </VCol>
                <VCol>
                    <VSelect label="Type" :items="typeOptions" v-model="props.data.type" />
                </VCol>
                <VCol>
                    <VSelect label="Availability zone " :items="zoneOptions" v-model="props.data.zone" />
                </VCol>
                <VCol>
                    <VSelect label="Engine" :items="dbengineOptions" v-model="props.data.engine" @change="updateengineList" />
                </VCol>
                <VCol>
                    <VSelect label="DB Version" :items="dbengineVersionList" v-model="props.data.dbversion" />
                </VCol>
            </VRow>
        </div>

        <!-- 👉 Item Actions -->
<!--        <div class="d-flex flex-column item-actions pa-1" :class="$vuetify.display.smAndUp ? 'border-s' : 'border-b'">
            <VBtn icon size="x-small" color="default" variant="text" @click="removeProduct">
                <VIcon :size="20" icon="mdi-close" />
            </VBtn>
        </div>-->
    </VCard>
</template>
