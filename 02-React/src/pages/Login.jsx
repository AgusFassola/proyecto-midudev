import { useId } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";

import style from "./Login.module.css";

export default function Login() {

    const { login } = useAuthStore();
    const navigate = useNavigate();

  const passwordId = useId();
  const emailId = useId();

  function handleSubmit(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get(emailId);
    const password = formData.get(passwordId);

    if (email && password){
      login();
      navigate("/profile");
    }
  }

  return (
    <div className={style.container}>
      <div className={style.card}>

        <h1 className={style.title}>Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className={style.form}>

          <label>Email</label>
          <input
            type="email"
            placeholder="tu@email.com"
            name={emailId}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="********"
            name={passwordId}
          />

          <button type="submit">
            Iniciar sesión
          </button>

        </form>

      </div>
    </div>
  );
}