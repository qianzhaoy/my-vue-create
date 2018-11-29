<template>
  <div>
    <div class="pos-center">
      <van-field 
        v-model="couponId" 
        placeholder="请输入领券码" 
        label="领券码"
        v-validate="'required'"
        name="领券码"
        :error-message="errors.first('领券码')"
      ></van-field>

      <div class="mt20 pad20">
        <van-button size="large" round type="primary" @click="submit">领取优惠券</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from "vant";
export default {
  components: {
    [Field.name]: Field
  },

  data() {
    return {
      couponId: ""
    };
  },

  methods: {
    submit() {
      this.$validator.validate().then(result => {
        if (!result) return;

        this.$router.push("/userInfo");
      });
    }
  }
};
</script>

<style lang="less" scoped>
.pos-center {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}
</style>
