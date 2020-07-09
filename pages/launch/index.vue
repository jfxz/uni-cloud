<template>
	<view>
    <view class="status_bar">
       <!-- 这里是状态栏 -->
    </view>
    <view class="navigation-bar">
      <view class="cu-bar search bg-white">
      	<view class="search-form round">
      		<text class="cuIcon-search"></text>
      		<input :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
      	</view>
      	<view class="action">
      		<button class="cu-btn bg-green shadow-blur round">搜索</button>
      	</view>
      </view>
    </view>
    
    <!-- <component :is="currentTab"></component> -->
		<view class="cu-bar tabbar bg-white">
			<view class="action" v-for="(item, index) in pageConfig" :key="index" @tap="tabClick(item)">
				<view class="cuIcon-cu-image">
					<image :src="`/static/tabbar/${currentTab === item.pageName ? item.iconName + '_cur' : item.iconName}.png`">
          </image>
				</view>
				<view :class="[`text-${currentTab === item.pageName ? 'green' : 'gray'}`]">{{item.pageLabel}}</view>
			</view>
		</view>
	</view>
</template>

<script>
  import index from '../index/index.vue'
  import order from '../order/index.vue'
  import my from '../my/index.vue'
	export default {
    components: {index, order, my},
		data() {
			return {
        pageConfig: [
          {pageLabel: '首页', pageName: 'index', iconName: 'basics'},
          {pageLabel: '订单', pageName: 'order', iconName: 'component'},
          {pageLabel: '我的', pageName: 'my', iconName: 'plugin'},
        ],
        currentTab: 'index'
			}
		},
    onReady() {
      console.log('launch')
    },
		onLoad() {
		},
		methods: {
      tabClick (item) {
        this.currentTab = item.pageName
        uni.setNavigationBarTitle({
            title: item.pageLabel
        });
      }
		}
	}
</script>

<style lang="scss">
</style>
