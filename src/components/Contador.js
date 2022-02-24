import { useState } from "react";
import "../styles.css";

export default function Contador() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="botao"
      type="button"
      onClick={() => setCount((count) => count + 1)}
    >
      Número de cliques: {count}
    </button>
  );
}
