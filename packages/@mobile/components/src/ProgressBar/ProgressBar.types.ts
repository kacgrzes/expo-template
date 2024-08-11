type ProgressCommonProps = {
  animated?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  color?: string;
  indeterminate?: boolean;
  progress?: number;
};

export type ProgressBarProps = {
  borderRadius?: number;
  height?: number;
  width?: number | `${number}%`;
} & ProgressCommonProps;
