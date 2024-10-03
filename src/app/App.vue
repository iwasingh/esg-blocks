<!-- corporate-sustainability-reporting/src/app/app.vue -->
<template>
  <div class="app-container">
    <Toolbar>
      <template #start>
        <img src="./assets/logo.svg" alt="Logo" class="logo" />
      </template>
      <template #end>
        <Button icon="pi pi-user" class="p-button-text p-button-plain p-button-sm" />
        <Button icon="pi pi-bell" class="p-button-text p-button-plain p-button-sm" />
      </template>
    </Toolbar>


    <div class="content-wrapper">
      <Card class="paper">
        <template #content>
          <ReportBuilder />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import Card from 'primevue/card';
import ReportBuilder from './report_builder/report_builder.vue';

const menuItems = [
  { label: 'Home', icon: 'pi pi-home', to: '/' },
  { label: 'Bookmarks', icon: 'pi pi-bookmark', to: '/bookmarks' },
  { label: 'Reports', icon: 'pi pi-file', to: '/reports' },
  { label: 'Team', icon: 'pi pi-users', to: '/team' },
  { label: 'Messages', icon: 'pi pi-comments', to: '/messages' },
  { label: 'Calendar', icon: 'pi pi-calendar', to: '/calendar' },
  { label: 'Settings', icon: 'pi pi-cog', to: '/settings' }
];
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.logo {
  height: 2rem;
}

.menu {
  padding: 0.5rem;
  background-color: var(--surface-section);
  border-bottom: 1px solid var(--surface-border);
}

.content-wrapper {
  flex: 1;
  padding: 1rem;
  background-color: var(--surface-ground);
}

.paper {
  min-height: calc(100vh - 9rem);
  background-color: var(--surface-card);
  color: var(--text-color);
  border: 2px dashed var(--surface-border);
  border-radius: 4px;
  padding: 2rem;
}
</style>