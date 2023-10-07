import styled from "@emotion/styled";

const ChatInput = () => {
    return (
        <InputContainer>
            <input type="text"></input>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    display: flex;
    input {
        background-color: #383a40;
        width: 96%;
        height: 2rem;
        margin: auto;
        border-radius: 8px;
        border: none;
    }
`

export default ChatInput;