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
            state.sendData.forEach(function (i, index) {
              if(state.sendData[index].id == state.txt.id){
                state.sendData[index] = state.txt
              }else {
                state.sendData[length] = state.txt
              }
            })
            break;
        case "SHARE_HY_ACTION":
            state.stores=action.data;

            rootTree.sendData.push(state.stores)
            console.log(rootTree.sendData)
            rootTree.sendData.forEach(function (i, index) {
              console.log(rootTree.sendData[index].id)
              console.log(state.stores.id);
              if(rootTree.sendData[index].id == state.stores.id){
                console.log('come')
                  rootTree.sendData.splice(index,1,state.stores)
              }
            })

            console.log(rootTree.sendData)
          break;
        case "SHARE_FT_ACTION":
            state.footers=action.data;
            if(state.sendData.length){
              state.sendData.forEach(function (i, index) {
                if(state.sendData[index].id == state.footers.id){
                  state.sendData[index] = state.footers
                }else {
                  state.sendData[length] = state.footers
                }
              })
            }else{
              state.sendData.push(state.footers)
            }

          break;
        case "SHARE_CELL_ACTION":
            state.infos=action.data;
            if(state.sendData.length){
              state.sendData.forEach(function (i, index) {
                if(state.sendData[index].id == state.infos.id){
                  state.sendData[index] = state.infos
                }else {
                  state.sendData[length] = state.infos
                }
              })
            }else {
              state.sendData.push(state.infos)
            }

          break;
      case "SHARE_IMG_ACTION":
        state.img=action.data;
        if (state.sendData.length){
          state.sendData.forEach(function (i, index) {
            if(state.sendData[index].id == state.img.id){
              state.sendData[index] = state.img
            }else {
              state.sendData[ length] = state.img
            }
          })
        }else {
          state.sendData.push(state.img)
        }
        break;
    }
    return state;
};

export default reducers;
