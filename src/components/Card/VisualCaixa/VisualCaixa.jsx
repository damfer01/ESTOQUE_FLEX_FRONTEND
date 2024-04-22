import api from "../../../config/api";
import { format } from "date-fns"

import { VisualSttyle } from "./VisualStyle";

import { X } from 'lucide-react';
import { useStore } from "../../../store";
import { jsx } from "react/jsx-runtime";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CaixaSchema from "../../../schema/Caixa/CaixaSchema";


export function VisualCaixa({ caixa, onClose }) {
  const {
    handleSubmit,
    reset,
    register,
    formState: {
      isValid,
    }
  } = useForm({
    resolver: yupResolver(CaixaSchema),
    mode: 'onChange',
  })

  const {
    user,
  } = useStore();

  async function deleteProduto() {
    try {
      await api.delete(`/produto/${caixa._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      });


      onClose();
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

  async function updateProduto() {
    try {
      await api.put(`/produto/${caixa._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      });


      onClose();
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

  return caixa !== null ? (

    <VisualSttyle open   >

      <button onClick={onClose}><X /></button>
      <div>
        <span>produto :{caixa.produto}</span>
      </div >
      <span className="pecas">quantidade :{caixa.quantidade}</span>
      {
        caixa.codigo.map((cod, index) => (
          <div   >
            <span className="codigo">codigo :{cod.codigo}</span>
          </div>
        ))
      }
      {
        caixa.valor.map((cod, index) => (
          <div key={index}  >
            <span className="foco">compra :{cod.compra}</span>
            <span className="foco">venda :{cod.venda}</span>
          </div>
        ))
      }
      <span className="data">{format(caixa.data, "dd/MM/yyyy")}</span>
      <span className="pecas">descricao :{caixa.descricao}</span>

      <button className="editar" onClick={updateProduto}>editar</button>

      <button id="excluir" onClick={deleteProduto}>excluir</button>

    </VisualSttyle>
  ) : <></>
}