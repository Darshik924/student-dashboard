interface propsType {
  imgSrc: string;
  onClick?: () => void;
  isSelected?: boolean;
  isPremium?: boolean;
}

interface registerDataType {
  email: string;
  password: string;
  name: string;
  avatar: string | null;
}

interface userType {
  name: string;
  email: string;
  avatar: string;
  password: string;
  level: number;
  streak: number;
  xp: number;
  maxXp: number;
}

interface authContextTypes {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: userType | null;
}

interface loginDataType {
  email: string;
  password: string;
}

export type {
  userType,
  propsType,
  registerDataType,
  loginDataType,
  authContextTypes,
};
