<template>
  <b-container>
    <article>
      <nuxt-content class="my-5" :document="post" />
    </article>
  </b-container>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params, app, error }) {
    try {
      const post = await $content(`${app.i18n.locale}/blog`, params.article).fetch()
      return { post }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description }
      ]
    }
  }
}
</script>

<style >

</style>
