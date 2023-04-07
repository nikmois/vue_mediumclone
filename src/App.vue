<template>
  <div>
    <mcv-topbar />
    <router-view/>
  </div>
</template>

<script>
import McvTopbar from "@/components/TopBar.vue"
export default {
  name: "McvApp",
  components: {
    McvTopbar
  }
}
</script>


<style>
</style>
