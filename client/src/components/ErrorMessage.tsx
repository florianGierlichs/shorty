import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  color: red;
`;

type ErrorMessageProps = { message: string | null };
const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Container>💀 {message}</Container>
);

export default ErrorMessage;
