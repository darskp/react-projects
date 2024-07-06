import styled from "styled-components";

export const DarkthemeContainer = styled.div`
  background-color: ${(props) => (props.theme == true ? "black" : "white")};
  color: ${(props) => (props.theme == true ? "white" : "black")};
  width: 100%;
  min-height: 100vh;
`;

export const TextContainer = styled.div`
  padding: 16px;
`;

export const ThemedButton = styled.button`
  background-color: ${(props) => (props.theme == true ? "white" : "black")};
  color: ${(props) => (props.theme == true ? "black" : "white")};
  border: 2px solid ${(props) => (props.theme == true ? "black" : "white")};
  padding: 8px 16px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  display: inline-block;

  &:hover {
    background-color: ${(props) => (props.theme == true ? "black" : "white")};
    color: ${(props) => (props.theme == true ? "white" : "black")};
  }
`;
