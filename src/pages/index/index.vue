<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<text class="iconfont icon-star-fill star-o"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			if(process.env.NODE_ENV === 'development'){
				console.log('开发环境')
			}else{
				console.log('生产环境')
			}
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.star-o {
		font-size: 36rpx;
	}
</style>
