import { api } from "../../services/api";

import styles from "./styles.module.scss";
import io from "socket.io-client"
import logoImage from "../../assets/logo.svg"

import { useEffect, useState } from "react";

type Messages = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

const socket = io("http://localhost:4000");

socket.on("new-message", newMessage => {
  alert(newMessage)
})


export function MessageList(): JSX.Element {
  const [messages, setMessages] = useState<Messages[]>([])

  useEffect(() => {
    api.get<Messages[]>('/messages/last3').then(response => { setMessages(response.data) })
  }, [])

  return (
    <div className={styles.MessageListWrapper}>
      <img src={logoImage} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.map(messages => {
          return (
            <li key={messages.id} className={styles.message}>
              <p className={styles.messageContent}>{messages.text}  </p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={messages.user.avatar_url} alt={messages.user.name} />
                </div>
                <span>{messages.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}