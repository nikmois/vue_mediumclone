<template>
  <div>
      <div v-if="isLoading">Loading...</div>
      <div v-if="error">Something bad happened...</div>
      <div v-if="feed">
          <div class="article-preview" v-for="(article, index) in feed.articles" :key="index">
              <div class="article-meta">
                  <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}"><img :src="article.author.img" alt="profile picture"></router-link>
                  <div class="info">
                    <router-link class="author" :to="{name: 'userProfile', params: {slug: article.author.username}}">{{article.author.username}}</router-link>
                    <span class="date">{{article.createdAt}}</span>
                  </div>
                  <div class="pull-xs-right">
                      ADD TO FAVORITES
                  </div>
              </div>
              <router-link class="preview-link" :to="{name: 'article', params: {slug : article.slug}}">
                  <h1>{{article.title}}</h1>
                  <p>{{article.description}}</p>
                  <span>Read more...</span>
                  TAG LIST
              </router-link>
          </div>
          <mcv-pagination :total="feed.articlesCount" :limit="limit" :current-page="currentPage" :url="baseUrl"/>
      </div>
  </div>
</template>

<script>
import {limit} from "@/helpers/variables"
import {actionTypes} from "@/store/modules/feed"
import {mapState} from 'vuex'
import McvPagination from "@/components/Pagination"
import queryString from 'query-string'

export default {
    name: "McvFeed",
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    components: {
        McvPagination
    },

    data() {
        return{
            // total: 500,
            limit,
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        currentPage() {
            return Number(this.$route.query.page || "1")
        },
        baseUrl() {
            return this.$route.path
        },
        offset() {
            return this.currentPage * limit - limit
        }
    },
    watch: {
        currentPage() {
            this.fetchFeed()
        }
    },
    mounted() {
        this.fetchFeed()
    },
    methods: {
        fetchFeed() {
            const parsedUrl = queryString.parseUrl(this.apiUrl)
            const stringifiedParams = queryString.stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
            this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
        }
    }
}
</script>

<style>

</style>