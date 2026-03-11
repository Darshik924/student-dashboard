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
}

export type { propsType, registerDataType };
