<template>
  <div class="home">
    <SearchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "home",
  components: {
    SearchBar,
  },
};
</script>
