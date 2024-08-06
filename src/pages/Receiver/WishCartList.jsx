import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from "../../styles/GlobalStyle";
import logo from '../../assets/GibooDream-logo.png';
import menu from '../../assets/menu.svg';
import iconLeft from '../../assets/icon-chevron-left.svg';
import iconRight from '../../assets/icon-chevron-right.svg';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import reviewimage from '../../assets/review-image.png';
import faqimage from '../../assets/faq-image.png';
import footerLogo from '../../assets/footer-logo.png';

const WishCartList = () => {
    const [isDreamPopupVisible, setDreamPopupVisible] = useState(false);
    const [isDdasumPopupVisible, setDdasumPopupVisible] = useState(false);

    const handleDreamMouseEnter = () => {
      setDreamPopupVisible(true);
    };

    const handleDreamMouseLeave = () => {
      setDreamPopupVisible(false);
    };

    const handleDdasumMouseEnter = () => {
      setDdasumPopupVisible(true);
    };

    const handleDdasumMouseLeave = () => {
      setDdasumPopupVisible(false);
    };

    return (
        <Container>
            <GlobalStyle />
            <header>
                <Logo src={logo} alt="Logo" />
                <MenuIcon src={menu} alt="Menu Icon" />
            </header>

            <FirstSection>
                <Header>
                    <Title>기부드림 꿈바구니</Title>
                </Header>
                
                <HoverElement
                    onMouseEnter={handleDreamMouseEnter}
                    onMouseLeave={handleDreamMouseLeave}
                >
                    꿈바구니는?
                </HoverElement>
                {isDreamPopupVisible && (
                    <Popup>
                        꿈바구니는 꿈을 이루고 싶지만 여건이 부족한 사회적 약자를 위한 꿈을 후원할 수 있는 바구니에요!
                    </Popup>
                )}

                <DreamBagSection>
                    {['홍길동', '김철수'].map((name) => (
                        <DreamBag key={name}>
                            <TextArrowContainer>
                                <Text>{name} 님의 꿈바구니</Text>
                            </TextArrowContainer>
                            <ProductsContainer>
                                {[
                                    { src: product1, title: '짱구는 못말려 실내화 초등학생 초등학.', price: '6,230원' },
                                    { src: product2, title: '초등학생 학교 가방 저학년 책가방 아동.', price: '23,650원' },
                                    { src: product3, title: '리락쿠마 연습장 어린이 초등학생 준비.', price: '2,800원' },
                                ].map((product, index) => (
                                    <Product key={index}>
                                        <ProductImage src={product.src} alt={`Product ${index + 1}`} />
                                        <ProductInfo>
                                            <ProductTitle>{product.title}</ProductTitle>
                                            <ProductPrice>{product.price}</ProductPrice>
                                        </ProductInfo>
                                    </Product>
                                ))}
                            </ProductsContainer>
                        </DreamBag>
                    ))}
                </DreamBagSection>
            
                <Header>
                    <Title>기부드림 따숨바구니</Title>
                </Header>
                
                <HoverElement
                    onMouseEnter={handleDdasumMouseEnter}
                    onMouseLeave={handleDdasumMouseLeave}
                >
                    따숨바구니는?
                </HoverElement>
                {isDdasumPopupVisible && (
                    <Popup>
                        따숨바구니는 기초생활수급자, 한부모가족, 결식아동, 독거노인 등 사회적 약자를 위한 생활필수품을 후원할 수 있는 바구니에요!
                    </Popup>
                )}

                <DdasumBagSection>
                    {['이영희', '박민수'].map((name) => (
                        <DdasumBag key={name}>
                            <TextArrowContainer>
                                <Text>{name} 님의 꿈바구니</Text>
                            </TextArrowContainer>
                            <ProductsContainer>
                                {[
                                    { src: product1, title: '짱구는 못말려 실내화 초등학생 초등학.', price: '6,230원' },
                                    { src: product2, title: '초등학생 학교 가방 저학년 책가방 아동.', price: '23,650원' },
                                    { src: product3, title: '리락쿠마 연습장 어린이 초등학생 준비.', price: '2,800원' },
                                ].map((product, index) => (
                                    <Product key={index}>
                                        <ProductImage src={product.src} alt={`Product ${index + 1}`} />
                                        <ProductInfo>
                                            <ProductTitle>{product.title}</ProductTitle>
                                            <ProductPrice>{product.price}</ProductPrice>
                                        </ProductInfo>
                                    </Product>
                                ))}
                            </ProductsContainer>
                        </DdasumBag>
                    ))}
                </DdasumBagSection>
            </FirstSection>

            <ThirdSection>
                <Header>
                    <Title>기부완료</Title>
                </Header>
                <Description>꼭 필요한 물건을 받은 수혜자들의 후기를 들어보세요</Description>
                <ReviewSection>
                    <ReviewImage src={reviewimage} alt="Review Image" />
                    <ReviewDate>2024-07-15 ~ 2024-07-18</ReviewDate>
                    <ReviewDescription>미래의 프로그래머를 꿈꾸는 영민(가명)이가</ReviewDescription>
                </ReviewSection>
            </ThirdSection>

            <FourthSection>
                <Header>
                    <Title>이지기부 FAQ</Title>
                </Header>
                <FaqImage src={faqimage} alt="Faq Image" />
            </FourthSection>

            <footer>
                <FooterContainer>
                    <FooterLogo src={footerLogo} alt="Footer Logo" />
                    <FooterText>Copyright 2024 할수있다능. ALL RIGHTS RESERVED.</FooterText>
                    <FooterLinks>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms & Conditions</FooterLink>
                        <FooterLink href="#">Cookie Policy</FooterLink>
                    </FooterLinks>
                    <FooterEmail>possibleneung@gmail.com</FooterEmail>
                </FooterContainer>
            </footer>
        </Container>
    );
};

