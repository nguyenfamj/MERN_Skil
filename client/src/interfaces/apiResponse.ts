export interface loginAuthResponse {
  success: boolean;
  message: string;
  accessToken: string;
}
export interface registerAuthResponse {
  success: boolean;
  message: string;
  accessToken: string;
}

export interface authenticateResponse {
  success: boolean;
  message: string;
  user: userResponseModel;
}
export interface userResponseModel {
  _id: string;
  __v: number;
  username: string;
  firstname: string;
  lastname: string;
  createdAt: Date;
}

export interface errorAlert {
  title: string;
  message: string;
}
