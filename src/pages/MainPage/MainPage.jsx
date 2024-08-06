import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import logo from '../../assets/GibooDream-logo.png';
import menu from '../../assets/menu.svg';
import iconLeft from '../../assets/icon-chevron-left.svg';
import iconRight from '../../assets/icon-chevron-right.svg';
import vectorIcon from '../../assets/vector.svg';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import arrowIcon from '../../assets/arrow icon.svg';
import storyimage1 from '../../assets/story-image1.png';
import storyimage2 from '../../assets/story-image2.png';
import storyimage3 from '../../assets/story-image3.png';
import storyimage4 from '../../assets/story-image4.png';
import reviewimage from '../../assets/review-image.png';
import faqimage from '../../assets/faq-image.png';
import footerLogo from '../../assets/footer-logo.png';

const MainPage = () => {
    return (
        <Container>
             <GlobalStyle />
            <header>
                <Logo src={logo} alt="Logo" />
                <MenuIcon src={menu} alt="Menu Icon" />
            </header>

            <HeroSection>
                <Icon src={iconLeft} alt="Left Icon" left />
                <Content>
                    <CenteredBox>아이들에게 꿈을 선물하세요</CenteredBox>
                    <DescriptionBox>
                        어려운 환경 속에서도 <span className="highlight">꽃을 피워낼 준비를 하는 아이들</span>이 있습니다.
                        척박한 환경을 딛고 만개할 수 있도록 아이들에게 꿈을 선물해주세요.
                    </DescriptionBox>
                    <Button>꿈 선물하기</Button>
                    <VectorIcon src={vectorIcon} alt="Vector Icon" />
                </Content>
                <Icon src={iconRight} alt="Right Icon" right />
            </HeroSection>

            <FirstSection>
                <Header>
                    <Title>기부드림 꿈바구니</Title>
                    <MoreButton>더보기</MoreButton>
                </Header>
                <Description>꿈바구니를 클릭하시면 꿈꾸미가 직접 적은 이야기를 볼 수 있어요</Description>

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
                <Description>작은 금액이라도 좋아요. 꿈을 펼칠 수 있도록 생필품을 후원해주세요</Description>

                <DdasumBagSection>
                    {['이영희','박민수'].map((name) => (
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

            <SecondSection>
                <Header>
                    <Title>이지기부의 이야기</Title>
                </Header>
                <StorySection>
                    {[
                        { img: storyimage1, title: '금전 후원 없이', description: '이지기부는 돈이 아닌 실질적으로 도움이 되는 물품을 배송합니다.' },
                        { img: storyimage2, title: '정기후원 없이', description: '부담되는 정기후원은 NO! 이지기부는 꼭 필요한 물건만 후원합니다.' },
                        { img: storyimage3, title: '투명한 기부 과정', description: '믿고 기부할 수 있도록 배송부터 후기까지 전과정을 투명하게 공개합니다.' },
                        { img: storyimage4, title: 'NO MONEY', description: '불분명하게 쓰일 수 있는 돈 대신 내가 사준 물건이라는 뿌듯함!' },
                    ].map((story, index) => (
                        <DashedBox key={index}>
                            <StoryImage src={story.img} alt={`Story Image ${index + 1}`} />
                            <StoryTitle>{story.title}</StoryTitle>
                            <StoryDescription>{story.description}</StoryDescription>
                        </DashedBox>
                    ))}
                </StorySection>
            </SecondSection>

            <ThirdSection>
                <Header>
                    <Title>기부완료</Title>
                </Header>
                <Description>꼭 필요한 물건을 받은 수혜자들의 후기를 들어보세요</Description>
                <LeftIcon src={iconLeft} alt="Left Icon" />
                <ReviewSection>
                    <ReviewImage src={reviewimage} alt="Review Image" />
                    <ReviewDate>2024-07-15 ~ 2024-07-18</ReviewDate>
                    <ReviewDescription>미래의 프로그래머를 꿈꾸는 영민(가명)이가</ReviewDescription>
                </ReviewSection>
                <RightIcon src={iconRight} alt="Right Icon" />
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

export default MainPage;

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

const HeroSection = styled.section`
  width: 375px;
  height: 409px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background: #ffffff;
`;

const Icon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: ${props => (props.left ? '0' : 'auto')};
  right: ${props => (props.right ? '0' : 'auto')};
  cursor: pointer;
  margin-top: 150px;
`;

const Content = styled.div`
  width: 275px;
  height: 306px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 51.5px 50px;
`;

const CenteredBox = styled.div`
  width: 275px;
  height: 64px;
  border-radius: 25px;
  background: #f9c4cb;
  color: #2d3648;
  font-family: 'Thefaceshop Inklipquid', sans-serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
`;

const DescriptionBox = styled.div`
  width: 289px;
  height: 119px;
  margin-top: 50px;
  color: #424e64;
  font-family: 'Thefaceshop Inklipquid', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.18px;
  text-align: center;
  margin-top: 30px;

  .highlight {
    color: #f85c73;
    font-family: 'Thefaceshop Inklipquid';
  }
`;

const Button = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 2px solid #ec4058;
  background: #ec4058;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  font-family: 'singleday';
  font-size: 16px;
  font-weight: 600;
`;

const VectorIcon = styled.img`
  width: 375px;
  height: 81px;
`;

const FirstSection = styled.section`
  background: #fff;
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

const DashedBox = styled.div`
  border: 2px dashed #f9c4cb;
  border-radius: 8px;
  background-color: #ffffff;
  width: 311px;
  height: 189px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SecondSection = styled.section`
  width: 375px;
  padding: 20px;
  background-color: #ffffff;
`;

const StorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StoryImage = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 10px;
`;

const StoryTitle = styled.h3`
  color: #2d3648;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;

const StoryDescription = styled.p`
  color: #424e64;
  font-family: 'singleday';
  font-size: 11px;
  font-style: nomal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.12px;
  text-align: center;
  margin-top: 8px;
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

const LeftIcon = styled(Icon)`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 2340px;
`;

const RightIcon = styled(Icon)`
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 2340px;
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
