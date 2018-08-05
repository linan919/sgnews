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
		<mt-tab-item id="sg-tab-item-1">要闻</mt-tab-item>
		<mt-tab-item id="sg-tab-item-2">话题</mt-tab-item>
		<mt-tab-item id="sg-tab-item-3">推荐</mt-tab-item>
		</mt-navbar>
		<!--  -->
		<mt-tab-container v-model="sgNavSelected">
			<mt-tab-container-item id="sg-tab-item-1">
				<!-- 分类 -->
				<SGNewsCat></SGNewsCat>
				<!-- 今日要闻 -->
				<SGTodayNews></SGTodayNews>
			</mt-tab-container-item>
			<mt-tab-container-item id="sg-tab-item-2">
				<p>哈哈哈哈2222</p>
			</mt-tab-container-item>
			<mt-tab-container-item id="sg-tab-item-3">
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
			sgNavSelected: 'sg-tab-item-1'
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

// 头部
.mint-header {
	height: auto;
	max-width: $app-max-width;
	margin: 0rem auto;
	padding: 0rem 0.8rem;
	font-size: 1rem;
	.mint-header-button {
		.mint-button {
			height: auto;
			.mint-button-text {
				font-size: $font-size-4;
				vertical-align: 0.05rem;
				@media screen and (min-width: 375px) and (max-width: 413px) {
					vertical-align: 0rem;
				}
			}
		}
	}
	.mint-header-title {
		margin: 0rem;
		padding: 0.8rem 0rem;
		font-size: 1rem;
	}
}

// 导航
.mint-navbar {
	margin: 0rem;
	padding: 0rem;
	border-bottom: $border-width solid $border-color;
	.mint-tab-item {
		padding: 0.8rem 0rem 0.4rem 0rem;
		// font-size: 0.8rem;
		&.is-selected {
			border-bottom: 0.1rem solid #26a2ff;
			margin-bottom: 0;
		}
		.mint-tab-item-label {
			font-size: $font-size-2;
		}
	}
}
</style>