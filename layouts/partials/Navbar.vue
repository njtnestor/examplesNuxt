<template>
  <div class="nav-wrapper">
    <b-navbar toggleable="lg">
      <b-container>
        <b-navbar-brand>
          <nuxt-link :to="localePath('/')">
            TechTalk Nuxt
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/blog')">
                Blog
              </nuxt-link>
            </li>
            <SwitchLang v-if="!isContentPage" class="nav-item" />
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  computed: {
    isContentPage () {
      return this.$route.name.includes('article')
    }
  }
}
</script>

<style scoped>
.nav-wrapper{

  z-index: 99999999;
  width: 100%;
}
.navbar{
  border-bottom: 2px solid #ff5b00;

}
.logo{
  width: 198px;
}

</style>

<style>

.moreMenu > a {
  color: black !important;
}

</style>
