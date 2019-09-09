<template>
  <div>
       <v-Header></v-Header>
       <v-Nav></v-Nav>
       <v-List></v-List>
  </div>
</template>

<script>
import Header from './header.vue'
import Nav from './nav.vue'
import List from './list.vue'

export default {
   components:{
     'v-Header':Header,
      'v-Nav':Nav,
      'v-List':List
   }  
}
</script>