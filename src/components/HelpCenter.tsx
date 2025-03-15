import React from 'react';
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

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 1.333;
  letter-spacing: -0.02em;
  color: #1C4956;
  padding: 16px 16px 24px;
  margin: 0;
`;

const ContentSection = styled.section`
  background-color: #FFFFFF;
  padding: 0 16px 16px;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.556;
  color: #1E2324;
  padding: 16px 0;
  margin: 0;
`;

const HelpItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 4px;
  cursor: pointer;
  align-items: flex-start;

  &:hover {
    background-color: #F9F6F1;
    border-radius: 8px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 64px;
  background-color: #F9F6F1;
  padding: 12px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #101112;
  margin: 0;
`;

const ItemDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #6C6C6C;
  margin: 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #EFF2F3;
  margin: 0;
`;

const SupportSection = styled.section`
  background-color: #FFFFFF;
  padding: 24px 16px 16px;
  margin-top: 8px;
`;

const SupportList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SupportOption = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  width: 100%;
  border: none;
  background: none;

  &:hover {
    background-color: #F9F6F1;
    border-radius: 8px;
  }
`;

const SupportIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
  margin-right: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const SupportText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #1E2324;
  text-align: left;
  flex: 1;
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

const HelpCenter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1E2324" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </BackButton>
      </Header>

      <Title>Help center</Title>

      <ContentSection>
        <SectionTitle>What do you need help with?</SectionTitle>
        
        <HelpItem onClick={() => navigate('/receiving-tip')}>
          <IconContainer>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 8.5V8C18.5 6.067 16.933 4.5 15 4.5H9C7.067 4.5 5.5 6.067 5.5 8V8.5" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 15V12" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 12.5L8.5 12" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 12.5L15.5 12" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="5.5" y="8" width="13" height="11.5" rx="2" stroke="#0C0E0F" strokeWidth="1.5"/>
            </svg>
          </IconContainer>
          <ItemContent>
            <ItemTitle>Receiving Tip</ItemTitle>
            <ItemDescription>QR code, payments, and tip related issues</ItemDescription>
          </ItemContent>
        </HelpItem>

        <Divider />

        <HelpItem>
          <IconContainer>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7H17" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 12H17" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 17H17" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M7 7H7.01" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M7 12H7.01" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M7 17H7.01" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </IconContainer>
          <ItemContent>
            <ItemTitle>Payouts</ItemTitle>
            <ItemDescription>Managing payouts, payout status, and updating bank details.</ItemDescription>
          </ItemContent>
        </HelpItem>

        <Divider />

        <HelpItem>
          <IconContainer>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21C20 19.6044 19.4147 18.2658 18.3641 17.3013C17.3135 16.3368 15.8882 15.8 14.4 15.8H9.6C8.11175 15.8 6.68649 16.3368 5.63604 17.3013C4.58559 18.2658 4 19.6044 4 21" stroke="#0C0E0F" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="8" r="4" stroke="#0C0E0F" strokeWidth="1.5"/>
            </svg>
          </IconContainer>
          <ItemContent>
            <ItemTitle>Account & Security</ItemTitle>
            <ItemDescription>Reset passwords, recover access, and manage account settings.</ItemDescription>
          </ItemContent>
        </HelpItem>

        <Divider />

        <HelpItem>
          <IconContainer>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16C21 17.6569 19.6569 19 18 19" stroke="#0C0E0F" strokeWidth="1.5"/>
              <path d="M3 8C3 6.34315 4.34315 5 6 5C7.65685 5 9 6.34315 9 8C9 9.65685 7.65685 11 6 11" stroke="#0C0E0F" strokeWidth="1.5"/>
              <path d="M15 16C15 17.6569 16.3431 19 18 19" stroke="#0C0E0F" strokeWidth="1.5"/>
              <path d="M3 8C3 9.65685 4.34315 11 6 11" stroke="#0C0E0F" strokeWidth="1.5"/>
              <path d="M21 16C21 17.6569 19.6569 19 18 19" stroke="#0C0E0F" strokeWidth="1.5"/>
              <path d="M6 11C4.34315 11 3 9.65685 3 8" stroke="#0C0E0F" strokeWidth="1.5"/>
            </svg>
          </IconContainer>
          <ItemContent>
            <ItemTitle>Business & Team</ItemTitle>
            <ItemDescription>Manage team tipping, track business earnings, and export reports.</ItemDescription>
          </ItemContent>
        </HelpItem>
      </ContentSection>

      <SupportSection>
        <SectionTitle>Get instant support</SectionTitle>
        
        <SupportList>
          <SupportOption>
            <SupportIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 13.5217 6.56645 14.911 7.5 15.9687L6.5 17.5L8.03127 16.5C9.08904 17.4335 10.4783 18 12 18Z" stroke="#1E2324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SupportIcon>
            <SupportText>Chat</SupportText>
            <ArrowIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#444546" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ArrowIcon>
          </SupportOption>

          <SupportOption>
            <SupportIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#1E2324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="5" width="16" height="14" rx="4" stroke="#1E2324" strokeWidth="1.5"/>
              </svg>
            </SupportIcon>
            <SupportText>Email</SupportText>
            <ArrowIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#444546" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ArrowIcon>
          </SupportOption>
        </SupportList>
      </SupportSection>
    </Container>
  );
};

export default HelpCenter; 