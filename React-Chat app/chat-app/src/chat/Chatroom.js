import { memo, useCallback, useEffect, useState } from "react"
import socketIOClient from 'socket.io-client'
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"
import { Container, ChatBox } from './styleComponent'
import { Space } from 'antd'

const MESSAGE = [
  {
    id: 1,
    text: "Hello",
    member: "A"
  },
  {
    id: 2,
    text: "Hi",
    member: "B"
  }
]

export default memo(function Chatroom({ memberData }) {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState(MESSAGE)

  const onSendMessage = useCallback((message) => {
    setMessages(prev => [...prev, { ...message }])
    socket.emit("emit", { ...message })
  }, [socket])

  useEffect(() => {
    if (socket === null) {
      const socketIO = socketIOClient("http://localhost:8080")
      socketIO.on("message", (message) => {
        onSendMessage(message)
      })
      setSocket(socketIO)
    }
  }, [onSendMessage, socket])

  return (
    <Container>
      <ChatBox>
        <Space direction="vertical" size='middle' style={{ width: "100%" }}>
          <MessageList messages={messages} />
          <MessageForm memberData={memberData} onSendMessage={onSendMessage} />
        </Space>
      </ChatBox>
    </Container>
  )
})