import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/GibooDream-logo.png';
import menu from '../../assets/menu.svg';
import ItemImage1 from '../../assets/product1.png';
import ItemImage2 from '../../assets/product2.png';
import ItemImage3 from '../../assets/product3.png';
import footerLogo from '../../assets/footer-logo.png';

const WishCartDetail = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDonateClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Header>
                <Logo src={logo} alt="Logo" />
                <MenuIcon src={menu} alt="Menu Icon" />
            </Header>

            <Content>
                <Title>따스한 마음으로 <span className='highlight2'>흥민이</span>에게 꿈을 선물하세요</Title>

                <WishList>
                    <WishListTitle>
                        <TextBackgroundUnderLine>꿈을 이루는데 필요한 것들</TextBackgroundUnderLine>
                     </WishListTitle>
                     <WishListName>홍길동 님의 꿈바구니</WishListName>
                    <WishItem>
                        <ItemImage src={ItemImage1} alt="Item 1" />
                        <ItemDetails>
                            <ItemName>짱구는 못말려 실내화 초등학생 초등학교.</ItemName>
                            <ItemInfo>
                            <ItemQuantity>1개</ItemQuantity>
                            <ItemPrice>6,230원</ItemPrice>
                            </ItemInfo>
                        </ItemDetails>
                    </WishItem>
                    <WishItem>
                        <ItemImage src={ItemImage2} alt="Item 2" />
                        <ItemDetails>
                            <ItemName>초등학생 학교 가방 저학년 책가방 아동용.</ItemName>
                            <ItemInfo>
                            <ItemQuantity>1개</ItemQuantity>
                            <ItemPrice>23,650원</ItemPrice>
                            </ItemInfo>
                        </ItemDetails>
                    </WishItem>
                    <WishItem>
                        <ItemImage src={ItemImage3} alt="Item 3" />
                        <ItemDetails>
                            <ItemName>리락쿠마 연습장 어린이 초등학생 준비.</ItemName>
                            <ItemInfo>
                            <ItemQuantity>1개</ItemQuantity>
                            <ItemPrice>2,800원</ItemPrice>
                            </ItemInfo>
                        </ItemDetails>
                    </WishItem>
                </WishList>
                <TotalInfo>
                <TotalName>따숨바구니 합계</TotalName>
                <TotalPrice>32,680원</TotalPrice>
                </TotalInfo>
                <DonateInfo>
                <RemainingDonateTitle>남은 모금액</RemainingDonateTitle>
                <RemainingDonatePrice>26,450원</RemainingDonatePrice>
                </DonateInfo>

                <Encourage>
                <EncourageTitle>
                <TextBackgroundUnderLine>다 잘 될거야!</TextBackgroundUnderLine>
                </EncourageTitle>
                    <EncourageInput placeholder="따스한 한마디 남겨주세요!" />
                    <EncourageButton>응원의 메시지 등록</EncourageButton>
                    <EncourageContents>
                        <EncourageItem>
                            <EncourageComments>최대삼십글자최대삼십글자최대삼십글자 최대삼십글자최대삼십글자</EncourageComments>
                            <EncourageName>황희찬</EncourageName>
                        </EncourageItem>
                        <EncourageItem>
                            <EncourageComments>epl우승가자!</EncourageComments>
                            <EncourageName>이강인</EncourageName>
                        </EncourageItem>
                    </EncourageContents>
                </Encourage>
                <DonateButton onClick={handleDonateClick}>후원하기</DonateButton>
            </Content>

            {showModal && (
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={handleCloseModal}>×</CloseButton>
                        <ModalTitle>따숨바구니</ModalTitle>

                        <ModalAllCheck>
                        <ModalCheckbox type="checkbox" /> 전체
                        </ModalAllCheck>

                        <ModalItem>
                            <ModalCheckbox type="checkbox" />
                            <ModalItemImage src={ItemImage1} alt="Item 1" />
                            <ModalItemDetails>
                                <ModalItemName>짱구는 못말려 실내화 초등학생 초등학교.</ModalItemName>
                                <ModalItemInfo>
                                <ModalItemQuantity>1개</ModalItemQuantity>
                                <ModalItemPrice>6,230원</ModalItemPrice>
                                </ModalItemInfo>
                            </ModalItemDetails>
                        </ModalItem>
                        <ModalItem>
                            <ModalCheckbox type="checkbox" />
                            <ModalItemImage src={ItemImage2} alt="Item 2" />
                            <ModalItemDetails>
                                <ModalItemName>초등학생 학교 가방 저학년 책가방 아동용.</ModalItemName>
                                <ModalItemInfo>
                                <ModalItemQuantity>1개</ModalItemQuantity>
                                <ModalItemPrice>23,650원</ModalItemPrice>
                                </ModalItemInfo>
                            </ModalItemDetails>
                        </ModalItem>
                        <ModalItem>
                            <ModalCheckbox type="checkbox" />
                            <ModalItemImage src={ItemImage3} alt="Item 3" />
                            <ModalItemDetails>
                                <ModalItemName>리락쿠마 연습장 어린이 초등학생 준비.</ModalItemName>
                                <ModalItemInfo>
                                <ModalItemQuantity>1개</ModalItemQuantity>
                                <ModalItemPrice>2,800원</ModalItemPrice>
                                </ModalItemInfo>
                            </ModalItemDetails>
                        </ModalItem>

                        <ModalTotal>
                            <ModalTotalItem>
                                <ModalTotalLabel>따숨바구니 합계</ModalTotalLabel>
                                <ModalTotalPrice>32,680원</ModalTotalPrice>
                            </ModalTotalItem>
                            <ModalTotalItem>
                                <ModalTotalLabel>선택상품 1개</ModalTotalLabel>
                                <ModalTotalPrice>23,650원</ModalTotalPrice>
                            </ModalTotalItem>
                        </ModalTotal>

                        <ModalPayment>
                            <ModalTotalItem>
                                <ModalTotalPriceLabel>결제금액</ModalTotalPriceLabel>
                                <ModalPaymentPrice>23,000원</ModalPaymentPrice>
                            </ModalTotalItem>
                        </ModalPayment>

                        <ModalPaymentOptions>
                            <ModalPaymentLabel>결제방법선택</ModalPaymentLabel>
                            <ModalPaymentOption>
                                <ModalPaymentRadio type="radio" name="payment" /> 카드결제                      
                                <ModalPaymentRadio type="radio" name="payment" /> 카카오페이
                            </ModalPaymentOption>
                        </ModalPaymentOptions>
                        <ModalAgreement>
                            <ModalAgreementCheckbox type="checkbox" />
                            기부조건 확인 및 결제진행에 동의
                        </ModalAgreement>
                        <ModalReceiptOption>
                            <ModalReceiptoptionLabel>기부금영수증 발급 여부</ModalReceiptoptionLabel>
                            <ModalReceiptRadio type="radio" name="receipt" /> 예
                            <ModalReceiptRadio type="radio" name="receipt" /> 아니오
                        </ModalReceiptOption>
                        <ModalDonateButton>후원하기</ModalDonateButton>
                    </ModalContent>
                </ModalOverlay>
            )}

            <footer>
                <FooterContainer>
                    <FooterLogo src={footerLogo} alt="Footer Logo" />
                    <FooterText>Copyright 2024 할수있다능. ALL RIGHTS RESERVED.</FooterText>
                    <FooterLinks>
                        <FooterLink>Privacy Policy</FooterLink>
                        <FooterLink>Terms & Conditions</FooterLink>
                        <FooterLink>Cookie Policy</FooterLink>
                    </FooterLinks>
                    <FooterEmail>possibleneung@gmail.com</FooterEmail>
                </FooterContainer>
            </footer>

        </Container>
    );
};

