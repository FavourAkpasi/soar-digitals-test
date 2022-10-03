import React from "react";
import { Pill } from "./Button";
import styled from "styled-components";

const TD = styled.td`
  white-space: nowrap;
  text-align: left;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 22px 12px;
  border-bottom: 1px solid rgba(121, 121, 121, 0.12);
  font-size: 0.9rem;
`;

const TableRow = ({ item, index }) => {
  return (
    <tr key={index}>
      <TD>{item.date}</TD>
      <TD>{item.equipmentId}</TD>
      <TD>{item.location}</TD>
      <TD>{item.SBU}</TD>
      <TD>{item.equipment}</TD>
      <TD>
        <Pill variant={item.status}>{item.status}</Pill>
      </TD>
    </tr>
  );
};

export default TableRow;
