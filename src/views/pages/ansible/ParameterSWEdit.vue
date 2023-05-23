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

const swMainList = ['OS', 'MW', 'DB'];
const state = ['latest', '??'];
const install = ['true', 'false'];
const selectedSwMain = ref('');
const selecteState = ref('');
const selectedInstall = ref('');
const List = ref([]);
const selectedList = ref('');

const updateList = () => {
    switch (selectedSwMain.value) {
        case 'OS':
            List.value = ['Centos', 'redhat'];
            break;
        case 'MW':
            List.value = ['tomcat', 'apache'];
            break;
        case 'DB':
            List.value = ['postgres', 'mysql'];
            break;
        default:
            List.value = [];
            break;
    }
    selectedList.value = ''; // Reset selectedList when swList changes
};

watch(selectedSwMain, updateList);

updateList(); // Initialize List based on the initial selectedSw value
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
                                <VSelect id="mainlist" label="대분류 선택" :items="swMainList" v-model="selectedSwMain"
                                    @change="updateList" />
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCol>
                <VCol md="6" cols="12">
                    <VCardText>
                        <VRow>
                            <VCol>
                                <VSelect id="middlelist" label=" 중분류 선택" :items="List" v-model="selectedList" />
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCol>
                <VCol cols="12" md="4" v-if="selectedList">
                    <label for="version" class="label">version</label>
                    <VTextField id="version" />
                </VCol>
                <VCol cols="12" md="4" v-if="selectedList">
                    <label for="state" class="label">state</label>
                    <VCombobox v-model="selecteState" :items="state" />
                </VCol>
                <VCol cols="12" md="4" v-if="selectedList">
                    <label for="install" class="label">install</label>
                    <VCombobox v-model="selectedInstall" :items="install" />
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