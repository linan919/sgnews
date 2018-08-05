// 模板
<template>
	<div id="sg-today-news">
		<h4>今日要闻</h4>
		<!-- 要闻列表 -->
		<SGTodayNew v-for="(sgNewItem,index) in sgNews" :key="sgNewItem+index" :sgPropNewItem="sgNewItem"></SGTodayNew>
	</div>
</template>




// 脚本
<script>
import SGTodayNew from './SGTodayNew.vue'

export default {
	name: 'SGTodayNews',
	components: {
		SGTodayNew
	},
	data () {
		return {
			picURL: "/static/img/news_pic.jpg",
			sgNews: [ //
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235},
				{title:"燃！各军集结：使命不怠 百炼成军", pic:"./static/img/news_pic.jpg", author:"央视网", post_time:"2小时前", comments:235}
			]
		}
	}
}
</script>




// 样式
<style scoped lang="scss">
@import "../../assets/css/sg_common.scss";
@import "../../assets/css/sg_flexable.scss";

#sg-today-news { //$unit-bg-color
	background-color: $unit-bg-color;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	
	text-align: left;
	margin: 0.6rem 0 0 0;
	padding: 0rem $app-padding;
	overflow: hidden;
	border-top: $border-width solid $border-color;
	border-bottom: $border-width solid $border-color;
	h4 {
		display: block;
		margin: 0rem;
		padding: 1rem 0 0 0;
		font-size: $font-size-1;
	}
}
</style>
