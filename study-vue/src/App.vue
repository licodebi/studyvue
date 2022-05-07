<template>
  <div class="container">
	<Category title="游戏">
			<template slot-scope="atguigu">
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		

		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Category from './components/Category'
export default {
  name: 'App',
  
  components: {
    HelloWorld,
    Category:Category
  }
}
</script>

<style>
#app {
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
}
</style>
