import styled from 'styled-components'
import { Input, Button, Space } from 'antd'

export const Container = styled.div`
  background-color: #0B0006;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MemberBox = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 15rem;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChatBox = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 30rem;
  height: 40rem;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MessageBox = styled.div`
  background-color: #F7F4F4;
  border-radius: 8px;
  width: 100%;
  height: 35rem;
  padding: 16px;
  display: flex;
  overflow: auto;
`;
export const InputStyle = styled(Input)`
  &.ant-input {
    border-radius: 8px;
  }
`;
export const FullSpace = styled(Space)`
  width: 100%;
  .ant-space-item:first-child {
    width: 100%;
  }
`;
export const ButtonStyle = styled(Button)`
  &.ant-btn {
    border-radius: 8px;
    background-color: #FF0085;
    border-color: #FF0085;
  }
  &.ant-btn[disabled] {
    background-color: #E1E1E1 !important;
    border-color: #E1E1E1 !important;
  }
`;
export const Member = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #FF389E;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
export const Message = styled.div`
  width: auto;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  font-weight: 500;
`;