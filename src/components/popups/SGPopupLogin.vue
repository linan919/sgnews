// 模板
<template>
	<div class="sg-popup-login">
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
	</div>
</template>



// 脚本
<script>
export default {
	name: 'SGPopupLogin',
	data () {
		return {
			email: ''
		}
	}
}
</script>



// 样式
<style scoped lang="scss">
@import "../../assets/css/sg_common.scss";
@import "../../assets/css/sg_flexable.scss";

.sg-popup-login {
	.mint-field {
		width: 100%;
		border: 1px solid $border-color;
		padding: 0.5rem;
	}
}

</style>
