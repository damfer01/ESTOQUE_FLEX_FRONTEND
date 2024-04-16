import api  from "../config/api";

export async function login (usuario , password){
    try{
        const{data} = await api.post('/auth/login',{
            usuario,
            password,
        });
        return data;
    } catch (err){
        if(err.response){
            const {data} = err.response;

            return{
                success: data.success,
                message: data.message,
            };
        }else{
            return{
                success: false ,
                message: "falha ao se comunicar com o servidor !!",
            }
        }
    }
}

export async function register(  usuario, password , confirmPassword){
    try {
        const {data} = await api.post('/auth/register' , {
            usuario,
            password,
            confirmPassword,
        });
        return data;
    }catch (err){
        if(err.response) {
            const {data} = err.response;

            return{
                success:data.success,
                message: data.message,

            };
        }else{
            return {
                success:false,
                message:"Falha ao se comunicar com o servidor!"
            };
        }
    }
};
export{};