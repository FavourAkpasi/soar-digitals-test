import React, { useState } from "react";
import styled from "styled-components";
import { Button, ActionButton } from "./Button";
import { FiX } from "react-icons/fi";
import Dropdown from "./Dropdown";
import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(AdvancedFormat);

import {
  Location,
  Equipment,
  equipmentType,
  Status,
  systemTypes,
  Sbu,
} from "../../Data";

const locationOptions = Location.map((item) => item.name);
const equipmentTypeOptions = Equipment.map((item) => item.transactionId);
const equipmentOptions = equipmentType.map((item) => item.name);
const systemTypeOptions = systemTypes.map((item) => item.name);
const statusOptions = Status.map((item) => item.name);
const sbuOptions = Sbu.map((item) => item.name);

const Container = styled.div`
  max-width: 550px;
  width: 100%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1), -3px -3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 1rem 10px;
`;
const TopContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 0.5rem;
`;

const HeaderText = styled.p`
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 1.5rem;
`;

const CloseBtn = styled.a`
  cursor: pointer;
  position: absolute;
  right: 1.1rem;
  top: 1.1rem;
  z-index: 2;

  svg {
    stroke-width: 2px;
    stroke: rgba(102, 102, 102, 0.55);
    width: 1.4rem;
    height: auto;
  }
`;

const MiddleContainer = styled.div`
  padding: 1rem;
`;

const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.5rem;
  margin-top: 0rem;
`;

const Toggle = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #f5f6fa;
  border-radius: 22px;
  outline: none;
  color: rgba(#0a2e65, 0.9);
  overflow: auto;
  border: none;
  font-family: $regular-font;
  font-size: 0.75rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 6px 6px;
`;

const Item = styled.div`
  cursor: pointer;
  color: rgba(#0a2e65, 0.6);
  background: transparent;
  transition: opacity 500ms ease;
  text-transform: uppercase;
  opacity: 0.6;
  padding: 10px 20px;
  border-radius: 22px;
  white-space: nowrap;
  font-size: 0.75rem;
  letter-spacing: 0.8px;
  font-weight: 600;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    background: #fff;
    color: #434ce6;
  }
`;

const Date = styled.input`
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
  &::placeholder {
    color: #6c82a3;
  }
`;

const BottomContainer = styled.div`
  padding: 0.2rem;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: end;
`;

const InputModal = ({ handleModal, maintenance, setMaintenance }) => {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [status, setStatus] = useState("");
  const [sbu, setSbu] = useState("");
  const [date, setDate] = useState("");
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);

  //toggle form, handle submit

  const handleActiveState = (e, id) => {
    e.stopPropagation();
    setActive(id);
  };

  const handleSubmit = () => {
    if (
      date &&
      location &&
      equipmentType &&
      sbu &&
      equipment &&
      status !== ""
    ) {
      const formattedDate = dayjs(date).format("MMM Do YYYY");
      const newMaintenanceData = {
        location: location,
        equipmentId: equipmentType,
        SBU: sbu,
        date: formattedDate,
        equipment,
        status,
      };
      setLoading(true);
      setMaintenance([...maintenance, newMaintenanceData]);
      setTimeout(() => {
        setLoading(false);
        handleModal();
      }, 2000);
    } else {
      alert("all input must be selected");
      setLoading(false);
    }
  };
  return (
    <Container>
      <TopContainer>
        <HeaderText>Add Maintenance</HeaderText>
        <CloseBtn onClick={handleModal}>
          <FiX />
        </CloseBtn>
      </TopContainer>

      <MiddleContainer>
        <ToggleContainer>
          <Toggle>
            <Item
              className={`${active === 1 && "active"}`}
              onClick={(e) => handleActiveState(e, 1)}
            >
              Location
            </Item>
            <Item
              className={`${active === 2 && "active"}`}
              onClick={(e) => handleActiveState(e, 2)}
            >
              System Type
            </Item>
          </Toggle>
        </ToggleContainer>

        {active === 1 ? (
          <>
            <Dropdown
              placeholder="Location"
              label="Location"
              options={locationOptions}
              value={location}
              setOnchange={setLocation}
            />
            <Dropdown
              placeholder="Equipment"
              label="Equipment"
              options={equipmentOptions}
              value={equipment}
              setOnchange={setEquipment}
            />
            <Dropdown
              placeholder="Equipment Type"
              label="Equipment Type"
              options={equipmentTypeOptions}
              value={equipmentType}
              setOnchange={setEquipmentType}
            />
            <Dropdown
              placeholder="Status"
              label="Select Status"
              options={statusOptions}
              value={status}
              setOnchange={setStatus}
            />
            <Dropdown
              placeholder="SBU"
              label="SBU"
              options={sbuOptions}
              value={sbu}
              setOnchange={setSbu}
            />
            <Date
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></Date>
          </>
        ) : (
          <>
            <Dropdown
              placeholder="System Type"
              label="System Type"
              options={systemTypeOptions}
              // value={systemtype}
              // setOnchange={setSystemtype}
            />
            <Dropdown
              placeholder="Equipment"
              label="Equipment"
              options={equipmentOptions}
              value={equipment}
              setOnchange={setEquipment}
            />
            <Dropdown
              placeholder="Equipment Type"
              label="Equipment Type"
              options={equipmentTypeOptions}
              value={equipmentType}
              setOnchange={setEquipmentType}
            />
            <Dropdown
              placeholder="Status"
              label="Select Status"
              options={statusOptions}
              value={status}
              setOnchange={setStatus}
            />
            <Date
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></Date>
          </>
        )}
      </MiddleContainer>

      <BottomContainer>
        <ActionButton
          variant="outline"
          color="black"
          onClick={handleModal}
          disabled={loading ? true : false}
        >
          Cancel
        </ActionButton>
        <ActionButton
          disabled={loading ? true : false}
          variant="solid"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? "Adding" : "Submit"}
        </ActionButton>
      </BottomContainer>
    </Container>
  );
};

export default InputModal;
