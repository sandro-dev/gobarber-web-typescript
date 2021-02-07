import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage
}

const Toast: React.FC<ToastProps> = ({ message }) => {

  const {removeToast} = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };

  }, [message.id, removeToast]);

  return (
    <Container type={message.type} hasDescription={!!message.description} >
      
      <FiAlertCircle size={20} />        

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>        

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={20}/>
      </button>
    </Container>
  );
}

export default Toast;