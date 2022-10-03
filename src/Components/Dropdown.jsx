import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0.7rem 0.5rem 1rem;
  &::placeholder {
    color: #6c82a3;
  }
  &::after {
    content: "▼";
    font-size: 12px;
    color: lightgray;
    position: absolute;
    right: 1rem;
    top: 3.2rem;
  }
`;
const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(14, 14, 14, 0.55);
`;
const Select = styled.select`
  width: 100%;
  height: 3.5rem;
  padding: 0 1.5rem;
  margin: 0.7rem 0 1rem;
  border: 0.1rem solid #f2f2f2;
  border-radius: 0.5rem;
  appearance: none;
  font-size: 1rem;
  color: #060608;
  outline: none;
`;
const Option = styled.option`
  color: #060608;
`;

const Dropdown = ({ label, placeholder, options, value, setOnchange }) => {
  return (
    <Container className="select">
      <Label htmlFor={placeholder}>{label}</Label>
      <Select
        defaultValue={placeholder}
        onChange={(e) => setOnchange(e.target.value)}
      >
        <Option value={placeholder} disabled hidden>
          {placeholder}
        </Option>
        {options.map((option, index) => (
          <Option value={option} key={index}>
            {option}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default Dropdown;
