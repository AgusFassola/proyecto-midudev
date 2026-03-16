import { useId } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";
import style from "./Register.module.css";

export default function Register(){

    const { login } = useAuthStore();
    const navigate = useNavigate();

    const nameId = useId();
    const passwordId = useId();
    const emailId = useId();

  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get(nameId);
    const email = formData.get(emailId);
    const password = formData.get(passwordId);

    if (email && password && name ){
      login();
      navigate("/profile");
    }

  }

  return(

    <div className={style.container}>
      <div className={style.card}>

        <h1 className={style.title}>Crear cuenta</h1>

        <form onSubmit={handleSubmit} className={style.form}>

          <label>Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            name={nameId}
          />

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
            Registrarse
          </button>

        </form>

      </div>
    </div>

  );
}