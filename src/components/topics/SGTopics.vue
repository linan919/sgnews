// 模板
<template>
	<div class="sg-topics">
		<SGTopic v-for="(tempTopic,index) in sgTopicsAds" :key="tempTopic.title+index" :sgPropTopic="tempTopic"></SGTopic>
	</div>
</template>




// 脚本
<script>
import SGTopic from './SGTopic.vue'

export default {
	name: 'SGTopics',
	components: {
		SGTopic
	},
	data () {
		return {
			sgTopics:[
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				},
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				},
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				},
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				},
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				},
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				},
				{
					type: "topic",
					title:"世界未解之谜，中国军人消失50年后突然被发现",
					pics:[
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg",
						"./static/img/news_pic.jpg"
					],
					author:"央视网",
					post_time:"2小时前",
					comments:235
				}
			],
			sgAds: [
				{
					type:"ads",
					index:2,
					title:"中国区终于开放，买苹果不玩真的太可惜了！",
					pic:"https://pg-ad-b1.nosdn.127.net/yixiao/18171/b14b940ad84f47317e72eaf1551c89e8.jpg"
				}
			]
		}
	},
	computed: {
		sgTopicsAds () {
			this.sgAds.forEach(adsItem => {
				this.sgTopics.splice(adsItem.index, 0, adsItem)
			})
			return this.sgTopics
		}
	},
	mounted () {
	}
}
</script>




// 样式
<style scoped lang="scss">
@import "../../assets/css/sg_common.scss";
@import "../../assets/css/sg_flexable.scss";

.sg-topics {
	background-color: $body-bg-color-2;
	width: 100%;
	margin: 0;
	padding: 0.5rem $app-padding 0 $app-padding;
	box-sizing: border-box;
	overflow: hidden;
}
</style>
