<template>
  <div>
    <h1>Finished!</h1>
    <p>Thank you for submitting the form.</p>
    <p>Click <a @click="$router.push('/')">HERE</a> to fill out the form again</p>
  </div>
</template>

<script lang=" ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      return {};
    }
  });
</script>

<style>
a {
  color: #42b983;
  cursor: pointer;
}
</style>
