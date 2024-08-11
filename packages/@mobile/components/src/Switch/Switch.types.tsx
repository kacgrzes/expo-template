export type SwitchProps = {
  value?: boolean;
  defaultValue?: boolean;
  onValueChange?: (value: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
};

export type SwitchHandle = {
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
};
