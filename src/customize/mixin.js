/**
 * Created by kuo zi on 2016/10/18.
 */
import Vue from "vue";
import resource from "vue-resource";
import restUrl from "./../common/js/restUrl";
Vue.use(resource);

//全局混合
Vue.mixin({
  methods: {
    /**
     *get请求
     * @param restKey restUrl对应的键
     * @param join url拼接
     * @param success 成功回调
     * @param fail 失败回调
     */
    $get(restKey, join, success, fail) {
      this.$http.get(join ? "rest/" + restUrl[restKey].url + join : "rest/" + restUrl[restKey].url).then(function (data) {
        success ? success(data.body) : "";
      }, function () {
        fail ? fail() : "";
      });
    },
    /**
     *post请求
     * @param restKey restUrl对应的键
     * @param params 请求参数
     * @param success 成功回调
     * @param fail 失败回调
     */
    $post(restKey, params, success, fail){
      this.$http.post("rest/" + restUrl[restKey].url, params).then(function (data) {
        success ? success(data.body) : "";
      }, function () {
        fail ? fail() : "";
      });
    }
  }
});
