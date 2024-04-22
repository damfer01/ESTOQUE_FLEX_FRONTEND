import api from "../../config/api";
import { GridView, Section, SelectGridView, } from "./style";
import { useEffect, useState } from "react";
import { Button } from "../../components/Card/ButtonCard";
import { CardAdicionar } from "../../components/Card/CardAdicionar/CardAdicionar ";

import { CardLocal } from "../../components/Card/CardLocal/CardLocal";
import { VisualCaixa } from "../../components/Card/VisualCaixa/VisualCaixa";

import { PesquisaStyle } from "../../components/BarraDePesquisa/Pesquisa";
import { useStore } from "../../store";
import Patrocinio from "../../components/ButtonPatrocinio/Patrocinio";



export default function Home() {
  const {
    user,
  } = useStore();
  const [showCard, setShowCard] = useState(false);

  const [caixa, setCaixa] = useState(null);

  const [caixas, setCaixas] = useState([]);

  const [search, setSearch] = useState('')

  const [pesquisar, setPesquisar] = useState([])

  async function loadCaixas() {
    try {
      const { data: { result } } = await api.get('/produto', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }); // api.delete(`/caixa/${id}`)

      setCaixas(result)
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

  useEffect(() => {
    if (caixa === null || !showCard) {
      loadCaixas();
    }
  }, [caixa, showCard]);


  const handleDelete = (id) => {
    setCaixas((caixas) => caixas.filter((caixa) => caixa._id !== id))

    setCaixa(null);
  }

  function handleSearch(event) {
    const query = event.target.value

    setPesquisar(query)
    setSearch(query)
  }

  return (
    <Section>
      <SelectGridView>

        <Patrocinio />

        <Button
          type="submit"
          onClick={() => setShowCard(true)}
        >
          adicionar +
        </Button>


        <PesquisaStyle >
          <input placeholder='Busque :' onChange={(e) => setSearch(e.target.value)}></input>
        </PesquisaStyle >



      </SelectGridView>


      VISUAL PRODUTOS :  {/* DAQUI PRA BAIXO VAI SER O VISUAL DOS PROSDUTOS  */}

      <GridView  >
        {
          caixas.filter(
            caixa =>
              caixa.produto.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              caixa.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              caixa.codigo.some((codigos) => codigos.codigo.includes(search))
          ).map((caixa) => (

            <CardLocal onClick={() => setCaixa(caixa)}

              {...caixa}
              key={caixa._id}
            />  /* AQUI VAI APARECE OS PRODUTOS  */
          ))
        }


      </GridView>

      <VisualCaixa caixa={caixa} onClose={() => setCaixa(null)} />  {/* aqui vai ser o CARD_EDITAR */}


      <CardAdicionar showCard={showCard} onClose={() => setShowCard(false)} />   {/* aqui vai ser o CARD_ADICIONAR */}

    </Section>
  );

};