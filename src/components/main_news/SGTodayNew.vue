// 模板
<template>
	<div id="sg-today-new">
		<div class="sg-new-left">
			<h5 class="sg-title">新闻标题标题标题新闻标题标题标题新闻标题标题标题233</h5>
			<div class="sg-sub-titles">
				<span class="sg-author">央视新闻</span>
				<span class="sg-post-time">2小时前</span>
				<span class="sg-comments">253评论</span>
			</div>
		</div>
		<div class="sg-new-right">
			<img src="../../assets/img/news_pic.jpg" alt="新闻图片">
		</div>
	</div>
</template>





// 脚本
<script>
export default {
	name: 'SGTodayNew'
}
</script>




// 样式
<style scoped lang="scss">
@import "../../assets/css/sg_common.scss";
@import "../../assets/css/sg_flexable.scss";

#sg-today-new {
	// background-color:aqua;
	width: 100%;
	height: 4.4rem;
	// box-sizing: border-box;
	overflow: hidden;

	text-align: left;
	margin: 0;
	padding: 0.8rem 0;
	border-bottom: $border-color solid $border-width;
	.sg-new-left {
		width: 65%;
		height: 100%;
		display: inline-block;
		box-sizing: border-box;
		overflow: hidden;
		padding: 0.1rem 0.2rem 0.1rem 0;
		.sg-title {
			margin: 0rem;
			padding: 0rem;
			font-weight: normal;
			font-size: $font-size-2;
			line-height: $font-size-2 * 1.5;
		}
		.sg-sub-titles {
			padding-top: 0.2rem;
			font-size: $font-size-5;
			color: $text-color-2;
		}
	}
	.sg-new-right {
		width: 35%;
		height: 100%;
		display: inline-block;
		float: right;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>