import api from "../config/api";

export async function criarCaixa(token, produto, quantidade, codigo, valor, descricao, _data,) {
    try {
        const { data } = await api.post('/produto', {

            produto,
            quantidade,
            codigo,
            valor,
            descricao,
            data: _data,

        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return data;
    } catch (err) {
        if (err.response) {
            const { data } = err.response;

            return {
                success: data.success,
                message: data.message,
            };
        } else {
            return {
                success: false,
                message: "falha ao se comunicar com o servidor !!",
            }
        }
    }
}

export async function registerCaixa(token, produto, quantidade, codigo, valor, descricao, _data,) {
    try {
        const { data } = await api.post('/produto', {
            produto,
            quantidade,
            codigo,
            valor,
            descricao,
            data: _data,

        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return data;
    } catch (err) {
        if (err.response) {
            const { data } = err.response;

            return {
                success: data.success,
                message: data.message,

            };
        } else {
            return {
                success: false,
                message: "Falha ao se comunicar com o servidor!"
            };
        }
    }
};
export { };