<script setup>
import { useRoute } from 'vue-router'
import TerraformSettingsProject from '@/views/pages/terraform/TerraformSettingsProject.vue'
import TerraformSettingsPortfolio from '@/views/pages/terraform/TerraformSettingsPortfolio.vue'
import TerraformSettingsParameter from '@/views/pages/terraform/TerraformSettingsParameter.vue'
import TerraformSettingsPlan from '@/views/pages/terraform/TerraformSettingsPlan.vue'
import TerraformSettingsApply from '@/views/pages/terraform/TerraformSettingsApply.vue'
const route = useRoute()
const router = useRouter()
const activeTab = ref(route.params.tab)
const planResults = ref(null); // plan-results 변수 선언
const applyResults = ref(null); // apply-results 변수 선언


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
    title: '4. Plan',
    icon: 'mdi-lock-open-outline',
    tab: 'plan',
  },
  {
    id: 5,
    title: '5. Apply',
    icon: 'mdi-bell-outline',
    tab: 'apply',
  },
]
const invoiceData = ref({
  settingWeb: [
    {
      name: 'Web Server -1',
      image: 'WEBserver-centos7-230518',
      type: 'T2.micro',
    },
  ],
  settingWas: [
    {
      name: 'Was Server -1',
      image: 'WASserver-centos7-230518',
      type: 'T2.micro',
    },
  ],
  settingDB: [
    {
      name: 'DB Server -1',
      image: 'DBserver-centos7-230518',
      type: 'T2.micro',
    },
  ],
})

function handleNextTab() {
  let nextTab = '';

  if (activeTab.value === 'project') {
    nextTab = 'portfolio';
  } else if (activeTab.value === 'portfolio') {
    nextTab = 'parameter';
  } else if (activeTab.value === 'parameter') {
    nextTab = 'plan';
  } else if (activeTab.value === 'plan') {
    nextTab = 'apply';
  }

  activeTab.value = nextTab;

  // Change the  URLbased on the selected tab
  router.push({ name: 'terraform-tab', params: { tab: nextTab } });
}

function shouldDisableTab(tab) {
  const activeTabIndex = tabs.findIndex((item) => item.tab === activeTab.value);
  const tabIndex = tabs.findIndex((item) => item.tab === tab);

  return tabIndex > activeTabIndex;
}

function handlePlanResults(results) {
  planResults.value = results;
}

function handleApplyResults(results) {
  applyResults.value = results;
}

function goBack(){
  activeTab.value = 'parameter';
  router.go(-1);
}
</script>

<template>
  <div>
    <UserProfileHeader class="mb-6" />

    <VTabs v-model="activeTab" class="v-tabs-pill">
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        
        :disabled="shouldDisableTab(item.tab)"
      >
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }} 
      </VTab>
    </VTabs>

    <VWindow v-model="activeTab" class="mt-4 disable-tab-transition" :touch="false">
      <VWindowItem value="project">
        <TerraformSettingsProject @clickNextTab="handleNextTab" />
      </VWindowItem>
      <VWindowItem value="portfolio">
        <TerraformSettingsPortfolio @clickNextTab="handleNextTab" />
      </VWindowItem>

      <VWindowItem value="parameter">
        <TerraformSettingsParameter
          @clickNextTab="handleNextTab"
          @plan-results="handlePlanResults"
          :data="invoiceData"
        />
      </VWindowItem>

      <VWindowItem value="plan">
        <TerraformSettingsPlan @clickNextTab="handleNextTab" @apply-results="handleApplyResults" @goBack="goBack" :data="planResults" />
      </VWindowItem>

      <VWindowItem value="apply">
        <TerraformSettingsApply :data="applyResults" />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: terraform-tab
</route>