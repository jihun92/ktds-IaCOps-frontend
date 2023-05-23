<script setup>
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

const KeyList = ['OS', 'MW', 'DB'];
const selectedKey = ref('');

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
                                <VSelect id="key" label="key 선택" :items="KeyList" v-model="selectedKey" />
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCol>
                <VCol cols="12" md="4">
                    <label for="value" class="label">value</label>
                    <VTextField id="value" />
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