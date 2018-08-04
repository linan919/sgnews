// 模板
<template>
	<div id="sg-news-cat">
		<ul :style="{maxHeight:sgListMaxHeight}">
			<li v-for="(catItem,index) in catItems" :key="catItem.enName+'_'+index"><a>{{catItem.name}}</a></li>
			<li @click="sgSpreadBtnClick"><a><svg class="icon" aria-hidden="true" v-html="sgSpreadIcon"></svg></a></li>
		</ul>
	</div>
</template>







// 脚本
<script>
export default {
	name: 'SGNewsCat',
	data () {
		return {
			// 分类展开样式
			sgListMaxHeight: '8rem',
			// 分类项目数组 
			catItems: [
				{name:"本地",enName:"locale"},
				{name:"娱乐",enName:"yule"},
				{name:"体育",enName:"sports"},
				{name:"财经",enName:"economy"},
				{name:"汽车",enName:"cars"},
				{name:"军事",enName:"military"},
				{name:"科技",enName:"science"},
				{name:"手机",enName:"phone"},
				{name:"数码",enName:"digit"},
				{name:"时尚",enName:"fashion"},
				{name:"游戏",enName:"games"},
				{name:"教育",enName:"education"},
				{name:"艺术",enName:"art"},
				{name:"直播",enName:"live"},
				{name:"段子",enName:"duanzi"},
				{name:"视频",enName:"video"},
				{name:"图片",enName:"pictures"},
				{name:"手机",enName:"phone"},
				{name:"数码",enName:"digit"},
				{name:"时尚",enName:"fashion"},
				{name:"游戏",enName:"games"},
				{name:"教育",enName:"education"},
				{name:"艺术",enName:"art"}
			],
			sgSpreadIcon: '<use xlink:href="#icon-fold"></use>'
		}
	},
	methods: {
		// 展开按钮
		sgSpreadBtnClick () {
			if(this.sgListMaxHeight === '3.6rem'){
				this.sgListMaxHeight = '8rem'
				this.sgSpreadIcon = '<use xlink:href="#icon-fold"></use>'
			}else{
				this.sgListMaxHeight = '3.6rem'
				this.sgSpreadIcon = '<use xlink:href="#icon-unfold"></use>'
			}
		}
	}
}
</script>







// 样式
<style scoped lang="scss">
@import "../assets/css/sg_common.scss";

#sg-news-cat {
	width: 100%;
	// background-color: aquamarine;
	ul {
		// background-color: antiquewhite;
		display: block;
		text-align: left;
		padding: 0rem;
		margin: 0.2rem 0rem 0rem 0rem;
		position: relative;
		overflow: hidden;
		transition: all 0.3s linear;
		li {
			// background-color: aquamarine;
			display: inline-block;
			padding: 0rem;
			margin: 0rem;
			&:last-child {
				background-color: $body-bg-color;
				position: absolute;
				bottom: 0rem;
				right: 1.5rem;
				@media screen and (min-width: 768px) and (max-width: 1023px) {
					right: 1.66rem;
				}
				@media screen and (min-width: 1024px) {
					// right: 2.8rem;
				}
			}
			a {
				// background-color: antiquewhite;
				display: inline-block;
				padding: 0.6rem 0rem 0rem 1.28rem;
				text-align: center;
				font-size: 0.9rem;
				min-width: 1.6rem;
				min-height: 1.2rem;
				@media screen and (min-width: 375px) and (max-width: 413px) {
					font-size: 0.85rem;
					padding-left: 1.5rem;
				}
				@media screen and (min-width: 414px) and (max-width: 767px) {
					font-size: 0.9rem;
					padding-left: 1.4rem;
				}
				@media screen and (min-width: 768px) and (max-width: 1023px) {
					font-size: 0.95rem;
					padding-left: 1.48rem;
				}
				@media screen and (min-width: 1024px) {
					font-size: 0.91rem;
					padding-left: 1.66rem;
				}
				.icon {
					vertical-align: 0rem;
					padding: 0.2rem 0.3rem 0 0;
				}
			}
		}
	}
}
</style>


