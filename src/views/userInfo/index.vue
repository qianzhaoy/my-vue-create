<template>
  <div>
    <van-cell-group>
      <van-cell>
        <template slot="title">
          <img class="ver-cneter mr10" width="50" height="50" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543509980492&di=237fce12feba3dff06675740cdc925c5&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc252937ea7e6dde71191ef6d40.jpg">
          <span>休息休息</span>
        </template>
      </van-cell>
    </van-cell-group>

    <div class="spaceing"></div>

    <van-cell-group>
      <van-cell title="车牌" value="XXXXXXXX" />
    </van-cell-group>

    <div class="spaceing"></div>

    <div class="mt20 pad20">
      <van-button size="large" round type="primary" @click="$router.push('/receiveCoupon')">领取优惠券</van-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ver-cneter {
  vertical-align: middle;
}
.mr10 {
  margin-right: 10px;
}
</style>
