import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { equipmentType } from "../../Data";

const Container = styled.div`
  margin: 1rem;
`;

const Dropdown = () => {
  const data = equipmentType.map((equipment) => {
    return {
      label: equipment.name,
      value: equipment.name,
    };
  });

  return (
    <Container>
      <Select options={data} className="dropdown" placeHolder="place" />
    </Container>
  );
};

export default Dropdown;
