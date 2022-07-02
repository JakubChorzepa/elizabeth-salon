import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header.component'
import useForm from './useFrom.hook'
import validate, { validateInfoType } from './validateInfo';

const StyledHeader = styled(Header)`
  margin-bottom: 25px;
`

const ContactFormWrapper = styled.div`
  padding: 5%;
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
  justify-content: flex-end;
  width: 100%;
`

const SubmitButton = styled.button.attrs({ type: 'submit' })`
  cursor: pointer;
  border: none;
  color: #fff;
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

const ContactForm = () => {

  const { handleChange, handleSubmit, errors } = useForm(validate);

  return (
    <ContactFormWrapper>
      <StyledHeader>Formularz kontaktowy</StyledHeader>
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

        <SubmitButtonWrapper>
          <SubmitButton>
            Wyślij
          </SubmitButton>
        </SubmitButtonWrapper>

      </StyledContactForm>
    </ContactFormWrapper>
  )
}

export default ContactForm;
