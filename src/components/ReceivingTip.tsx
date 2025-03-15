import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F5F3EF;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 6px 14.28px;
  background-color: #F5F3EF;
  gap: 89.25px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding: 6px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 16px 16px 24px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: -0.02em;
  color: #1C4956;
  margin: 0;
`;

const FAQSection = styled.section`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.556;
  color: #1E2324;
  margin: 0;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
`;

const FAQItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 20px;
`;

const FAQHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
`;

const FAQTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.429;
  color: #1E2324;
  margin: 0;
  flex: 1;
`;

const FAQArrow = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.2s ease-in-out;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const FAQContent = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #6C6C6C;
  padding: 0 0 8px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #EFF2F3;
  margin: 0;
`;

const SupportSection = styled.section`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px;
  margin-top: 8px;
`;

const SupportList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

const SupportOption = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #F9F6F1;
    border-radius: 8px;
  }
`;

const SupportIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2px;
  margin-right: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const SupportContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SupportText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #1E2324;
  text-align: left;
`;

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const faqItems = [
  {
    question: "Can I print out this QR code to receive tips?",
    answer: "Yes, you can print out your QR code to display it at your business location. The code remains valid and can be scanned by customers to send tips."
  },
  {
    question: "Why does my tip show as 'Pending' instead of 'Received'?",
    answer: "Tips may show as 'Pending' for up to 24 hours while the payment is being processed and verified. Once confirmed, the status will change to 'Received'."
  },
  {
    question: "My QR code isn't scanning for customers—how do I fix it?",
    answer: "Ensure the QR code is well-lit and not damaged. Try cleaning your phone's camera lens or adjusting the brightness of your screen. If issues persist, you can regenerate the QR code in settings."
  },
  {
    question: "A customer tipped me, but I haven't received the money—what's wrong?",
    answer: "Tips typically process within 1-2 business days. If you haven't received your tip after this time, check your bank details are correct and contact support for assistance."
  },
  {
    question: "Can I create multiple QR codes for my different businesses?",
    answer: "Yes, you can create separate QR codes for different business locations or services through your account settings. Each code can be tracked separately."
  },
  {
    question: "How long does it take to receive a tip?",
    answer: "Most tips are processed within 1-2 business days. Processing time may vary depending on the payment method used by the customer."
  },
  {
    question: "What happens if I don't receive a tip?",
    answer: "If a tip fails to process, both you and the customer will be notified. The customer can try the payment again or contact support for assistance."
  },
  {
    question: "Is there a limit on how much I can receive in tips?",
    answer: "There are no set limits on individual tips, but larger amounts may take longer to process for security reasons. Contact support for specific questions about high-value transactions."
  }
];

const ReceivingTip: React.FC = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1E2324" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </BackButton>
      </Header>

      <MainContent>
        <TitleSection>
          <Title>Receiving Tip</Title>
        </TitleSection>

        <FAQSection>
          <SectionHeader>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
          </SectionHeader>
          <FAQList>
            {faqItems.map((item, index) => (
              <React.Fragment key={index}>
                <FAQItem>
                  <FAQHeader onClick={() => toggleFAQ(index)}>
                    <FAQTitle>{item.question}</FAQTitle>
                    <FAQArrow isOpen={openFAQ === index}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#505B65" strokeWidth="1.34" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </FAQArrow>
                  </FAQHeader>
                  <FAQContent isOpen={openFAQ === index}>
                    {item.answer}
                  </FAQContent>
                </FAQItem>
                {index < faqItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </FAQList>
        </FAQSection>

        <SupportSection>
          <SectionHeader>
            <SectionTitle>Get instant support</SectionTitle>
          </SectionHeader>
          <SupportList>
            <SupportOption>
              <SupportIconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 13.5217 6.56645 14.911 7.5 15.9687L6.5 17.5L8.03127 16.5C9.08904 17.4335 10.4783 18 12 18Z" stroke="#1E2324" strokeWidth="1.74" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SupportIconWrapper>
              <SupportContent>
                <SupportText>Chat</SupportText>
              </SupportContent>
              <ArrowIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="#444546" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ArrowIcon>
            </SupportOption>
            <SupportOption>
              <SupportIconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#1E2324" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="5" width="16" height="14" rx="4" stroke="#1E2324" strokeWidth="1.75"/>
                </svg>
              </SupportIconWrapper>
              <SupportContent>
                <SupportText>Email</SupportText>
              </SupportContent>
              <ArrowIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="#444546" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ArrowIcon>
            </SupportOption>
          </SupportList>
        </SupportSection>
      </MainContent>
    </Container>
  );
};

export default ReceivingTip; 