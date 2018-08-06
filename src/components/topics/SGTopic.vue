// 模板
<template>
	<div class="sg-topic">
		<!-- 话题 -->
		<div v-if="sgPropTopic.type === 'topic'">
			<h4 class="sg-topic-title">{{sgPropTopic.title}}</h4>
			<div class="sg-topic-pics">
				<img v-for="(tempPic,index) in sgPropTopic.pics" :key="tempPic+index" v-lazy="tempPic" :alt="sgPropTopic.title">
			</div>
			<div class="sg-topic-info">
				<span class="sg-topic-author">{{sgPropTopic.author}}</span>
				<span class="sg-topic-post-time">{{sgPropTopic.post_time}}</span>
				<span class="sg-topic-comments">{{sgPropTopic.comments}}跟帖</span>
			</div>
		</div>
		<!-- 广告 -->
		<div class="sg-ads" v-if="sgPropTopic.type === 'ads'">
			<div class="sg-ads-top">
				<h5 class="sg-ads-title">{{sgPropTopic.title}}</h5>
			</div>
			<div class="sg-ads-bottom">
				<img v-lazy="sgPropTopic.pic" :alt="sgPropTopic.title">
				<span>广告</span>
			</div>
		</div>
	</div>
</template>




// 脚本
<script>
export default {
	name: 'SGTopic',
	props: ['sgPropTopic']
}
</script>




// 样式
<style scoped lang="scss">
@import "../../assets/css/sg_common.scss";
@import "../../assets/css/sg_flexable.scss";

.sg-topic { //$unit-bg-color
	// background-color: gray;
	width: 100%;
	margin: 0;
	padding: 0.5rem 0;
	box-sizing: border-box;
	overflow: hidden;
	text-align: left;
	border-bottom: $border-width solid $border-color;
	.sg-topic-title {
		margin: 0;
		padding: 0.2rem 0;
		font-weight: normal;
		font-size: $font-size-2;
		line-height: $font-size-2 * 1.5;
	}
	.sg-topic-pics {
		// background-color: aqua;
		width: 100%;
		// padding: 0 auto;
		box-sizing: border-box;
		overflow: hidden;
		img {
			// background-color: red;
			width: 32.6%;
			height: 4.4rem;
			margin-right: 0.2rem;
			padding: 0;
			&:last-child {
				margin: 0;
			}
		}
	}
	.sg-topic-info {
		span {
			font-size: $font-size-5;
			color: $text-color-2;
		}
	}

	// 广告
	.sg-ads {
		width: 100%;
		margin: 0;
		padding: 0;
		.sg-ads-top {
			.sg-ads-title {
				margin: 0;
				padding: 0;
				font-weight: normal;
				font-size: $font-size-2;
				line-height: $font-size-2 * 1.5;
			}
		}
		.sg-ads-bottom {
			img {
				width: 100%;
			}
			span {
				font-size: $font-size-5;
				color: $text-color-2;
			}
		}
	}
}
</style>
