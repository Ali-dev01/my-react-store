"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useTable from "./use-table";

export default function BasicTabs({
  children,
  tabsArray,
}: {
  children: React.ReactNode;
  tabsArray: string[];
}) {
  const tabChildren = React.Children.toArray(children);
  const [value, setValue] = React.useState(0);

  const { columns, defaultData: data } = useTable();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box p={3} sx={{ background: "#F2F4F7" }}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={styles.tabsStyles}
          classes={{ scroller: "_scroller" }}
        >
          {tabsArray.map((tab: string, index: number) => (
            <Tab disableRipple key={tab} label={tab} value={index} />
          ))}
        </Tabs>

        {tabChildren?.map(
          (child, index) => value === index && <Box key={`child${value}`}>{child}</Box>
        )}
      </Box>

      <Box mt={2} sx={{ width: { lg: "70%", xs: "100%" } }}>
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
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

const styles = {
  tabsStyles: ({ palette: { grey } }: any) => ({
    "&.MuiTabs-root": {
      background: grey[100],
      width: "284px",
      display: "flex",
      alignItems: "center",
      borderRadius: "8px",
      padding: "5px",
      "& ._scroller ": {
        "& .MuiTabs-flexContainer": {
          "& .MuiButtonBase-root": {
            minHeight: "0",
            padding: "8px 16px",
          },
          "& .Mui-selected": {
            color: "#fff",
            zIndex: "1",
          },
        },
        "& .MuiTabs-indicator": {
          background: grey[300],
          height: "100%",
          borderRadius: "8px",
        },
      },
    },
  }),
  tableStyles: {
    boxShadow: "none",
    borderRadius: "0",
    "& ._root": {
      "& .MuiTableHead-root": {
        "& .MuiTableCell-root": {
          borderBottom: "none",
          fontSize: "14px",
          color: "#667085",
        },
      },
      "& .MuiTableBody-root": {
        "& .MuiTableCell-root": {
          borderBottom: "none",
          fontSize: "16px",
          color: "#101828",
        },
      },
    },
  },
};
