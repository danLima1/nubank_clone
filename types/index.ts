export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export interface OperationsHomeProps {
  title: string;
  icon: React.JSX.Element;
  extra?: string;
}

export interface MoreInfosProps {
  image: string;
  title: string;
  description: string;
  action: string;
  route?: string;
}

export interface CashBacksProps {
  platform: {
    name: string;
    logo: string;
  };
  value: number;
}

export interface STORE_PRODUCTSProps {
  image: string;
  name: string;
  color: string;
  price: number;
  cashback: number;
}