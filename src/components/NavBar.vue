<template>
   <div class="NavBar">
    <AppName />
    <SearchBar />
    <User1/>
    <!-- Add other navigation elements here -->
  </div>
</template>

<script>
 import { defineComponent } from "vue";
import AppName from "./AppName.vue";
import SearchBar from "./SearchBar.vue";

import User1 from "./User1.vue";
  export default defineComponent({
    name: "NavBar",
    components: { AppName,SearchBar,User1 },
  });
</script>

<style module>

</style>
