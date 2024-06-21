import { memo, type InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const CustomInput = memo(function CustomInput(props: InputProps) {
  const { className, value, onChange, type = 'text', ...restProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        onChange={onChangeHandler}
        {...restProps}
      />
    </>
  );
});
