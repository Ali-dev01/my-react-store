import BasicTabs from "@/sections/user/products";

const Products = () => {
  return (
    <div>
      <BasicTabs tabsArray={["one", "two", "three"]}>
        <p>tab 1</p>
        <p>tab 2</p>
        <p>tab 3</p>
      </BasicTabs>
    </div>
  );
};
export default Products;
