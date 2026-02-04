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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <p>Mapeamento de tipo</p>
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
        </div>

        <div>
          <p>Formulario</p>
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
        </div>

        <div>
          <p>Feedback visual em tempo real</p>
          <ul>
            <li>Nome completo: {profile.name}</li>
            <li>E-mail: {}</li>
            <li>Senha: {}</li>
            <li>Data de nascimento: {}</li>
            <li>Cargo desejado: {}</li>
            <li>Senioridade: {}</li>
            <li>Modelo de trabalho: {}</li>
            <li>Tipo de contrato: {}</li>
            <li>Apresentacao profissional: {}</li>
            <li>Aceito os termos de uso: {}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
