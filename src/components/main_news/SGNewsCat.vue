// 模板
<template>
	<div id="sg-news-cat" ref="demo">
		<ul :style="{maxHeight:sgListMaxHeight}">
			<li v-for="(catItem,index) in catItems" :key="catItem.enName+'_'+index"><a class="sg-cat-item">{{catItem.name}}</a></li>
			<li @click="sgSpreadBtnClick"><a class="sg-cat-item"><svg class="icon" aria-hidden="true" v-html="sgSpreadIcon"></svg></a></li>
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
			sgListMaxHeight: '3.6rem',
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
			sgSpreadIcon: '<use xlink:href="#icon-unfold"></use>'
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
@import "../../assets/css/sg_common.scss";

#sg-news-cat {
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	margin-top: 0.5rem;
	padding: 0rem;
	// background-color: aquamarine;
	ul {
		// background-color: gray;
		display: block;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;

		padding: 0;
		margin: 0 auto;
		width: 90%;

		text-align: left;

		transition: all 0.3s linear;
		li {
			// background-color: aquamarine;
			display: inline-block;
			padding: 0rem;
			margin: 0rem;
			&:last-child { //展开按钮 $body-bg-color
				background-color: $body-bg-color;
				position: absolute;
				bottom: 0rem;
				right: 0.5rem;
				a {
					svg {
						// background-color: red;
						padding: 0.2rem 0 0 0.2rem;
						@media screen and (min-width: 375px) and (max-width: 413px) {
							padding: 0.4rem 0.2rem 0 0rem;
						}
						@media screen and (min-width: 414px) and (max-width: 767px) {
							padding: 0.4rem 0.2rem 0 0rem;
						}
						@media screen and (min-width: 768px) and (max-width: 1023px) {
							padding: 0.4rem 0.2rem 0 0rem;
						}
						@media screen and (min-width: 1024px) {
							padding: 0.4rem 0.2rem 0 0rem;
						}
					}
				}
			}
			a {
				// background-color: antiquewhite;
				display: inline-block;
				padding: 0.4rem 0.7rem;
				text-align: center;
				font-size: $font-size-3;
				// min-width: 1.6rem;
				// min-height: 1.2rem;
				@media screen and (min-width: 375px) and (max-width: 413px) {
					padding: 0.4rem 0.74rem;
				}
				@media screen and (min-width: 414px) and (max-width: 767px) {
					padding: 0.4rem 0.74rem;
				}
				@media screen and (min-width: 768px) and (max-width: 1023px) {
					padding: 0.4rem 0.82rem;
				}
				@media screen and (min-width: 1024px) {
					padding: 0.4rem 0.88rem;
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


