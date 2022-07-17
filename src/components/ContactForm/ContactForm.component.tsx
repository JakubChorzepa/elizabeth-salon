import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header.component'
import useForm from './useFrom.hook'
import validate from './validateInfo';
import ReCAPTCHA from 'react-google-recaptcha';

const StyledHeader = styled(Header)`
  margin-bottom: 25px;
`

const ContactFormWrapper = styled.div`
  padding: 5%;
  transition: 5s ease-in-out;
`

const StyledContactForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 40vw;

  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`

const FormLabel = styled.label`
  margin-top: 20px;
  font-size: ${(({ theme }) => theme.font.size.s)};
`

const FormInput = styled.input`
  all: unset;
  font-size: ${(({ theme }) => theme.font.size.s)};
  padding: 6px;
  display: flex;
  justify-content: center;
  border: ${(({ theme }) => theme.colors.text)} 1.9px solid;
  transition: border .15s ease-out, filter .2s 0.1s ease-in-out;
  border-radius: 3px;

  &:focus {
    border: 2px ${(({ theme }) => theme.colors.primary)} solid;
    box-shadow: 0px 0px 3px .1px #D64ACE;
  }
`

const StyledTextArea = styled.textarea`
  font-size: ${(({ theme }) => theme.font.size.s)};
  padding: 6px;
  display: flex;
  height: 300px;
  justify-content: center;
  border: ${(({ theme }) => theme.colors.text)} 1.9px solid;
  transition: border, box-shadow .15s ease-out;
  border-radius: 3px;

  &:focus {
    outline: none;
    border: 2px ${(({ theme }) => theme.colors.primary)} solid;
    box-shadow: 0px 0px 3px .1px #D64ACE;
  }
`

const SubmitButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`

const SubmitButton = styled.button.attrs({ type: 'submit' })`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: #fff;
  width: 100px;
  height: 50px;
  background-color: ${(({ theme }) => theme.colors.primary)};
  font-size: ${(({ theme }) => theme.font.size.s)};
  font-weight: 500;
  margin-top: 20px;
  border-radius: 3px;
  width: 170px;
  padding: 15px;
  transition: .5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: #ff0033;
`

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin-top: 20px;
`
const Loader = styled.div`
  width: 30px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#fff 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: d1 1s steps(4) infinite;
  @keyframes d1 {to{clip-path: inset(0 -34% 0 0)}}
`

const SuccessMessage = styled.h2`
 font-size: 20px;
 color: ${(({ theme }) => theme.colors.text)};
`

const ContactForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const submitForm = () => {
    setIsSubmitted(true);
  }

  const { handleChange, handleSubmit, handleVerify, errors, isSubmitting } = useForm(submitForm, validate);

  return (
    <ContactFormWrapper>
      <StyledHeader>Formularz kontaktowy</StyledHeader>

      {
        isSubmitted ? (
          <SuccessMessage>Pomyślnie wysłano wiadomość</SuccessMessage>
        ) : (
          <>
            <StyledContactForm onSubmit={handleSubmit}>
              <FormLabel>Imie i nazwisko*</FormLabel>
              <FormInput 
                type='text' 
                name='fullName'
                onChange={handleChange}
                />

                {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

              <FormLabel>Adres e-mail*</FormLabel>
              <FormInput
                type='email' 
                name='email'
                onChange={handleChange}
                />

                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

              <FormLabel>Number telefonu</FormLabel>
              <FormInput 
                type='tel' 
                name='phoneNumber'
                onChange={handleChange}
                />

              <FormLabel>Treść*</FormLabel>
              <StyledTextArea 
                name='messageContent'
                maxLength={1500}
                placeholder='Maksymalna ilość znaków: 1500'
                onChange={handleChange}
                />

              {errors.messageContent && <ErrorMessage>{errors.messageContent}</ErrorMessage>}

              <StyledReCAPTCHA 
                sitekey='6Leh1cAgAAAAACwZavyq0N4kFEi987U_95mfdiFW'
                onChange={handleVerify}
              />

              {errors["g-recaptcha-response"] && <ErrorMessage>{errors["g-recaptcha-response"]}</ErrorMessage>}

              <SubmitButtonWrapper>
                <SubmitButton disabled={isSubmitting ? true: false }>
                  {
                    isSubmitting ? <Loader /> : 'Wyślij'
                  }
                </SubmitButton>
              </SubmitButtonWrapper>
            </StyledContactForm>
          </>
        )
      }

    </ContactFormWrapper>
  )
}

export default ContactForm;
