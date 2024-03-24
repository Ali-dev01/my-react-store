"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import useProducts from "./use-products";
import CustomTable from "@/components/custom-table";

export default function BasicTabs({
  children,
  tabsArray,
}: {
  children: React.ReactNode;
  tabsArray: string[];
}) {
  const tabChildren = React.Children.toArray(children);

  const [value, setValue] = React.useState(0);
  const [currPage, setCurrPage] = React.useState(1);

  const { defaultData: data, columns, getSelectedRows } = useProducts();

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

        {tabChildren?.map((child, index) => value === index && <Box key={`child${value}`}>{child}</Box>)}
      </Box>

      <Box mt={2} sx={{ width: { lg: "70%", xs: "100%" } }}>
        <CustomTable
          data={data}
          columns={columns}
          getSelectedRows={getSelectedRows}
          isPagination
          onPageChange={(page) => setCurrPage(page)}
          currentPage={currPage}
          totalPages={10}
          isLoading={false}
        />
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
            padding: "10px 16px",
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
};
