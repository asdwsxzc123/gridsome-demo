<template>
  <Layout>
    <div style="padding-left: 10px">
      <section>
        <div class style="min-height: 600px">
          <div>
            <div
              class="el-card is-hover-shadow"
              style="margin-bottom: 20px"
              v-for="(blog, index) in $page.blogs.edges"
              :key="index"
            >
              <div class="el-card__header">
                <div>
                  <div class="el-row">
                    <div class="el-col el-col-16">
                        <i class="el-icon-edit-outline"></i>
                        &nbsp;&nbsp; {{ blog.node.title }}
                    </div>
                    <div class="el-col el-col-8">
                      <div style="text-align: right">
                        <button
                          type="button"
                          class="el-button el-button--text"
                          style="padding: 3px 0px"
                        >
                          <!---->
                          <i class="el-icon-share"></i>
                          <!---->
                        </button>
                        <!---->
                        <!---->
                      </div>
                    </div>
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
                  最近更新 {{ blog.node.updated_at }}
                </div>
                <div
                  style="
                    font-size: 1.1rem;
                    line-height: 1.5;
                    color: rgb(48, 49, 51);
                    padding: 10px 0px 0px;
                  "
                  v-html="mdToHtml(blog.node.content)"
                ></div>
              </div>
            </div>
          </div>
          <!---->
          <Pager :info="$page.blogs.pageInfo" />
        </div>
      </section>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
  blogs:allStrapiBlog(perPage: 2, page: $page) @paginate  {
    pageInfo {
      totalPages
      currentPage
    }
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
import { Pager } from "gridsome";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: "BlogPage",
  metaInfo: {
    title: "Blog",
  },
  components: {
    Pager,
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
