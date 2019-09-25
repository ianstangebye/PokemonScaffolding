class APIResponse {
    constructor(){
        this.data = null;
        this.success = true;
        this.error = '';
    }

    setData(data){
        this.data = data;
    }

    setSuccess(success){
        this.success = success;
    }

    setError(error){
        this.error = error;
    }
}

module.exports = APIResponse;
//alternative way of instantiation an object 
// module.exports.apiResult = APIResponse;