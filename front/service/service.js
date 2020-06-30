import Vue from "vue";
export default {
  /*
    url:请求路径
    params:参数object
    type:'urlencoded','formdata'以及其他可直接解析的默认type
  */
  post: (url, params, type) => {
    let paramList;
    switch (type) {
      case 'urlencoded':
        paramList = new URLSearchParams();
        for (let p in params) {
          paramList.append(p, params[p]);
        }
        break;
      case 'formdata':
        paramList = new new FormData();
        for (let p in params) {
          paramList.append(p, params[p]);
        }
        break;
      default:
        paramList = params;
    }
    return Vue.axios.post(url, paramList);
  },
  get: (url, params) => {
    return Vue.axios.get(url, {
      params
    })
  }
}