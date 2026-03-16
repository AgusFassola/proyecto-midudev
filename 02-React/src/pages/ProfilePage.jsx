import React from 'react'

import style from "./Profile.module.css";

export default function ProfilePage(){

  const user = {
    name:"Agustín",
    email:"agus@email.com",
    location:"Argentina",
    stack:"React / Node"
  }

 // const { logout } = useAuthStore();

  return(

    <div className={style.container}>

      <div className={style.card}>

        <h1 className={style.title}>
          Perfil de usuario
        </h1>

        <div className={style.info}>

          <div className={style.row}>
            <span>Nombre</span>
            <p>{user.name}</p>
          </div>

          <div className={style.row}>
            <span>Email</span>
            <p>{user.email}</p>
          </div>

          <div className={style.row}>
            <span>Ubicación</span>
            <p>{user.location}</p>
          </div>

          <div className={style.row}>
            <span>Stack</span>
            <p>{user.stack}</p>
          </div>

        </div>

        <button>
          Editar perfil
        </button>

      </div>

    </div>

  )
}