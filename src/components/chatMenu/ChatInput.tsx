import styled from "@emotion/styled";
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

type Props = {
    addMessage: (message: string) => void;
}

const ChatInput = ({addMessage}: Props) => {
    const[newMessage, setNewMessage] = useState<string>("");

    const handleInputChange = (e: { target: { value: string; }; }) => {
        setNewMessage(e.target.value);
    }
    const handleSubmitNewMessage = () => {
        setNewMessage("")
        addMessage(newMessage)
    }

    return (
        <InputContainer>
            <input 
                type="text"
                value={newMessage}
                onChange={handleInputChange}
            />
            <InputAction>
                <div onClick={handleSubmitNewMessage}>
                    {/* <BsArrowRightCircleFill/> */}
                </div>
            </InputAction>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    flex: 1;
    display: flex;
    margin: auto;
    height: 2rem;
    border-radius: 8px;
    background-color: var(--light-gray);
    input {
        flex: 1;
        background-color: var(--light-gray);
        border-radius: 8px 0 0 8px;
        border: none;
    }
    
`

const InputAction = styled.div`
    display: flex;
    width: 6rem;
    height: 100%;
    margin: auto;
    div {
        flex: 1;
        align-content: center;
        border-radius: 0 8px 8px 0;
        background-color: var(--contact-gray);
        &:hover {
            cursor: pointer;
            background-color: var(--dark-gray);
        }   
    }
`

export default ChatInput;