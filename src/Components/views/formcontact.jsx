import React, { useState } from "react";
import { db } from "../firebase";

export default function ContatoDev() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Mensagem enviada com sucesso 😉.");
        setLoader(false);
      })
      .catch((error) => {
        alert("Não foi possivel enviar sua mensagem 😭." + error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contactform-div">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Me envie uma mensagem através desse formulário</h2>

        <div className="form-camp">
          <div className="form-camp-header">
            <i className="far fa-user"></i>
            <label>Nome</label>
          </div>
          <input
            className="form-input"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-camp">
          <div className="form-camp-header">
            <i className="far fa-envelope"></i>
            <label>Email</label>
          </div>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-camp">
          <div className="form-camp-header">
            <i className="far fa-pen"></i>
            <label>Mensagem</label>
          </div>
          <textarea
            className="form-input"
            type="text"
            placeholder="Mensagem"
            rows="4"
            cols="30"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ background: loader ? "#81C784" : "#F06292" }}
        >
          {loader ? "Enviando" : "Enviar"}
        </button>
      </form>
    </div>
  );
}
