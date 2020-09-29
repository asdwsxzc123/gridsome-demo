<template>
  <Layout>
    <div style="min-height: 600px" class>
      <div class="el-card is-never-shadow" style="min-height: 400px">
        <div class="el-card__header">
          <div>
            <div class="el-row">
              <div class="el-col el-col-12">
                <span>{{ $page.blogs.edges[0].node.title }}</span>
              </div>
              <div class="el-col el-col-12"></div>
            </div>
          </div>
        </div>
        <div class="el-card__body">
          <div
            style="
              font-size: 0.9rem;
              line-height: 1.5;
              color: rgb(96, 108, 113);
            "
          >
            发布 {{ $page.blogs.edges[0].node.created_at }} <br />更新
            {{ $page.blogs.edges[0].node.updated_at }}
          </div>
          <div
            style="
              font-size: 1.1rem;
              line-height: 1.5;
              color: rgb(48, 49, 51);
              border-bottom: 1px solid rgb(228, 231, 237);
              padding: 5px 0px;
            "
          >
            <pre
              style="font-family: 微软雅黑"
              v-html="mdToHtml($page.blogs.edges[0].node.content)"
            ></pre>
          </div>
        </div>
      </div>
      <div class="el-loading-mask" style="display: none">
        <div class="el-loading-spinner">
          <svg viewBox="25 25 50 50" class="circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path" />
          </svg>
          <!---->
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  blogs:allStrapiBlog(sortBy:"updated_at") { 
    edges {
      node {
        id
        title
        content
        created_at
        updated_at
      }
    }
  }
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: "Blog-Detail",
  metaInfo: {
    title: "Hello, world!",
  },
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
