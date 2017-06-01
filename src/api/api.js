var Api=(()=>{
   
   var _LOCL_KEY=localStorage;

   var saveToken=(_save_token)=>{
       for(var key in _save_token){
           _LOCL_KEY.setItem(key,_save_token[key]);
       }
        return {
        	msg:'保存成功'
        };
   }
   var updateToken=(_update_token)=>{
   	   if(_LOCL_KEY.length==0){
            return {msg:'不存在请先保存'}
   	   }else{
   	   	    for(var key in _LOCL_KEY){
                _LOCL_KEY.setItem(key,_update_token[key]);
   	   	    }
   	   	    return {
   	   	    	msg:'更新成功'
   	   	    }
   	   }
   }

   var readToken=(key)=>{
       return _LOCL_KEY[key];
   }

   var saveUserInfo=function(_user_token){
       for(var key in _user_token){
           _LOCL_KEY.setItem(key,_user_token[key]);
       }
        return {
        	msg:'保存成功'
        };
   }

   var readUserInfo=(key)=>{
        return _LOCL_KEY[key];
   }

   var updateUserInfo=(_user_info)=>{
        if(_LOCL_KEY.length==0){
            return {msg:'不存在请先保存'}
   	   }else{
   	   	    for(var key in _LOCL_KEY){
                _LOCL_KEY.setItem(key,_user_info[key]);
   	   	    }
   	   	    return {
   	   	    	msg:'更新成功'
   	   	    }
   	   }
   }
   var formFormat=(data)=>{
       var s='';
       for(var key in data){
         s+=key+'='+data[key]+'&';
       }
       var length=s.length;
       s=s.substring(0,length-1);
       return s;
   }
   var getLocalStorage=function(){
       return localStorage;
   }
   var getToken=function(){
    var _token=Api.readToken('token_type')+' '+Api.readToken('access_token');
    return _token;
   }
   

   return {
   	saveToken:saveToken,
   	updateToken:updateToken,
   	readToken:readToken,
   	saveUserInfo:saveUserInfo,
   	readUserInfo:readUserInfo,
   	updateUserInfo:updateUserInfo,
   	formFormat:formFormat,
    getLocalStorage:getLocalStorage,
    getToken:getToken
   }

})();

module.exports = Api;