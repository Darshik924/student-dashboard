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

interface authContextTypes {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface loginDataType {
  email: string;
  password: string;
}

export type { propsType, registerDataType, loginDataType, authContextTypes };
