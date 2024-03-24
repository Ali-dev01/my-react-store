import { Drawer } from "@mui/material";

interface PropsTypes {
  isOpen: boolean;
  toggleDrawer: (value: boolean) => void;
}

function ResponsiveDrawer({ isOpen, toggleDrawer }: PropsTypes) {
  return (
    <>
      <Drawer PaperProps={{ sx: styles.drawerStyles }} open={isOpen} onClose={() => toggleDrawer(false)}>
        <h5>drawer</h5>
      </Drawer>
    </>
  );
}
export default ResponsiveDrawer;

const styles = {
  drawerStyles: {
    width: "200px",
  },
};
