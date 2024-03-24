import React, { useEffect } from "react";
import { Box, Pagination, Paper, Table } from "@mui/material";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { styles } from "./table-styles";
import TableSkeleton from "./table-skeleton";

interface Props {
  data: any[];
  columns: any[];
  getSelectedRows?: (values: any[]) => void;
  isPagination?: boolean;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  isLoading: boolean;
}

const CustomTable = ({
  data,
  columns,
  getSelectedRows = () => {},
  isPagination,
  totalPages,
  currentPage,
  onPageChange = () => {},
  isLoading,
}: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    getSelectedRows(table.getSelectedRowModel().rows?.map((col) => col?.original));
  }, [table.getSelectedRowModel().rows]);

  return (
    <Box>
      <TableContainer component={Paper} sx={styles.tableStyles}>
        <Table sx={{ minWidth: 650 }} classes={{ root: "_root" }}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableSkeleton />
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isPagination && totalPages !== 1 && (
        <Box mt={2} sx={{ display: "flex", justifyContent: "end" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            shape="rounded"
            onChange={(_, page) => onPageChange(page)}
          />
        </Box>
      )}
    </Box>
  );
};

export default CustomTable;
