<script setup>
import { useRoute } from 'vue-router'
//import AnsibleSettingsParameter from '@/views/pages/infrachange/terraform/AnsibleSettingsParameter.vue'
//import AnsibleSettingsDry from '@/views/pages/infrachange/terraform/AnsibleSettingsDry.vue'
//import AnsibleSettingsRun from '@/views/pages/infrachange/terraform/AnsibleSettingsRun.vue'
const route = useRoute()
const router = useRouter()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    id: 1,
    title: '1. sample',
    icon: 'mdi-account-outline',
    tab: 'parameter',
  },
  {
    id: 2,
    title: '2. sample ',
    icon: 'mdi-lock-open-outline',
    tab: 'dry',
  },
  {
    id: 3,
    title: '3. sample',
    icon: 'mdi-bell-outline',
    tab: 'run',
  },
]
const parameterData = ref({
  settingSW: [
    {
      selectedSwMain: '',
      selectedSwSub: '',
      selectedVersion: '',
      selectedState: '',
      selectedInstall: '',
    },
  ],
  settingOS: [
    {
      keyMain: '',
    },
  ],
})

function handleNextTab() {
  let nextTab = '';

  if (activeTab.value === 'parameter') {
    nextTab = 'dry';
  } else if (activeTab.value === 'dry') {
    nextTab = 'run';
  } else if (activeTab.value === 'run') {
    nextTab = 'parameter';
  }
  activeTab.value = nextTab;

  // Change the  URLbased on the selected tab
  router.push({ name: 'infrachange-terraform-tab', params: { tab: nextTab } });
}

function shouldDisableTab(tab) {
  const activeTabIndex = tabs.findIndex((item) => item.tab === activeTab.value);
  const tabIndex = tabs.findIndex((item) => item.tab === tab);

  return tabIndex > activeTabIndex;
}
function goBack() {
  activeTab.value = 'parameter';
  router.go(-1);
}

</script>

<template>
  <div>
    <UserProfileHeader class="mb-6" />

    <VTabs v-model="activeTab" class="v-tabs-pill">
      <VTab v-for="item in tabs" :key="item.icon" :value="item.tab"
        :to="{ name: 'infrachange-terraform-tab', params: { tab: item.tab } }" :disabled="shouldDisableTab(item.tab)">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>


  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: infrachange-terraform-tab
</route>
