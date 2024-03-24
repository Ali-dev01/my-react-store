import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

const TableSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((num) => (
        <TableRow key={num}>
          <TableCell colSpan={12} sx={{ py: 0 }}>
            <Skeleton height={60} sx={{ borderRadius: "5px" }} animation="pulse" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableSkeleton;
