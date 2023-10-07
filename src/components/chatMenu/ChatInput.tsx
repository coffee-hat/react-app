import styled from "@emotion/styled";

const ChatInput = () => {
    return (
        <InputContainer>
            <input type="text"></input>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    margin: auto;
    input {
        background-color: #1e1f22;
        color: #73797f;
        width: 28rem;
        height: 1.5rem;
        margin: auto;
    }
`

export default ChatInput;