import styled from "styled-components";

const ChosenItemsInfoList = () => {
    return (
        <Container>
            <SubtitlesRow>
                <ItemName>상품명</ItemName>
                <Quantity>수량</Quantity>
                <Price>가격</Price>
            </SubtitlesRow>
            <ChosenItemsInfoColumnContainer>
                <ChosenItemsInfoRow>
                    <DeleteButton><img src="../../../src/assets/images/JaeWoo/cancelButton.svg"/></DeleteButton>
                    <ChosenItem>

                    </ChosenItem>
                    <ChosenQuantityBoxRow>
                        <ChosenQuantity>

                        </ChosenQuantity>
                        <UpDownQuantityButton/>
                    </ChosenQuantityBoxRow>

                    <ChosenPrice>

                    </ChosenPrice>
                </ChosenItemsInfoRow>
            </ChosenItemsInfoColumnContainer>
        </Container>
    );
};

export default ChosenItemsInfoList

const Container = styled.div`

`

const SubtitlesRow = styled.div`
    display: flex;
    flex-direction: row;
`

const ItemName = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const Quantity = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const Price = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;    
`

const ChosenItemsInfoColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ChosenItemsInfoRow = styled.div`
    display: flex;
    flex-direction: row;

`

const ChosenQuantityBoxRow = styled.div`
    display: flex;
    flex-direction: row;
`

const ChosenItem = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const ChosenQuantity = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const ChosenPrice = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const DeleteButton = styled.div`
    width: 5.625rem;
    color: var(--WF-Base-800, #2D3648);
    text-align: center;
    font-feature-settings: 'calt' off;

    /* WF Buttons/Button Small */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: -0.00875rem;
`

const UpDownQuantityButton = styled.div`
    

`