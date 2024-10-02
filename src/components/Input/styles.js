import styled from "styled-components";

export const InputContainer = styled.div`
    height: 62px;
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    input{
        background: transparent;
        border: 0;
        width: 100%;
        heigth: 100%;
        padding: 1rem;
        border: 1px solid #fafafa;
        border-radius: 1rem;
        color: #fff;
        font-size: 1.2rem;
    }

    button{
        backgroud-color: #fff;
        border: 1px solid #000;
        border-radius: 1rem;
        padding: 0 1rem;
        cursor: pointer;

        &:hover{
            background-color: #c1c1c1;
        }
    }
`