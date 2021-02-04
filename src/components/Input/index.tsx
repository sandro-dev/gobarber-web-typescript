import React, {InputHTMLAttributes, useEffect, useRef, useState} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {

  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} type="text" defaultValue={defaultValue} {...rest}/>
    </Container>
  );
}

export default Input;