export default function Pantalla(props) {
  let valor = Number(props.valor);
  let valor1 = 0;

  console.log(valor);

  if (isNaN(valor)) {
    valor1 = valor;
    props.setValor(0);
    console.log("valogo" + valor1);
  }
  return (
    <>
      <h1>{valor}</h1>
    </>
  );
}

/**
 let valor1 = null;
  let valor2 = null;
  let operador = null;

  if (
    valor === "÷" ||
    valor === "+" ||
    valor === "-" ||
    valor === "×" ||
    valor === "+/-" ||
    valor === "AC" ||
    valor === "%"
  ) {
  } else {
  }
 */
