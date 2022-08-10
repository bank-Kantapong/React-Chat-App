import { memo, useCallback, useState } from "react";
import { InputStyle, ButtonStyle, FullSpace } from './styleComponent'


export default memo(function MessageForm({ memberData, onSendMessage }) {
  const [text, setText] = useState("")

  const onSubmit = useCallback(async () => {
    onSendMessage({
      id: memberData?.memberId,
      text: text,
      member: memberData?.memberName
    })
    setText("")
  }, [memberData?.memberId, memberData?.memberName, onSendMessage, text])

  return (
    <FullSpace>
      <InputStyle
        placeholder="Message"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <ButtonStyle
        type="primary"
        onClick={onSubmit}
      >
        Send
      </ButtonStyle>
    </FullSpace >
  )
})