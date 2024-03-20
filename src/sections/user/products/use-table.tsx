import { Box, Checkbox, IconButton } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  actions: string;
};

export const defaultData: Person[] = [
  {
    id: "1",
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    actions: "",
  },
  {
    id: "2",
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    actions: "",
  },
  {
    id: "3",
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    actions: "",
  },
];
const columnHelper = createColumnHelper<Person>();

const useTable = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectAll = (e: any) => {
    if (e.target.checked) {
      setSelectedIds(defaultData.map((item) => item.id));
    } else setSelectedIds([]);
  };
  const handleSelectRow = (e: any, id: string) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      const filteredId = selectedIds.filter((item) => item !== id);
      setSelectedIds(filteredId);
    }
  };
  console.log(selectedIds);

  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: () => (
        <Box display="flex" gap="4px" alignItems="center">
          <Checkbox
            checked={selectedIds.length === defaultData.length}
            onChange={(e) => handleSelectAll(e)}
          />
          <span>ID</span>
        </Box>
      ),
      cell: (info) => (
        <Box display="flex" gap="4px" alignItems="center">
          <Checkbox
            checked={selectedIds.includes(info.row.original.id)}
            onChange={(e) => handleSelectRow(e, info.row.original.id)}
          />
          <span>{info.getValue()}</span>
        </Box>
      ),
    }),
    columnHelper.accessor("firstName", {
      id: "firstName",
      header: () => <span>First Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.getValue(),
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("age", {
      id: "age",
      header: () => "Age",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("visits", {
      id: "visits",
      header: () => <span>Visits</span>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => <span>Status</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => <span>Profile Progress</span>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("actions", {
      id: "actions",
      header: () => <span>Actions</span>,
      cell: () => (
        <IconButton>
          <HiOutlineDotsVertical />
        </IconButton>
      ),
    }),
  ];

  return { columns, defaultData };
};
export default useTable;
