<!-- eslint-disable vue/no-mutating-props -->
<script setup>
const typeOptions = ['t2.micro', 't2.big', '??']

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

const emit = defineEmits([
    'removeProduct',
])


const removeProduct = () => {
    emit('removeProduct', props.id)
}

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
                <VCol cols="12" md="6" sm="4">
                    <VTextField v-model="props.data.name" type="text" label="Name" />

                </VCol>
                <VCol>
                    <VTextField v-model="props.data.image" type="text" label="Image" />
                </VCol>
                <VCol>
                    <VSelect label="type" :items="typeOptions" v-model="props.data.type" />
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
