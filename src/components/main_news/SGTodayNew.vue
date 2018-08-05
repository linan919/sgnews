// 模板
<template>
	<div id="sg-today-new">
		<!-- 左 -->
		<div class="sg-new-left">
			<h5 class="sg-title">{{sgPropNewItem.title}}</h5>
			<div class="sg-sub-titles">
				<span class="sg-author">{{sgPropNewItem.author}}</span>
				<span class="sg-post-time">{{sgPropNewItem.post_time}}</span>
				<span class="sg-comments">{{sgPropNewItem.comments}}跟帖</span>
			</div>
		</div>
		<!-- 右  -->
		<div class="sg-new-right">
			<img id="sg-img" v-lazy="sgPropNewItem.pic" :alt="sgPropNewItem.title">
		</div>
	</div>
</template>





// 脚本
<script>

export default {
	name: 'SGTodayNew',
	props: ['sgPropNewItem'],
	data () {
		return {
			
		}
	},
	computed: {
	},
	mounted () {
	}
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
			span {
				margin-left: 0.1rem;
			}
		}
	}
	.sg-new-right {
		width: 35%;
		height: 100%;
		display: block;
		float: right;
		img {
			width: 100%;
			height: 100%;
			
		}
	}
}
// #sg-img[lazy=loading] {
// 	opacity: 0;
// }
</style>