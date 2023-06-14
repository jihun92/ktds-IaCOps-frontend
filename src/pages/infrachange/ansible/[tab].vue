<script setup>
import { useRoute } from 'vue-router'
import AnsibleSettingProject from '@/views/pages/infrachange/ansible/AnsibleSettingsProject.vue'
import AnsibleSettingsPortfolio from '@/views/pages/infrachange/ansible/AnsibleSettingsPortfolio.vue'
import AnsibleSettingsParameter from '@/views/pages/infrachange/ansible/AnsibleSettingsParameter.vue'
import AnsibleSettingsDryRun from '@/views/pages/infrachange/ansible/AnsibleSettingsDryRun.vue'
import AnsibleSettingsRun from '@/views/pages/infrachange/ansible/AnsibleSettingsRun.vue'
const route = useRoute()
const router = useRouter()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
{
    id: 1,
    title: '1. Project Select',
    icon: 'mdi-account-outline',
    tab: 'project',
  },
  {
    id: 2,
    title: '2. Portfolio Select',
    icon: 'mdi-account-outline',
    tab: 'portfolio',
  },
  {
    id: 3,
    title: '3. Parameter Configuration',
    icon: 'mdi-account-outline',
    tab: 'parameter',
  },
  {
    id: 4,
    title: '4. DryRun ',
    icon: 'mdi-lock-open-outline',
    tab: 'dryrun',
  },
  {
    id: 5,
    title: '5. Run',
    icon: 'mdi-bell-outline',
    tab: 'run',
  },
]
const parameterData = ref({
  settingSW: [
  ],
  settingOS: [
  ],
})

function handleNextTab() {
  let nextTab = '';
  if (activeTab.value === 'project') {
    nextTab = 'portfolio';
  } 
  else if (activeTab.value === 'portfolio') {
    nextTab = 'parameter';
  }
  else if (activeTab.value === 'parameter') {
    nextTab = 'dryrun';
  } 
  else if (activeTab.value === 'dryrun') {
    nextTab = 'run';
  } 
  else if (activeTab.value === 'run') {
    nextTab = 'project';
  }
  activeTab.value = nextTab;

  // Change the  URLbased on the selected tab
  router.push({ name: 'infrachange-ansible-tab', params: { tab: nextTab } });
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
        :to="{ name: 'infrachange-ansible-tab', params: { tab: item.tab } }" :disabled="shouldDisableTab(item.tab)">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>


    <VWindow v-model="activeTab" class="mt-4 disable-tab-transition" :touch="false">

      <VWindowItem value="project">
        <AnsibleSettingProject @clickNextTab="handleNextTab" />
      </VWindowItem>

      <VWindowItem value="portfolio">
        <AnsibleSettingsPortfolio @clickNextTab="handleNextTab" />
      </VWindowItem>

      <VWindowItem value="parameter">
        <AnsibleSettingsParameter @clickNextTab="handleNextTab" :data="parameterData" />
      </VWindowItem>

      <VWindowItem value="dryrun">
        <AnsibleSettingsDryRun @clickNextTab="handleNextTab" @goBack="goBack" />
      </VWindowItem>

      <VWindowItem value="run">
        <AnsibleSettingsRun @clickNextTab="handleNextTab" />
      </VWindowItem>


    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: infrachange-ansible-tab
</route>
