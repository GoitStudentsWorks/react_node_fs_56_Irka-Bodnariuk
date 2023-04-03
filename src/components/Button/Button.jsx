import { ButtonStyled } from './Button.styled';

export const Button = ({
  type,
  children,
  look,
  size,
  sizeTablet,
  fontSize,
  fontSizeTablet,
  lineHeight,
  lineHeightTablet,
}) => {
  return (
    <ButtonStyled
      type={type}
      look={look}
      size={size}
      sizeTablet={sizeTablet}
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
    >
      {children}
    </ButtonStyled>
  );
};
