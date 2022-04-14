import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Home = () => {
  interface Message {
    name:string,
    text:string,
      }
  const socket = io('http://localhost:3000')
  const [messages, setMessages] = useState<Message[]>([])
  const [name, setName] = useState('');
  const [text, setText] = useState('');


  

  useEffect(() => {
    socket.on('msgToClient', (msg: { name: string, text: string }) => {
      setMessages(arr=>[...arr,msg])
    })
    
  }, [])

  const sendMessage = () => {
    if (name && text) {
      socket.emit('msgToServer', { name, text })
      setText('')
    }
  }

  return (
    <div className="bg-green-400 ">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => sendMessage()} type="button">Send</button>
      <ul>
        {messages.map((msg, index) => <li key={index}>
          {msg.name} | {msg.text}
        </li>)
        }
      </ul>
      
    </div>
  )
}

export default Home;