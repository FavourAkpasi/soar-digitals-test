import React from 'react';
import { Pill } from './Button';

const TableRow = ({ item, index }) => {
	return (
		<tr key={index}>
			<td>{item.date}</td>
			<td>{item.equipmentId}</td>
			<td>{item.location}</td>
			<td>{item.SBU}</td>
			<td>{item.equipment}</td>
			<td>
				<Pill variant={item.status}>{item.status}</Pill>
			</td>
		</tr>
	);
};

export default TableRow;
