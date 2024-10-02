import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    h3{
        font-size: 2rem;
        color: #fafafa;
    }

    span{
        cursor: pointer;
    }

    p{
        font-size: 1rem;
        color: #fafafa60;
    }

    hr{
        color: #fafafa60;
        margin-top: .5rem;
    }

    a{
        margin-top: .5rem;
        color: #c9c929;
    }
`