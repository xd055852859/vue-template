import { User } from "./User";

export interface ResultProps {
  msg: string;
  data: any;
  status: number;
  pageNum?: number;
  totalNum?: number;
  total?: number;
  rooter?: any;
}
export interface Notice {
  _key: string;
  boardInfo: {
    _key: string;
    title: string;
  };
  cardInfo: {
    _key: string;
    title: string;
  } | null;
  fromUserInfo: User;
  hasRead: number;
  log: string;
  time: string;
  type: string;
  status?: number;
  applyKey?: string;
  newRole?: number;
}
export enum ROLELIST {
  "SpaceSuperAdmin" = -2,
  "SpaceAdmin" = -1,
  //箭头类型
  "SuperAdmin" = 0,
  "Admin" = 1,
  "Editor" = 2,
  "author" = 3,
  "Member" = 4,
}
export const ROLE_OPTIONS = [
  // {
  //   label: "超管",
  //   value: ROLELIST.SuperAdmin,
  // },
  {
    label: "管理员",
    value: ROLELIST.Admin,
  },
  {
    label: "编辑",
    value: ROLELIST.Editor,
  },
  {
    label: "作者",
    value: ROLELIST.author,
  },
  {
    label: "只读",
    value: ROLELIST.Member,
  },
];