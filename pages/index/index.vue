<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
      <text>{{time | formatTimestamp}}</text>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        time: '',
				title: '首页'
			}
		},
    onReady() {
      console.log('进来index')
    },
		onLoad() {
      // promise方式
      uniCloud.callFunction({
        name: 'getData',
        data: { a: 1 }
      })
      .then(res => {
        console.log('ressss', res)
      })
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 50rpx;
	}
</style>
