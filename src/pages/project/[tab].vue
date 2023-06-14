<script setup>
import { useRoute } from 'vue-router'
import ProjectSettings from '@/views/pages/project/ProjectSettings.vue'
import ProjectInformation from '@/views/pages/project/ProjectInformation.vue'
const route = useRoute()
const router = useRouter()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
{
    id: 1,
    title: 'PROJECTS',
    icon: 'mdi-view-grid-outline',
    tab: 'projects',
  },
  {
    id: 2,
    title: 'PROJECT INFORMATION',
    icon: 'mdi-view-grid-outline',
    tab: 'project',
  },
]


function handleNextTab() {
  let nextTab = '';
  if (activeTab.value === 'projects') {
    nextTab = 'project';
  } 
  activeTab.value = nextTab;

  // Change the  URLbased on the selected tab
  router.push({ name: 'project-tab', params: { tab: nextTab } });
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
        :to="{ name: 'project-tab', params: { tab: item.tab } }" :disabled="shouldDisableTab(item.tab)">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>


    <VWindow v-model="activeTab" class="mt-4 disable-tab-transition" :touch="false">

      <VWindowItem value="projects">
        <ProjectSettings @clickNextTab="handleNextTab" />
      </VWindowItem>

      <VWindowItem value="project">
        <ProjectInformation @clickNextTab="handleNextTab" />
      </VWindowItem>


    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: project-tab
</route>






