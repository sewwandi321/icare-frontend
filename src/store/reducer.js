import ACTION_TYPES from "./actionTypes";


const initialState = { 
    dataList:[]
};

export default (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {

        case ACTION_TYPES.SET_DATA_LIST: {
           
            return {
                ...state,
                dataList: payload,
            };
        }
        


        default:
            return state;
    }
};
