export default (state , action = null ) => {

    switch(action.type){

        case 'select_library':{

            console.log("*** This is Action ***\n" + action.payload.select_library);
            return action.payload.librayId;

        }
        default:{

            return "A";

        }
    }

}