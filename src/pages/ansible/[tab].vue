<script setup>
import { useRoute } from 'vue-router'
import AnsibleSettingsParameter from '@/views/pages/ansible/AnsibleSettingsParameter.vue'
import AnsibleSettingsDry from '@/views/pages/ansible/AnsibleSettingsDry.vue'
import AnsibleSettingsRun from '@/views/pages/ansible/AnsibleSettingsRun.vue'
const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    id: 1,
    title: '1. Parameter Configuration',
    icon: 'mdi-account-outline',
    tab: 'parameter',
  },
  {
    id: 2,
    title: '2. Dry ',
    icon: 'mdi-lock-open-outline',
    tab: 'dry',
  },
  {
    id: 3,
    title: '3. Run',
    icon: 'mdi-bell-outline',
    tab: 'run',
  },
]
const invoiceData = ref({
  settingSW: [{
    swMainList: '',
    List: '',
  }],
  settingOS: [{
    key: '',
    Value: '',
  }],
})

function handleNextTab() {
  if (activeTab.value === 'parameter') {
    activeTab.value = 'dry' 
  } else if (activeTab.value === 'dry') {
    activeTab.value = 'run' 
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
        :to="{ name: 'ansible-tab', params: { tab: item.tab } }"
        :disabled="shouldDisableTab(item.tab)">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>


    <VWindow v-model="activeTab" class="mt-4 disable-tab-transition" :touch="false">

    <VWindowItem value="parameter">
      <AnsibleSettingsParameter  @clickNextTab="handleNextTab" :data="invoiceData"/>
    </VWindowItem>

    <VWindowItem value="dry" >
      <AnsibleSettingsDry @clickNextTab="handleNextTab" />
    </VWindowItem>

    <VWindowItem value="run" >
      <AnsibleSettingsRun @clickNextTab="handleNextTab"/>
    </VWindowItem>
  </VWindow>
  </div>

</template>

<route lang="yaml">
meta:
  navActiveLink: ansible-tab
</route>
