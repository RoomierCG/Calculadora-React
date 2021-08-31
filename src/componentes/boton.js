export default function Boton(props) {
  return (
    <button
      className={props.estilo}
      onClick={() => props.setValor((props.valorTotal += props.valor))}
    >
      {props.valor}
    </button>
  );
}
