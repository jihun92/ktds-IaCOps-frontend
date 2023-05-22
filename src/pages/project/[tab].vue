<script setup>
import { useRoute } from 'vue-router'
import UserProjects from '@/views/pages/project/ProjectSettings.vue'
const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Projects',
    icon: 'mdi-view-grid-outline',
    tab: 'projects',
  },
]
</script>

<template>
  <div>
    <UserProfileHeader class="mb-6" />

    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'project-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >

      <!-- Projects -->
      <VWindowItem value="projects">
        <UserProjects />
      </VWindowItem>

    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: project-tab
</route>
