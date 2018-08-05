// 模板
<template>
	<div class="sg-today-new">
		<!-- 新闻 -->
		<div class="sg-new" v-if="sgPropNewItem.type === 'new'">
			<!-- 左 -->
			<div class="sg-new-left">
				<h5 class="sg-title">{{sgPropNewItem.title}}</h5>
				<div class="sg-sub-titles">
					<span class="sg-author">{{sgPropNewItem.author}}</span>
					<span class="sg-post-time">{{sgPropNewItem.post_time}}</span>
					<span class="sg-comments">{{sgPropNewItem.comments}}跟帖</span>
				</div>
			</div>
			<!-- 右 -->
			<div class="sg-new-right">
				<img v-lazy="sgPropNewItem.pic" :alt="sgPropNewItem.title">
			</div>
		</div>
		<!-- 广告 -->
		<div class="sg-ads" v-if="sgPropNewItem.type === 'ads'">
			<div class="sg-ads-top">
				<h5 class="sg-ads-title">{{sgPropNewItem.title}}</h5>
			</div>
			<div class="sg-ads-bottom">
				<img v-lazy="sgPropNewItem.pic" :alt="sgPropNewItem.title">
				<span>广告</span>
			</div>
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
		console.log(this.sgPropNewItem)
	}
}
</script>



// 样式
<style scoped lang="scss">
@import "../../assets/css/sg_common.scss";
@import "../../assets/css/sg_flexable.scss";


.sg-today-new {
	width: 100%;
	box-sizing: border-box;
	text-align: left;
	margin: 0;
	border-bottom: $border-color solid $border-width;
	.sg-new {
		// background-color:aqua;
		width: 100%;
		height: 4.4rem;
		margin: 0;
		padding: 0.8rem 0;
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

	// 广告
	.sg-ads {
		width: 100%;
		// height: 4.4rem;
		margin: 0;
		padding: 0.8rem 0;
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