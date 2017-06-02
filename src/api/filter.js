exports.install = function(Vue,option){
  Vue.prototype.filterStatus = function(flag,val){
    var res = "";
    if(flag ==0){
      if(val==0){
        res =  "未开通";
      }else{
        res =  "开通";
      }
    }else{
      if(val==0){
        res =  "待审核";
      }else if(val==1){
        res =  "已审核";
      }else{
        res =  "已拒绝";
      }
    }
    return res;
  };
};
