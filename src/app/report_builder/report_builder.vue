<!-- corporate-sustainability-reporting/src/app/components/ReportBuilder.vue -->
<template>
    <div class="report-builder">
      <div class="block-types">
        <Button v-for="blockType in blockTypes" :key="blockType.type" :icon="blockType.icon" :class="['p-button-sm', 'block-type', blockType.color]" @click="addBlock(blockType.type)">
          {{ blockType.label }}
        </Button>
      </div>
  
      <div class="report">
        <div v-for="(block, index) in blocks" :key="index" class="block-wrapper">
          <div class="block-header">
            <div class="block-title">{{ getBlockLabel(block.type) }}</div>
            <div class="block-actions">
              <Button icon="pi pi-pencil" class="p-button-text p-button-sm" @click="editBlock(index)" />
              <Button icon="pi pi-trash" class="p-button-text p-button-sm" @click="removeBlock(index)" />
            </div>
          </div>
          <div class="block-placeholder">
            <div class="placeholder-content">
              <i :class="['placeholder-icon', getBlockIcon(block.type)]"></i>
              <span class="placeholder-text">{{ getBlockLabel(block.type) }} goes here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Button from 'primevue/button';
  
  const blockTypes = [
    { type: 'VideoBlock', label: 'Video', icon: 'pi pi-video', color: 'p-button-secondary' },
    { type: 'ColumnBlock', label: 'Column', icon: 'pi pi-columns', color: 'p-button-info' },
    { type: 'GraphBlock', label: 'Graph', icon: 'pi pi-chart-bar', color: 'p-button-success' },
    { type: 'HeadingBlock', label: 'Heading', icon: 'pi pi-heading', color: 'p-button-warning' },
    { type: 'KPIBlock', label: 'KPI', icon: 'pi pi-chart-line', color: 'p-button-danger' },
  ];
  
  const blocks = ref([]);
  
  const addBlock = (blockType) => {
    blocks.value.push({ type: blockType, props: {} });
  };
  
  const editBlock = (index) => {
    // Implement block editing logic
  };
  
  const removeBlock = (index) => {
    blocks.value.splice(index, 1);
  };
  
  const getBlockLabel = (blockType) => {
    const block = blockTypes.find((type) => type.type === blockType);
    return block ? block.label : '';
  };
  
  const getBlockIcon = (blockType) => {
    const block = blockTypes.find((type) => type.type === blockType);
    return block ? block.icon : '';
  };
  </script>
  
  <style scoped>
  .report-builder {
    padding: 1rem;
  }
  
  .block-types {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .block-wrapper {
    margin-bottom: 1rem;
  }
  
  .block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .block-title {
    font-weight: bold;
  }
  
  .block-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .block-placeholder {
    border: 2px dashed var(--surface-border);
    border-radius: 4px;
    padding: 1rem;
    text-align: center;
    color: var(--text-color-secondary);
  }
  
  .placeholder-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .placeholder-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .placeholder-text {
    font-style: italic;
  }
  </style>