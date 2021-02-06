import React from 'react';
import { FiAlertCircle, FiXCircle} from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />
        
        <div>
          <strong>Só pra te informar</strong>
          <p>Os dados foram sincronizados</p>
        </div>
        
        <button type="button">
          <FiXCircle size={20}/>
        </button>

      </Toast>
      
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        
        <div>
          <strong>Deu tudo certo</strong>
        </div>
        
        <button type="button">
          <FiXCircle size={20}/>
        </button>

      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        
        <div>
          <strong>Deu um erro</strong>
          <p>Falha ao enviar as informaões</p>
        </div>
        
        <button type="button">
          <FiXCircle size={20}/>
        </button>

      </Toast>
      
    </Container>
  )
}

export default ToastContainer;