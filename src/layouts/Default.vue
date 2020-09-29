<template>
  <div>
    <section
      class="page-header"
      style="background-image: linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45)); color: rgb(255, 255, 255);"
    >
      <div style="position: absolute; top: 20px; right: 20px; z-index: 2;">
        <button
          type="button"
          class="el-button el-tooltip el-button--default is-circle"
          aria-describedby="el-tooltip-8800"
          tabindex="0"
        >
          <!---->
          <i class="el-icon-rank"></i>
          <!---->
        </button>
      </div>
      <div style="position: absolute; top: 276px; left: 460px; z-index: 1;">
        <font style="font-size: 37px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 201px; left: 69px; z-index: 1;">
        <font style="font-size: 33px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 221px; left: 204px; z-index: 1;">
        <font style="font-size: 28px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 290px; left: 566px; z-index: 1;">
        <font style="font-size: 27px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 260px; left: 1062px; z-index: 1;">
        <font style="font-size: 29px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 93px; left: 524px; z-index: 1;">
        <font style="font-size: 22px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 256px; left: 556px; z-index: 1;">
        <font style="font-size: 38px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 152px; left: 433px; z-index: 1;">
        <font style="font-size: 39px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 85px; left: 451px; z-index: 1;">
        <font style="font-size: 27px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 269px; left: 456px; z-index: 1;">
        <font style="font-size: 34px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 47px; left: 346px; z-index: 1;">
        <font style="font-size: 31px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <div style="position: absolute; top: 28px; left: 186px; z-index: 1;">
        <font style="font-size: 39px; color: rgb(255, 255, 255);">
          <b>♪</b>
        </font>
      </div>
      <h1 class="project-name">{{$static.user.edges[0].node.title}}</h1>
      <h2 class="project-tagline">{{$static.user.edges[0].node.subtitle}}</h2>
      <a :href="$static.user.edges[0].node.github" target="_blank" class="btn">GitHub主页</a>
      <a :href="$static.user.edges[0].node.codePath" target="_blank" class="btn">博客源码</a>
    </section>
    <section class="main-content">
      <div class="el-row">
        <div class="el-col el-col-6" style="padding-right: 10px;">
          <div>
            <div class="el-card is-never-shadow">
              <!---->
              <div class="el-card__body">
                <ul role="menubar" class="el-menu">
                  <g-link class="nav__link el-menu-item" :class="
                    path === '/new' ? 'is-active' : ''
                  " to="/new"><i class="el-icon-star-off"></i>最新动态</g-link>
                  <g-link class="nav__link el-menu-item" :class="
                    path === '/social' ? 'is-active' : ''
                  " to="/social"><i class="el-icon-mobile-phone"></i>社交圈</g-link>
                  <g-link class="nav__link el-menu-item" :class="
                    path === '/blog' ? 'is-active' : ''
                  " to="/blog"><i class="el-icon-edit-outline"></i>博客列表</g-link>
                  <g-link class="nav__link el-menu-item" :class="
                    path === '/project' ? 'is-active' : ''
                  " to="/project"><i class="el-icon-service"></i>开源项目</g-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="el-col el-col-18" style="padding-left: 10px;">
          <section>
            <div class style="min-height: 600px;">
              <slot/>              
            </div>
          </section>
        </div>
      </div>
    </section>
    <section class="foot"><div style="border-top: 1px solid rgb(225, 228, 232) !important; padding: 45px 0px;"><div class="el-row"><div class="el-col el-col-10"><div>
				© 2018 GitHub-liannian9
				<a :href="$static.user.edges[0].node.github" target="_blank">Profile</a>  &nbsp;&nbsp;&nbsp;
				<a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>  &nbsp;&nbsp;&nbsp;
				<a href="http://element.eleme.io/" target="_blank">Element</a></div></div></div></div></section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  user:allStrapiUserInfo{
      edges {
        node {
          title
          github
          subtitle
          username
          codePath
        }
      }
  }
}
</static-query>

<script>
export default {
  computed: {
    path() {
      return this.$route.path
    }
  },
}
</script>
<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
