import { createContext } from "react";
import SHOP_DATA from "./shopData";

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;