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

interface loginDataType {
  email: string;
  password: string;
}

export type { propsType, registerDataType, loginDataType };
