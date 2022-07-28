import React from "react";
import { Box, Botao } from "../ui";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ type, date, from, id, value }) => {
        return (
          <Items key={id} type={type} date={date} from={from} value={value} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
