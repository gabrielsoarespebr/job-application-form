import { useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    // email: "",
    // password: "",
    // birthdate: "",
    // position: "",
    // level: "",
    // ...
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <ul>
        <li>Nome completo - input text</li>
        <li>E-mail - input email</li>
        <li>Senha - input password</li>
        <li>Data de nascimento - input date</li>
        <li>Cargo desejado - select multiple</li>
        <li>Senioridade - select simples</li>
        <li>Modelo de trabalho - input checkbox</li>
        <li>Tipo de contrato - input radio</li>
        <li>Apresentacao profissional - textarea</li>
        <li>Aceito os termos de uso - input checkbox</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default App;
