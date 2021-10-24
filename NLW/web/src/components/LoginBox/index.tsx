import { useContext, useEffect } from "react"
import { VscGithubInverted } from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth"
import { api } from "../../services/api"
import styles from "./styles.module.scss"



export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)

  return (
    <div className={styles.LoginBoxWrapper}>
      <strong>Entre e Compartilhe a sua Messagem</strong>
      <a href={signInUrl} className={styles.singInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com o Github</a>

    </div>)
}