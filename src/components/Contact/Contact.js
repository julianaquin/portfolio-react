import React, {useState, useRef} from "react";
import * as S from './Contact.styles';
import emailjs from '@emailjs/browser';

const Contact = () =>{

    const [contactDates, setContactDates] = useState({
        name: "",
        email: "",
        message: "",
        checkedTerms: false
    });

    const [emptyInputs, setEmptyInputs] =useState(false);
    const [successSend, setSuccessSend] = useState(false);
    const [errorSendingForm, setErrorSendingForm] = useState(false);

    const form= useRef();

    const onSubmit = (e) => {
        //evitar recargo de pag
        e.preventDefault();

        //validar formulario
        if(contactDates.name === "" || contactDates.email === "" || contactDates.message === "" || contactDates.checkedTerms === false){
            setEmptyInputs(true);
        }else{
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
                ).then((result) => {
                        setSuccessSend(true);
                    },
                    (error) => {
                        setErrorSendingForm(true);
                    }
                )
        }

        //enviar form
    }

    return <S.ContainerContact>
       <S.Title>👉🏻 Contact me</S.Title>
       <S.ContainerForm>
        {successSend ? (
            <S.SuccessMessage>The form was sent succesfully</S.SuccessMessage>
        ) :(
        <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm placeholder="Your name" type="text" name="name"
                onChange={(e) => setContactDates({ ...contactDates, name: e.target.value})}
                value={contactDates.name}/>
            <S.InputForm placeholder="Your email" type="text" name="email"
                onChange={(e) => setContactDates({ ...contactDates, email: e.target.value})}
                value={contactDates.email}/>
            <S.TextArea placeholder="write your message" name="message"
                onChange={(e) => setContactDates({ ...contactDates, message: e.target.value})}
                value={contactDates.message}/>
            <S.ContainerConditions>
                <input type="checkbox" onChange={(e) => setContactDates({ ...contactDates, checkedTerms: e.target.checked})}/>
                <span>Accept the terms and conditions</span>
            </S.ContainerConditions>
            <S.Button type="submit">Send</S.Button>
        </S.Form>
       )}
         {emptyInputs && (
            <p>You should fill all the inputs and accept the terms</p>
        )}
        {errorSendingForm && (
            <S.TextError>There was an error, try again later</S.TextError>
        )}
       </S.ContainerForm>
   </S.ContainerContact>
}

export default Contact;