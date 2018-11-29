<template>
  <div>
    <van-field 
      v-model="form.ccId" 
      placeholder="请输入曹操专车ID" 
      label="曹操专车ID"
    ></van-field>
    <van-field 
      v-model="form.plateNumber" 
      placeholder="请输入车牌号"
      label="车牌号"
    ></van-field>
    <van-field
      v-model="form.couponNumber"
      placeholder="选填"
      label="领券码"
    >
    </van-field> 

    <van-button 
      size="large" 
      class="mt80"
      type="primary"
      round
      :loading="submiting"
      @click="submit"
    >确认完成，领取洗车卷</van-button>
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
      submiting: false,
      form: {
        ccId: "",
        plateNumber: "",
        couponNumber: ""
      }
    };
  },

  methods: {
    submit() {
      console.log(this.$reqPost);
    }
  }
};
</script>

<style scoped lang="scss">
.mt80 {
  margin-top: 80px;
}
</style>
