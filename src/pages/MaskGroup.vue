<template>
  <div :class="$style.maskGroup">
    <div :class="$style.dashboard">
      <div :class="$style.mainSection" />
     <NavBar/>
     <MenuBar1 />
    </div>
  </div>
  
</template>
<script>
  import { defineComponent } from "vue";

  import MenuBar1 from "../components/MenuBar1.vue";
import NavBar from "../components/NavBar.vue"

  export default defineComponent({
    name: "MaskGroup",
    components: { MenuBar1,
    NavBar
      },
  });
</script>
<style module>
  .mainSection {
    position: absolute;
    top: 126px;
    left: 241px;
    border-radius: var(--br-8xs);
    background-color: rgba(208, 195, 210, 0.47);
    width: 1530px;
    height: 830px;
  }
  /* .notificationIcon {
    position: absolute;
    top: 23px;
    left: 1103px;
    width: 50px;
    height: 50px;
  } */
   .notificationIcon:active  {
    color: aqua!important;;
  }
  
  .dashboard {
    position: absolute;
    top: -59px;
    left: 0px;
    border-radius: 30px;
    background-color: var(--color-whitesmoke);
    width: 1777px;
    /* width: auto; */
    /* height: auto; */
    height: 920px;
    overflow: hidden;
  }
  .maskGroup {
    width: 100%;
    position: relative;
    height: 830px;
  }
  .icon{
    color: #673ab7;
  }
</style>