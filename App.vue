<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	/*引入iconfont图标*/
	@import url("./assets/style/iconfont.css");

	/*引入animate动画*/
	@import url("./assets/style/animate.css");

	/*引入默认样式表*/
	@import url("./assets/style/free.css");

	html,body,#app{
		width: 100%;
		height: 100%;
	}
	uni-page-wrapper,uni-page-body{
		width: 100%;
		height: 100%;
	}
</style>