export default WishCartList;

// 스타일드 컴포넌트들
const Container = styled.div`
  header {
    display: flex;
    padding: 16px 32px;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid #fce2e6;
  }
`;

const Logo = styled.img`
  width: 152px;
  height: 64px;
  margin-right: 160px;
`;

const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const FirstSection = styled.section`
  background: #fff;
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 16px 29px;
`;

const Title = styled.h2`
  color: #2d3648;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 800;
  border-bottom: 2px solid #fdecee;
  margin: 0;
`;

const MoreButton = styled.button`
  display: flex;
  padding: 0px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 63px;
  height: 19px;
  background: none;
  border: none;
  color: #ec4058;
  font-family: Pretendard;
  font-size: 14px;
  text-align: right;
  cursor: pointer;
`;

const Description = styled.div`
  color: #8c95a0;
  font-family: 'cachildren kkum';
  font-size: 12px;
  margin: 0 0 32px 29px;
`;

const HoverElement = styled.div`
  color: #2d3648;
  font-family: "cachildren kkum";
  font-size: 14px;
  margin: 0 0 16px 29px;
  font-weight: 400;
  line-height: 24px;
  text-decoration-line: underline;
  cursor: pointer;
`;

const Popup = styled.div`
  background-color: #ffffff;
  border-color: #f9c4cb;
  font-family: "cachildren kkum";
  font-size: 14px;
  border: 2px solid var(--foundation-primary-light-active, #F9C4CB);
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  gap: 10px;
  z-index: 1;
  margin-left: 29px;
  margin-right: 30px;
`;

const DreamBagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 49px;
  margin-bottom: 59.63px;
`;

const DreamBag = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-left: 29px;
`;

const DdasumBagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 49px;
  margin-bottom: 59.63px;
`;

const DdasumBag = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-left: 29px;
`;

const TextArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #2d3648;
  font-family: Pretendard;
  font-size: 12px;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 16.2px;
`;

const ProductTitle = styled.div`
  color: #2d3648;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

const ProductPrice = styled.div`
  color: #424e64;
  font-family: Pretendard;
  font-size: 12px;
  margin-top: 6.5px;
`;

const ThirdSection = styled.section`
  background: #fff;
  width: 375px;
  height: 414px;
  flex-shrink: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 29px;
  gap: 0px;
`;

const ReviewImage = styled.img`
  width: 282px;
  height: 220px;
  flex-shrink: 0;
`;

const ReviewDate = styled.p`
  color: #2d3648;
  font-family: 'cachildren kkum';
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  margin-top: 15px;
`;

const ReviewDescription = styled.p`
  color: #2d3648;
  font-family: 'cachildren kkum';
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Icon = styled.img`
  position: absolute;
  cursor: pointer;
`;

const LeftIcon = styled(Icon)`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const RightIcon = styled(Icon)`
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const FourthSection = styled.section`
  background: #fff;
  width: 375px;
  flex-shrink: 0;
`;

const FaqImage = styled.img`
  width: 310px;
  height: 287px;
  flex-shrink: 0;
  margin-left: 32px;
  margin-bottom: 72px;
  margin-right: 33px;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 375px;
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

