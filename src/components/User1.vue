<template>

       <v-btn variant="outlined" class="expense">
    <span class="label"> <b>+ Add Expense</b></span>
  </v-btn>
 
   <v-btn :class="notificationIcon" icon size="47" style="border: 3px solid #673ab7; position: absolute; top: 23px;left: 1400px;">
      <v-icon class="icon">mdi-bell-outline</v-icon>
   </v-btn>
  <div :class="user">
    
    <img :class="userChild" alt="" src="/ellipse-3@2x.png" />
      
    <div :class="johnDoe">John Doe</div>
   
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserComponent1",
    data() {
      return {
        notificationIcon: "notificationIcon",
        user: "user",
        userChild: "userChild",
        johnDoe: "johnDoe"
      };
    }
  });
</script>
<style scoped>


.uppercase {
  text-transform: none;
  border: 2px;
}
.expense{
  top: 23px;
  left: 370px;
   height: 53px!important;
   color: blueviolet;
   text-transform: none;
   font-size: 19px;
   font-family: radley-regular;
   border:3px solid;
   border-radius: 13px;
}
/* Media query for small screens */

/* @media only screen and (max-width: 1600px) {
  .expense {
      left: -174px;
      width:130px;
      font-size: 15px;
  }
} */
@media only screen and (max-width: 600px) {
  .expense {
      top: 23px;
       left: 37px;
    /* top: 5vw; Adjust positioning for smaller screens */
    /* left: 24px; Adjust positioning for smaller screens */
    height: 10vw; /* Adjust height for smaller screens */
    font-size: 4vw; /* Adjust font size for smaller screens */
    border-radius: 3vw; /* Adjust border radius for smaller screens */
    padding: 2vw 4vw; /* Adjust padding for smaller screens */
  }
}

.notificationIcon {
  position: absolute;
  top: 23px;
  left: 1103px;
  width: 50px;
  height: 50px;
}

.notificationIcon:active {
  color: #673ab7;
}


.userChild {
  width: 50px;
  position: relative;
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
}

.johnDoe {
  position: relative;
}

.user {
  position: absolute;
  top: 23px;
  left: 1500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xl);
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-radley);
}

.icon {
  color:#673ab7;
}
/* @media only screen and (max-width: 1600px) {
 .notificationIcon {
  
  top: 23px;
  left:1390px!important;
  width: 50px;
  height: 50px;
}
.user{
  left:860px;
}
} */
@media only screen and (max-width: 600px) {
  .notificationIcon {
  /* position: relative; */
  top: 23px;
  left: 250px!important;
  /* width: 20px!important; */
  /* height: 20px!important; */
}
.user{
  left:340px;
}
}


</style>
