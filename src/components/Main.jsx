import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState();
  const [listadeContatos, setLista] = useState([]);

  const registrar = () => {
    event.preventDefault();
    alert("olá");
    setListaContato([
      ...listadeContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: telefone,
      },
    ]);
  };
  console.table(listadeContatos);
  return (
    <main>
      <form action="" onSubmit={registrar}>
        <input
          type="text"
          name=""
          id="nome"
          onChange={(event) => setNome(event.target.value)}
        />
        {nome}
        <input
          type="text"
          telefone-contato=""
          id="telefone"
          onChange={(event) => setNumber(event.target.value)}
        />
        {telefone}
        <button>enviar</button>
      </form>
    </main>
  );
}
