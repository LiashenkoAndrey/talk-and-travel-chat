import styled from 'styled-components';

const getNotificationColor = ({ $isErrorColor, $isSuccessColor }) =>
{
  if ($isErrorColor) return 'var(--color-error)';
  if ($isSuccessColor) return 'var(--color-success)';
  return '#79747E';
};

const generalNotificationStyles = `
  font-size: 12px;
  text-align: left;
`;

export const InputFieldStyled = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const StyledLabel = styled.label`
  color: ${getNotificationColor};
`;

export const StyledInput = styled.input`
  width: calc(100% - 16px);
  font-size: 14px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${getNotificationColor};

  &:hover {
    border: 1px solid #111;
  }

  &::placeholder {
    color: #49454f;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%)
  }
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    background-color: var(--color-grey-4);
  }
`;

export const Error = styled.p`
  ${generalNotificationStyles}
  color: var(--color-error);
`;

export const Success = styled.p`
  ${generalNotificationStyles}
  color: var(--color-success);
`;

export const PasswordReapetLable = styled.p`
  ${generalNotificationStyles}
  padding-left: 14px;
  color: #49454f;
`;
