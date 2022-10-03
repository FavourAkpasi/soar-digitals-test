import styled from "styled-components";

export const Button = styled.button`
  margin: 0.5rem;
  transition: 0.2s ease all;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;

  cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};

  padding: ${(props) => (props.shape == "round" ? "0.8rem 1rem" : "12px 22px")};

  background-color: ${(props) =>
    props.variant == "solid"
      ? props.color || "#434ce6"
      : props.variant == "outline"
      ? "transparent"
      : "#000"};

  color: ${(props) =>
    props.variant == "solid"
      ? "#fff"
      : props.variant == "outline"
      ? props.color
      : "#fff"};

  border: 1px solid
    ${(props) =>
      props.variant == "solid"
        ? props.color || "#434ce6"
        : props.variant == "outline"
        ? props.color
        : "#000"};

  border-radius: ${(props) =>
    props.shape == "pill" ? "1rem" : props.shape == "round" ? "50%" : "8px"};

  // Hover properties

  &:hover {
    background-color: ${(props) =>
      props.variant == "solid"
        ? "rgba(67, 76, 230, .88)"
        : props.variant == "outline"
        ? props.color
        : "transparent"};

    border: 1px solid
      ${(props) =>
        props.variant == "solid"
          ? props.color || "rgba(67, 76, 230, .88)"
          : props.variant == "outline"
          ? props.color
          : "#000"};

    color: ${(props) =>
      props.variant == "solid"
        ? props.color || "#fff"
        : props.variant == "outline"
        ? "#fff"
        : "#000"};

    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 5px;
    stroke-width: 3px;
  }
`;
export default Button;

export const Pill = styled.span`
  padding: 6px 14px;
  border-radius: 8px;
  width: max-content;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  padding: 5px 11px;
  border-radius: 12px;

  // Background color
  background-color: ${(props) =>
    props.variant == "available"
      ? "rgba(110, 248, 117, 0.2)"
      : props.variant == "breakdown"
      ? "#fbeff1"
      : props.variant == "maintenance"
      ? "#f4f6ff"
      : "#000"};

  // Color
  color: ${(props) =>
    props.variant == "available"
      ? "#24694c"
      : props.variant == "breakdown"
      ? "#e91c22"
      : props.variant == "maintenance"
      ? "#0a2e65"
      : "#000"};
`;

export const ActionButton = styled(Button)`
  background-color: ${(props) => props.disabled == true && "gray"};
  color: ${(props) => props.disabled == true && "lightgray"};
  border: 1px solid ${(props) => props.disabled == true && "lightgray"};
  &:hover {
    transform: none;
    background-color: ${(props) => props.disabled == true && "gray"};
    color: ${(props) => props.disabled == true && "lightgray"};
    box-shadow: none;
  }
`;
