export type onChangeType = (event: any) => void;

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

export interface loginInput {
  username: string;
  password: string;
}

export interface registerInput {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface glassFormProps {
  inputs: inputMetas[];
  values: loginInput | registerInput;
  onChange: onChangeType;
}

export interface glassInputProps {
  metas: inputMetas;
  values: loginInput | registerInput;
  onChange: onChangeType;
}
