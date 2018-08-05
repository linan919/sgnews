// 模板
<template>
	<div id="sg-today-news">
		<h4>今日要闻</h4>
		<!-- 要闻列表 -->
		<SGTodayNew></SGTodayNew>
		<SGTodayNew></SGTodayNew>
	</div>
</template>




// 脚本
<script>
import SGTodayNew from './SGTodayNew.vue'

export default {
	name: 'SGTodayNews',
	components: {
		SGTodayNew
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
