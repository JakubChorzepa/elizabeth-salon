import axios from 'axios';
import { useState, useEffect,  ChangeEvent, FormEvent } from 'react'
import { validateInfoType } from './validateInfo';

const useForm = (callback: () => void, validate: validateInfoType) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    messageContent: '',
    "g-recaptcha-response": ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    messageContent: '',
    "g-recaptcha-response": ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerify = (token: string | null) => {
    if(token) {
      setValues({
        ...values,
        "g-recaptcha-response": token
      })
    }
  }

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
      
    setIsSubmitting(true);
  }

  useEffect(() => {

    if(Object.values(errors).every(error => !error) && isSubmitting) {
      axios({
        method: "post",
        url: "https://getform.io/f/228c388d-6b2f-4e3d-b538-1bcc968c5bbb",
        data: values,
      })
      .then(res => {
        callback();
        setIsSubmitting(false);
      })
      .catch(err => {
        setIsSubmitting(false);
      })
    } else {
        setIsSubmitting(false);
    }


  }, [isSubmitting])

  return { handleChange, handleSubmit, handleVerify, errors, isSubmitting };
}

export default useForm;