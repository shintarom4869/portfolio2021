<template>
  <div>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#about')">About</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#skill')">Skill</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#work')">Works</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#contact')">Contact</a>
  </div>
</template>


<script defer>
export default {
  methods: {
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

