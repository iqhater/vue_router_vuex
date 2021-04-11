<template>
  <div class="home">
    <FindBar />
  </div>
</template>

<script>
// @ is an alias to /src
import FindBar from "@/components/FindBar.vue";

export default {
  name: "home",
  components: {
    FindBar,
  },
};
</script>
