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

<style lang="scss">
  @import "./styles/color-ui/main.css";
  @import "./styles/color-ui/icon.css";
  page {
    height: calc(100vh - (100upx + env(safe-area-inset-bottom) / 2));
    // background: #f;
    // background: linear-gradient(to bottom, #1890ff 5%, #f4f5f6 95%);
    .navigation-bar {
      position: fixed;
      top: var(--status-bar-height);
      left: 0;
      width: 100%;
    }
  }
	/*每个页面公共css */
  /* @import "./styles/common.css"; */
  /* colorUi */
  
</style>
