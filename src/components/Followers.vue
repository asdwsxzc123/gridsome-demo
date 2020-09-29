<template>
  <div
    role="tabpanel"
    id="pane-followers"
    aria-labelledby="tab-followers"
    class="el-tab-pane"
    style="padding: 5px"
    aria-hidden="true"
  >
    <div class>
      <div>
        <div class="el-row" style="min-height: 200px">
          <div
            class="el-col el-col-8"
            style="padding: 10px"
            v-for="(follower, index) in $static.followers.edges"
            :key="index"
          >
            <div
              class="el-card is-hover-shadow"
              style="
                font-size: 13px;
                color: rgb(96, 98, 102);
                line-height: 20px;
              "
            >
              <!---->
              <div class="el-card__body">
                <i class="el-icon-star-off"></i>
                <a style="text-decoration: none; cursor: pointer">{{
                  follower.node.isFollowing
                }}</a>
                <br />
                <i class="el-icon-message"></i>
                <a
                  :href="follower.node.github"
                  target="_blank"
                  style="text-decoration: none; cursor: pointer"
                  >TA的主页</a
                >
                <br />
                <img
                  :src="'http://119.45.204.135:1337' + follower.node.avator.url"
                  style="width: 100%; border-radius: 5px; margin-top: 5px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<static-query>
query($page:Int) {
  followers:allStrapiFollewer(perPage: 3, page: $page) @paginate { 
    totalCount
    edges {
      node {
        id
        isFollowing
        github
        avator{
          url
        }
      }
    }
  }
}
</static-query>
<script>
import { Pager } from "gridsome";
export default {
  name: "Followers",
  components: {
    Pager,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
