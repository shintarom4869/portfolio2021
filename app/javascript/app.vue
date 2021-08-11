<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="res"><h1 class="res-title" @click="clickSmoothScroll('#app')">Murakami's Profile</h1></div>
    <div class="nav-res">
      <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
        <font-awesome-icon icon="image" class="nav-icon"/>
        <p class="comment">Top</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
        <font-awesome-icon icon="user-circle" class="nav-icon"/>
        <p class="comment">About</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
        <font-awesome-icon icon="code" class="nav-icon"/>
        <p class="comment">Skill</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
        <font-awesome-icon icon="hammer" class="nav-icon"/>
        <p class="comment">Works</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
        <font-awesome-icon icon="handshake" class="nav-icon"/>
        <p class="comment">Contact</p>
      </a>
    </div>

    <div id="top">
      <div id="main">
        <vue-typer :text="['I am an engineer \n who can solve social issues \n using technology.']" class="top-text" :repeat='0'
                   :preTypeDelay="100" :typeDelay="100" :preEraseDelay="1000" :eraseDelay="2000"></vue-typer>
      </div>

      <vue-particles
              color="#add8e6"
              :particleOpacity="0.7"
              linesColor="#add8e6"
              :particlesNumber="80"
              shapeType="circle"
              :particleSize="6"
              :linesWidth="2"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="4"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="true"
              clickMode="push"
              retina_detect="true"
              class="particles">
      </vue-particles>
    </div>


    <About id="about"></About>
    <Skill id="skill"></Skill>
    <Work id="work"></Work>
    <Contact id="contact"></Contact>

    <Footer></Footer>
  </div>
</template>



<script defer>

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import About from './components/About.vue'
  import Skill from './components/Skill.vue'
  import Work from './components/Work.vue'
  import Contact from './components/Contact.vue'



  import 'normalize.css'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      About,
      Skill,
      Work,
      Contact
    },
    methods:{
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

<style>


</style>
