<template>
  <v-text-field
      class="s"
        prepend-icon="mdi-magnify"
        hide-details
      ></v-text-field>
 

</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SearchBar",
  });
</script>
<style scoped>

.s{
     width: 80%; /* Adjust width for smaller screens */
  max-width: 553px; /* Limit maximum width */
  /* width: 680px; */
  position: absolute;
  left: 269px; 
  top:22px;
    z-index: 1; 
   /* color: var(--color-whitesmoke); */
  box-shadow: 0px 2px 4px rgba(12, 9, 9, 0.16);
  /* border-radius: 12px; */
  /* border: 3px solid; */
  /* right: 230px!important; */
  /* color: var(--wh); */
}

/* Media query for small screens */
@media only screen and (max-width: 600px) {
  .s {
    
    width: 40%; /* Adjust width for smaller screens */
    max-width: 130px; /* Limit maximum width */
     left: 90px; 
     /* height: 24px; */
  }
}



</style>