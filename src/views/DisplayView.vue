<template>
  <div>
    <DynamicForm v-if="config.pages.length > 0 && currentPage !== null" :fields="config.pages[currentPage].fields"
      @submit-data="handleDataSubmission" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { Config } from '@/types/config.type';
import DynamicForm from '@/components/DynamicForm.vue';
import router from '@/router';

export default defineComponent({
  components: {
    DynamicForm
  },
  setup() {
    const config = reactive<Config>({ pages: [] });
    let currentPage = ref<number>(0);

    // Load configuration when component mounts
    onMounted(async () => {
      try {
        const response = await axios.get('config.json'); // I just put the config.json file in the public folder just to make it easy
        console.log('response', response)
        config.pages = response.data.pages;
        currentPage.value = 0;  // Start with the first page
      } catch (error) {
        console.error('Failed to load configuration:', error);
      }
    });

    const handleDataSubmission = (data: FormData) => {
      console.log('Form data:', data);
      // Process the form data, save it, navigate to the next page or to the display page
      if (currentPage.value !== null && currentPage.value < config.pages.length - 1) {
        currentPage.value++;
      } else {
        // This just takes you to a fun "finished" page I made.
        router.push('/finished');
      }
    };

    return { config, currentPage, handleDataSubmission };
  }
});
</script>
