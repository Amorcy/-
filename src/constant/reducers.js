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
                      type:'HY',
                      index:'',
                      shows:[],
                      options:[]
                },

    	footers:{},
        infos:{
                        type:'CELL',
                        index:'',
                        shows:[],
                        options:[]
        },
};
const reducers = (state = rootTree, action) => {
    var TYPE = action.type;
    switch (TYPE) {
        case "SHARE_TXT_ACTION":
            state.txt= action.data;
            break;
        case "SHARE_HY_ACTION":
            state.stores=action.data;
            break;    
        case "SHARE_FT_ACTION":
            state.footers=action.data;
            break;
        case "SHARE_CELL_ACTION":
            state.infos=action.data;
            break;        
       }
    return state;   
};     

export default reducers;       