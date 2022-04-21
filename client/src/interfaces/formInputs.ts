import React from 'react';
import { statusEnum } from './skillApiResponse';

export type onChangeType = (
  event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
) => void;

export type inputsValueType = loginAuth | registerAuth | skillInput;

export interface inputMetas {
  id: number;
  title?: string;
  value?: string;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  pattern?: string;
  required: boolean;
  expand?: boolean;
}

// Input Types for authentication
export interface loginAuth {
  username: string;
  password: string;
}

export interface registerAuth {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

// Input types for skill
export interface skillInput {
  title: string;
  description: string;
  url: string;
  status: statusEnum;
}
export interface glassFormProps {
  title?: string;
  inputs: inputMetas[];
  values: inputsValueType;
  onChange: onChangeType;
}

export interface glassInputProps {
  metas: inputMetas;
  values: any;
  onChange: onChangeType;
}
