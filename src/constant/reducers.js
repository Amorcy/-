var rootTree={
     txt:{          type:'TXT',
                    index:'',
    		            textValue:'物美店庆大酬宾欢迎您！',
                    textUpper:false,
                    textFamily:'',
                    textAlign:'center',
                    textWeight:false
    	 },
    	 stores:{
                    id:'',
                    type:'HY',
                    index:'',
                    shows:[],
                    options:[]
                },

    	footers:{
                    id:'',
                    type:'Ht',
                    index:'',
                    shows:[],
                    options:[]
      },
      infos:{
                    type:'CELL',
                    index:'',
                    shows:[],
                    options:[]
      },
      img:{
                     type:'IMG',
                     index:'',
                     imgUrl:''
      },
      sendData:[]
};
const reducers = (state = rootTree, action) => {
  var TYPE = action.type;
  const length = rootTree.sendData.length;
  switch (TYPE) {
        case "SHARE_TXT_ACTION":
            state.txt= action.data;
            rootTree.sendData.unshift(state.txt)
            break;
        case "SHARE_HY_ACTION":
            state.stores=action.data;
            rootTree.sendData.unshift(state.stores)
            break;
        case "SHARE_FT_ACTION":
            state.footers=action.data;
            rootTree.sendData.unshift(state.footers)
            break;
        case "SHARE_CELL_ACTION":
            state.infos=action.data;
            rootTree.sendData.unshift(state.infos)
            break;
      case "SHARE_IMG_ACTION":
            state.img=action.data;
            rootTree.sendData.unshift(state.img)
            break;
    }
    var hash = {}
    rootTree.sendData = rootTree.sendData.reduce(function (item,next) {
      hash[next.id]?'':hash[next.id]=true&&item.unshift(next)
      return item
    },[])
    console.log(rootTree.sendData)
    return state;
};

export default reducers;