const Container = styled.div`
    margin: 0 auto;
    padding: 0 16px;
`;

const Header = styled.header`
    display: flex;
    padding: 16px 32px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #1a202c;
`;

const Logo = styled.img`
    width: 152px;
    height: 64px;
`;

const MenuIcon = styled.img`
    width: 20px;
    height: 20px;
    color: #a0abc0;
`;

const Content = styled.div`
    padding: 20px;
    background-color: #ffffff;
`;

const Title = styled.h1`
    color: #2d3648;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    text-align: center;
    margin-top: 55px;
    margin-left: 55px;
    margin-right: 55px;


    .highlight2 {
        color: #53161f;
    }
`;

const WishList = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const WishListTitle = styled.h2`
    color: #2d3648;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 800;
    margin-top: 67px;
    padding-bottom: 14px;
    border-bottom: 3px solid #a0abc0;
`;

const TextBackgroundUnderLine = styled.span`
    background-color: #fdecee;
`;

const WishListName = styled.div`
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 18px */
    letter-spacing: -0.12px;
    margin-top: 23px;
    margin-bottom: 31px;
`;

const WishItem = styled.div`
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 25px;
    border-bottom: 1px solid #a0abc0;
`;

const ItemImage = styled.img`
    width: 100px;
    height: 100px;
    flex-shrink: 0;
`;

const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ItemName = styled.span`
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: -0.12px;
    margin-left: 20px;
`;

