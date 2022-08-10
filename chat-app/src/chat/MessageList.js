import { memo } from "react";
import { Space } from "antd";
import { MessageBox, Member, Message } from './styleComponent'

export default memo(function MessageList({ messages }) {
  return (
    <MessageBox>
      <Space direction="vertical" size='large'>
        {messages?.map(item => (
          <Space align="start" key={item?.id}>
            <Member>{item?.member}</Member>
            <Message>{item?.text}</Message>
          </Space>
        ))}
      </Space>
    </MessageBox>
  )
})