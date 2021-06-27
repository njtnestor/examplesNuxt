<template>
  <b-container>
    <LazyMountainsList v-if="show" />
    <div class="mb-2">
      <b-button v-if="!show" variant="success" @click="showList">
        Show Lazy List
      </b-button>
    </div>
    <div>
      <b-button variant="success" @click="testProxy">
        Test proxy
      </b-button>
    </div>
    <div>
      Rutas:
      <ul>
        <li>
          <nuxt-link :to="localePath('/ejemplo')">
            /ejemplo
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/ejemplo/ejemplo1')">
            /ejemplo/ejemplo1
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/rutadinamica')">
            /rutadinamica
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/rutadinamica/3312321')">
            /rutadinamica/3312321
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      Headless CMS API:
      <ul>
        <li>
          <a href="/_content/en/blog">
            API en
          </a>
        </li>
        <li>
          <a href="/_content/es/blog">
            API es
          </a>
        </li>
      </ul>
    </div>
  </b-container>
</template>

<script>
export default {
  // layout: 'secondary',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showList () {
      this.show = true
    },
    async testProxy () {
      try {
        // const result = await this.$axios.$post('/api/expandurl/?url=https://tinyurl.com/s3d6nt4j') //<-fail cors
        const result = await this.$axios.$post('http://expandurl.com/api/expandurl/?url=https://tinyurl.com/s3d6nt4j')

        console.log(result)
      } catch (e) {
        console.log('error', e)
      }
    }

  }
}
</script>
