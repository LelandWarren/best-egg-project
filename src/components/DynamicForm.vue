<!-- DynamicForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="field in fields" :key="field.name">
      <input :type="field.type" v-model="formData[field.name]" :placeholder="field.name" />
    </div>
    <button type="submit">Next</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';
import { FieldObject } from '@/types/field-object.type';

export default defineComponent({
  props: {
    fields: {
      type: Array as PropType<FieldObject[]>,
      required: true,
    },
  },

  setup(props, { emit }) {
    interface FormData {
      [key: string]: string;
    }

    const formData = reactive<FormData>({});

    const handleSubmit = () => {
      // console logging just to see the form data in console. 
      // I'd probably store this in Vuex or something but I'm just trying to keep it simple.
      console.log('Form data:', formData);
      emit('submit-data', formData);
    };

    return { formData, handleSubmit };
  },
});
</script>
