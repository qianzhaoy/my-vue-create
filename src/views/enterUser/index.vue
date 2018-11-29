<template>
  <div>
      <van-field 
        v-model="form.ccId" 
        placeholder="请输入曹操专车ID" 
        label="曹操专车ID"
        required
        v-validate="'required'"
        name="id"
        :error-message="errors.first('id')"
      ></van-field>

      <van-field 
        v-model="form.plateNumber" 
        placeholder="请输入车牌号"
        label="车牌号"
        required
        v-validate="'required'"
        name="车牌号"
        :error-message="errors.first('车牌号')"
      ></van-field>

    <van-field
      v-model="form.couponNumber"
      placeholder="选填"
      label="领券码"
    >
    </van-field>

    <div class="pad20">
      <van-button 
        size="large" 
        class="mt80"
        type="primary"
        round
        :loading="submiting"
        @click="submit"
      >确认完成，领取洗车卷</van-button>
    </div>
  </div>
</template>

<script>
import { Field } from "vant";
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
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
      this.$validator.validate().then(result => {
        if (!result) return;

        this.$router.push("/userInfo");
      });
    }
  }
};
</script>

<style scoped lang="less">
.mt80 {
  margin-top: 80px;
}
</style>
