import Boton from "./boton";
import { Grid } from "@material-ui/core";

const simbolos = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+"
];

export default function App(props) {
  const boton = simbolos.map((number) => {
    let style = "";

    if (Number(number)) {
      style = "botonGenerico";
    } else if (
      number === "÷" ||
      number === "+" ||
      number === "-" ||
      number === "×"
    ) {
      style = "botonLateral";
    } else {
      style = "botonSuperior";
    }

    return (
      <Grid key={number} item container justifyContent="center" xs={3}>
        <Boton
          valor={number}
          estilo={style}
          setValor={props.setValor}
          valorTotal={props.valor}
        ></Boton>
      </Grid>
    );
  });

  return boton;
}
