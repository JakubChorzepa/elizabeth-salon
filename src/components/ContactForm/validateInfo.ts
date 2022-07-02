export type valuesType = {
  fullName: string,
  email: string,
  phoneNumber: string,
  messageContent: string
}

export type validateInfoType = (values: valuesType) => valuesType;

const validateInfo: validateInfoType = values => {

  let errors = {
    fullName: '',
    email: '',
    phoneNumber: '',
    messageContent: ''
  }

  // Full Name
  if(!values.fullName.trim()) errors.fullName = "Wpisz imię i nazwisko";


  // Email
  if(!values.email) {
    errors.email = "Wpisz adres email";
  }

  // Message Content
  if(!values.messageContent) errors.messageContent = "Wpisz swoją wiadomość";

  return errors;
}

export default validateInfo;
