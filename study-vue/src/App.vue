<template>
  <div>
    <!-- <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Test</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group"> -->
          <!--生成路由链接-->
          <!-- <router-link to="/message" class="list-group-item">Message</router-link>
          <router-link to="/news" class="list-group-item">News</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body"> -->
            <!--显示当前组件-->
            <!-- <keep-alive>
              <router-view msg="abc"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div> -->
	<Count/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Category from './components/Category'
import Count from './components/Count'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Category:Category,
	Count
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container,.foot{
		display: flex;
		justify-content: space-around;
	}
h4{
	text-align: center;
} */
</style>
