<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
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
	.page-bg{
		position: fixed;
        top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		z-index: -1;
	}
</style>
