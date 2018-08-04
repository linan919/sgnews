<template>
	<div id="app">
		<!-- 顶部 -->
		<mt-header class="sg-header" fixed title="SG新闻">
			<mt-button slot="left">
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-user"></use></svg>
			</mt-button>
			<mt-button class="sg-button" slot="right">
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-email"></use></svg>
				<span>邮箱</span>
				<span><svg class="icon sg-small-icon" aria-hidden="true"><use xlink:href="#icon-unfold"></use></svg></span>
			</mt-button>
		</mt-header>
		<!-- 导航 -->
		<mt-navbar v-model="sgNavSelected">
		<mt-tab-item id="1">要闻</mt-tab-item>
		<mt-tab-item id="2">话题</mt-tab-item>
		<mt-tab-item id="3">推荐</mt-tab-item>
		</mt-navbar>
		<!--  -->
		<mt-tab-container v-model="sgNavSelected">
			<mt-tab-container-item id="1">
				<!-- 分类 -->
				<SGNewsCat></SGNewsCat>
				<!-- 今日要闻 -->
				<SGTodayNews></SGTodayNews>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<p>哈哈哈哈2222</p>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<p>哈哈哈哈33333</p>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>



// 脚本
<script>
import SGNewsCat from './components/main_news/SGNewsCat.vue'
import SGTodayNews from './components/main_news/SGTodayNews.vue'

export default {
	name: 'App',
	components: {
		SGNewsCat,
		SGTodayNews
	},
	data: function(){
		return {
			sgNavSelected: '1'
		}
	}
}
</script>



// 样式
<style lang="scss">
@import "./assets/css/sg_common.scss";
@import "./assets/css/sg_flexable.scss";

#app {
	max-width: $app-max-width;
	margin: 2.5rem auto 0rem auto;
	overflow: hidden;

	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>