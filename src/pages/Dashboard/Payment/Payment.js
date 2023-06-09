import styled from 'styled-components';
import { PaymentForm } from '../../../components/Payment/PaymentForm';
import { PersonalInformationForm } from '../../../components/UserInfo';

export function Payment() {
  return (
    <Wrapper>
      <PersonalInformationForm />
      <PaymentForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 60vh;
  padding-top: 10vh;
  padding-bottom: 5vh;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #adb5bd;
  font-family: 'Raleway', sans-serif; 
  color: #f8f9fa;
  @media (max-width: 850px) {
    padding-top: 16vh;
    flex-direction: column;
    align-items: center;
  }
`;