<template>
  <div :class="$style.appname">
    <img :class="$style.appnameChild" alt="" src="../../public/ellipse-1@2x.png" />
    <div :class="$style.tabtacticx">TabTacticx</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppName",
});
</script>

<style module>
.appnameChild {
  width: 60px;
  position: relative;
  border-radius: 50%;
  height: 60px;
  object-fit: cover;
}

.tabtacticx {
  position: relative;
}

.appname {
  position: absolute;
  top: 31px;
  left: 48px;
  width: 165px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-artifika);
}

/* Media query for small screens */
@media only screen and (max-width: 600px) {
  .appnameChild {
    width: 14vw;
    height: 14vw;
    left: -53px;
  }

  .tabtacticx {
    font-size: 3vw;
    left:-15px
  }

  .appname .tabtacticx {
    visibility: hidden; /* Hide only the text of the app name */
  }
}
</style>
