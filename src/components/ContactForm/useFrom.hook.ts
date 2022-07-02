import { useState, ChangeEvent, FormEvent } from 'react'
import { validateInfoType } from './validateInfo';

const useForm = (validate: validateInfoType) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    messageContent: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    messageContent: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
 
    setValues({
      ...values,
      [name]: value
    })

  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validate(values));
  }

  return { handleChange, handleSubmit, errors };
}

export default useForm;