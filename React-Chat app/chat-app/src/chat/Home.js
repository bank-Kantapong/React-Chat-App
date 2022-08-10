import { memo, useCallback, useState, useMemo } from 'react'
import { Container, MemberBox, InputStyle, ButtonStyle } from './styleComponent'
import { Typography, Space } from 'antd'
import Chatroom from './Chatroom'

const { Title } = Typography

export default memo(function Home() {
  const [member, setMember] = useState("")
  const [memberData, setMemberData] = useState({
    memberId: "",
    memberName: ""
  })

  const onChangeMember = useCallback((e) => {
    setMember(e.target.value)
  }, [])

  const onSubmit = useCallback(async () => {
    const genId = Math.random().toString(36).slice(2)
    const getNameLetter = member?.charAt(0)?.toUpperCase()
    setMemberData(prev => {
      prev.memberId = genId
      prev.memberName = getNameLetter
      return { ...prev }
    })
  }, [member])

  const memberRegister = useMemo(() => (
    <MemberBox>
      <Title level={3}>Member</Title>
      <Space direction='vertical' style={{ width: '100%' }}>
        <InputStyle
          value={member}
          placeholder='Member Name'
          onChange={onChangeMember}
        />
        <ButtonStyle
          disabled={!member}
          type="primary"
          block
          onClick={onSubmit}
        >
          Join
        </ButtonStyle>
      </Space>
    </MemberBox>
  ), [member, onChangeMember, onSubmit])

  return (
    <Container>
      {memberData?.memberId ? <Chatroom memberData={memberData} /> : memberRegister}
    </Container>
  )
})