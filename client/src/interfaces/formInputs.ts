import React from 'react';

export type onChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type inputsValueType = loginAuth | registerAuth;

export interface inputMetas {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  pattern?: string;
  required: boolean;
}

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
