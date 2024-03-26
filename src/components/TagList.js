import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TagListItem from './TagListItem';

const TagList = ({ tags }) => {
  
  {tags.map(tag => (
    <TagListItem key={tag.name} tag={tag} />
  ))}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><span>Tag</span></TableCell>
            <TableCell align="right"><span>Number of Tags</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map(tag => (
            <TableRow
              key={tag.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{tag.name}</TableCell>
              <TableCell align="right">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
          
export default TagList;