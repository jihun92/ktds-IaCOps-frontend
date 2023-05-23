<script setup>
import { useRoute } from 'vue-router'
import TerraformSettingsProject from '@/views/pages/terraform/TerraformSettingsProject.vue'
import TerraformSettingsPortfolio from '@/views/pages/terraform/TerraformSettingsPortfolio.vue'
import TerraformSettingsParameter from '@/views/pages/terraform/TerraformSettingsParameter.vue'
import TerraformSettingsPlan from '@/views/pages/terraform/TerraformSettingsPlan.vue'
import TerraformSettingsApply from '@/views/pages/terraform/TerraformSettingsApply.vue'
const route = useRoute()
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
    title: '4. Plan ',
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
  settingConfig: [{
    name: 'sample',
    image: 'sample',
    type: 'sample',
  }],
})
function handleNextTab() {
  if (activeTab.value === 'project') {
    activeTab.value = 'portfolio' // 'project' 탭에서 'portfolio' 탭으로 이동
  }
  else if (activeTab.value === 'portfolio') {
    activeTab.value = 'parameter' // 'portfolio' 탭에서 'parameter' 탭으로 이동
  } else if (activeTab.value === 'parameter') {
    activeTab.value = 'plan' // 'parameter' 탭에서 'plan' 탭으로 이동
  } else if (activeTab.value === 'plan') {
    activeTab.value = 'apply' // 'plan' 탭에서 'apply' 탭으로 이동
  }
}
function shouldDisableTab(tab) {
  const activeTabIndex = tabs.findIndex((item) => item.tab === activeTab.value);
  const tabIndex = tabs.findIndex((item) => item.tab === tab);

  return tabIndex > activeTabIndex;
}
</script>

<template>
  <div>
    <UserProfileHeader class="mb-6" />

    <VTabs v-model="activeTab" class="v-tabs-pill">
      <VTab v-for="item in tabs" :key="item.icon" :value="item.tab"
        :to="{ name: 'terraform-tab', params: { tab: item.tab } }" 
        :disabled="shouldDisableTab(item.tab)">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow v-model="activeTab" class="mt-4 disable-tab-transition" :touch="false">
    <VWindowItem value="project">
      <TerraformSettingsProject @clickNextTab="handleNextTab" />
    </VWindowItem>
    <VWindowItem value="portfolio">
      <TerraformSettingsPortfolio @clickNextTab="handleNextTab"/>
    </VWindowItem>

    <VWindowItem value="parameter">
      <TerraformSettingsParameter  @clickNextTab="handleNextTab" :data="invoiceData"/>
    </VWindowItem>

    <VWindowItem value="plan">
      <TerraformSettingsPlan @clickNextTab="handleNextTab"  />
    </VWindowItem> 

    <VWindowItem value="apply">
      <TerraformSettingsApply />
    </VWindowItem>
  </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: terraform-tab
</route>
