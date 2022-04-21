export enum statusEnum {
  Planned = 'Planned',
  InProgress = 'In progress',
  Done = 'Done',
}

export interface skillModel {
  _id: string;
  title: string;
  description: string;
  url: string;
  status: statusEnum;
  user: string;
  createdAt: Date;
  __v: number;
}

export interface getSkillsResponse {
  success: boolean;
  skills: skillModel[];
}
