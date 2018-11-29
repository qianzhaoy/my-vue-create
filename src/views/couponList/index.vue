<template>
  <div>
    <van-coupon-list
      :coupons="coupons"
      :disabled-coupons="disabledCoupons"
      :show-close-button="false"
      :show-exchange-bar="false"
      @change="onChange"
    />
  </div>
</template>

<script>
import { CouponList } from "vant";

const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000
};

export default {
  components: {
    [CouponList.name]: CouponList
  },

  data() {
    return {
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },

  methods: {
    onChange(index) {
      console.log(index);
    }
  }
};
</script>
