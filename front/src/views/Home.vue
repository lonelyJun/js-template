<template>
  <div class="home">
    <DivEditable />
  </div>
</template>

<script>
// @ is an alias to /src
import DivEditable from "@/components/DivEditable/DivEditable.vue";

export default {
  name: "Home",
  components: {
    DivEditable
  }
};
</script>
