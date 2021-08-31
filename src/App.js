import "./styles.css";
import { CssBaseline } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Pantalla from "./componentes/pantalla";
import Botones from "./componentes/GirdBotones";
import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);

  return (
    <div className="App">
      <CssBaseline />
      <Grid container justifyContent="center" className="contenedor">
        <Grid container item xs={9} justifyContent="center" spacing={2}>
          <Grid container item xs={12} justifyContent="center">
            <Pantalla valor={valor} setValor={setValor} />
          </Grid>
          <Grid container item xs={12} md={6} spacing={2}>
            <Botones setValor={setValor} valor={valor} />
          </Grid>
          <p>Work in progress</p>
        </Grid>
      </Grid>
    </div>
  );
}
