<script setup>
import { useRoute } from 'vue-router'
import ActionSettingsProject from '@/views/pages/action/ActionSettingsProject.vue'
import ActionSettingsPortfolio from '@/views/pages/action/ActionSettingsPortfolio.vue'
import ActionSettingApply from '@/views/pages/action/ActionSettingApply.vue'
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
    title: '3. Action',
    icon: 'mdi-account-outline',
    tab: 'action',
  },
]

function handleNextTab() {
  let nextTab = '';
  if (activeTab.value === 'project') {
    nextTab = 'portfolio';
  } else if (activeTab.value === 'portfolio') {
    nextTab = 'action';
  } else if (activeTab.value === 'action') {
    nextTab = 'project';
  }
  activeTab.value = nextTab;

  // Change the  URLbased on the selected tab
  router.push({ name: 'action-tab', params: { tab: nextTab } });

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
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'action-tab', params: { tab: item.tab } }"
        :disabled="shouldDisableTab(item.tab)"
      >
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }} 
      </VTab>
    </VTabs>

    <VWindow v-model="activeTab" class="mt-4 disable-tab-transition" :touch="false">
      <VWindowItem value="project">
        <ActionSettingsProject @clickNextTab="handleNextTab" />
      </VWindowItem>
      <VWindowItem value="portfolio">
        <ActionSettingsPortfolio @clickNextTab="handleNextTab" />
      </VWindowItem>

      <VWindowItem value="action">
        <ActionSettingApply
          @clickNextTab="handleNextTab" />
      </VWindowItem>

    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: action-tab
</route>