'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

interface InputProps {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, input }, ref) => (
  <div className={classes.input}>
    <label htmlFor={input.id as string}>{label}</label>
    <input ref={ref} {...input} />
  </div>
));

Input.displayName = 'Input';

export default Input;
