<template>
  <b-container>
    <section class="grid grid-cols-3 gap-4 pt-12">
      <article
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class="post my-5"
      >
        <b-row>
          <b-col lg="9">
            <h3>{{ post.title }}{{ post.path }}</h3>
            <p class="text-gray-700 text-base">
              {{ post.description }}
            </p>
            <nuxt-link :to="post.path" class="font-bold text-xl mb-2">
              <b-button variant="primary">
                {{ $t('go') }}
              </b-button>
            </nuxt-link>
          </b-col>
        </b-row>
      </article>
    </section>
  </b-container>
</template>
<script>
export default {
  name: 'Blog',
  async asyncData ({ $content, params, app }) {
    const posts = await $content(`${app.i18n.locale}/blog`).fetch()

    if (app.i18n.locale === app.i18n.defaultLocale) {
      return {
        posts: posts.map(post => ({
          ...post,
          path: post.path.replace(`/${app.i18n.locale}`, '')
        }))
      }
    }
    return {
      posts
    }
  }
}
</script>
<style scoped>

.imgArticle{
  width: 100%;
  height: 160px;
  object-fit: cover;

}
</style>