const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 10px;
`;

const ItemQuantity = styled.span`
    color: var(--WF-Base-600, #535C73);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 18px */
    letter-spacing: -0.12px;
`;

const ItemPrice = styled.span`
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 18px */
    letter-spacing: -0.12px;
`;

const TotalInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 19px;
`;

const TotalName = styled.div`
    color: var(--WF-Base-600, #535C73);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
`;

const TotalPrice = styled.div`
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
`;

const DonateInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 19px;
    margin-bottom: 35px;
`;

const RemainingDonateTitle = styled.div`
    color: var(--WF-Base-600, #535C73);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
`;

const RemainingDonatePrice = styled.div`
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
`;

const DreamStory = styled.div`
    display: flex;
    flex-direction: column;
`;

const DreamStoryTitle = styled.h2`
    color: #2d3648;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    padding-bottom: 14px;
    border-bottom: 3px solid #a0abc0;
`;

const DreamStoryContainer = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: #f6f8fa;
    border-radius: 5px;
`;

const DreamText = styled.p`
    white-space: pre-line;
    line-height: 1.6;
    color: #2d3648;
    font-family: Pretendard;
    font-size: 16px;
`;

const Encourage = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const EncourageTitle = styled.h2`
    color: #2d3648;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 14px;
    border-bottom: 3px solid #a0abc0;
`;

const EncourageInput = styled.textarea`
    width: 100%;
    height: 100px;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #a0abc0;
    border-radius: 5px;
    font-family: Pretendard;
    font-size: 16px;
    resize: none;
`;

const EncourageButton = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #2d3648;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-family: Pretendard;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #d23548;
    }
`;

const EncourageContents = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
`;

const EncourageItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #a0abc0;
`;

const EncourageComments = styled.span`
    flex-grow: 1;
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
`;

const EncourageName = styled.span`
    flex-shrink: 0;
    margin-left: 10px;
    color: var(--WF-Base-800, #2D3648);
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 18px */
`;

const DonateButton = styled.button`
    display: flex;
    width: 320px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #ec4058;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-family: Pretendard;
    font-size: 18px;
    cursor: pointer;
    margin-top: 40px;

    &:hover {
        background-color: #d23548;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    width: 325px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    align-self: stretch;
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    position: relative;
    border-radius: 6px;
    border: 2px solid var(--WF-Base-400, #CBD2E0);
    background: var(--WF-Base-White, #FFF);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

const ModalTitle = styled.h2`
    width: 360px;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.14px;
    margin-top: 38px;
    padding-bottom: 16.5px;
    border-bottom: 2px dotted #e2e7f0;
`;

const ModalAllCheck = styled.div`
    color: #000;
    font-feature-settings: 'calt' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */    
`;

const ModalItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const ModalCheckbox = styled.input`
    margin-right: 10px;
`;

const ModalItemImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
`;

const ModalItemDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalItemName = styled.span`
    font-size: 14px;
`;

const ModalItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 38.91px;
`;

const ModalItemQuantity = styled.span`
    font-size: 12px;
    color: #757575;
`;

const ModalItemPrice = styled.span`
    font-size: 12px;
    color: #757575;
    margin-right: 20px;
`;

const ModalTotal = styled.div`
    width: 360px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-top: 30px;
    gap: 10px;
    border-top: 2px solid #e2e7f0;
`;

const ModalTotalItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const ModalTotalLabel = styled.div`
    font-size: 14px;
`;

const ModalTotalPriceLabel = styled.h2`
    width: 360px;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.14px;
    justify-content: space-around;
    
`;

const ModalTotalPrice = styled.span`
    font-size: 14px;
    margin-right: 25.34px;
`;

const ModalPayment = styled.div`
    width: 360px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 2px solid #e2e7f0;
    border-bottom: 2px solid #e2e7f0;
`;

const ModalPaymentPrice = styled.div`
    font-size: 14px;
    margin-right: 25.34px;
    white-space: nowrap;
`

const ModalPaymentLabel = styled.h2`
    width: 360px;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.14px;
    justify-content: space-around;
`;

const ModalPaymentOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    gap: 10px;
    border-bottom: 2px solid #e2e7f0;
`;

const ModalPaymentOption = styled.label`
    font-size: 14px;
    justify-content: space-between;
`;

const ModalPaymentRadio = styled.input`
    margin: 0 10px;
`;

const ModalAgreement = styled.div`
    width: 360px;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 2px solid #e2e7f0;
`;

const ModalAgreementCheckbox = styled.input`
    margin-right: 5px;
`;

const ModalReceiptoptionLabel = styled.h2`
    width: 360px;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.14px;
`;

const ModalReceiptOption = styled.div`
    font-size: 14px;
    margin: 20px 0;
`;

const ModalReceiptRadio = styled.input`
    margin: 0 10px;
`;

const ModalDonateButton = styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    color: white;
    background-color: #ec4058;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const FooterContainer = styled.div`
  display: flex;
  max-width: 375px;
  flex-direction: column;
  background: #fdecee;
  padding: 32px;
  gap: 32px;
  margin-top: 10px;
`;

const FooterLogo = styled.img`
  width: 152px;
  height: 64px;
  margin-bottom: 16px;
`;

const FooterText = styled.div`
  color: #8c95a0;
  font-family: Pretendard;
  font-size: 12px;
  margin-bottom: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

const FooterLink = styled.a`
  color: #8c95a0;
  font-family: Pretendard;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const FooterEmail = styled.div`
  color: #8c95a0;
  font-family: Pretendard;
  font-size: 12px;
`;

export default WishCartDetail;