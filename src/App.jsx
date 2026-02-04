import { useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
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
      <div className="page">
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

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={profile.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              value={profile.password}
              onChange={handleChange}
            />

            <label htmlFor="birthdate">Data de nascimento</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              value={profile.birthdate}
              onChange={handleChange}
            />
          </form>
        </div>

        <div>
          <p>Feedback visual em tempo real</p>
          <ul>
            <li>Nome completo: {profile.name}</li>
            <li>E-mail: {profile.email}</li>
            <li>Senha: {profile.password}</li>
            <li>Data de nascimento: {profile.birthdate}</li>
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
