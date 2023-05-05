import { Page1 } from "../Page1";
import { Page1DetailA } from "../Psge1DetailA";
import { Page1DetailB } from "../Psge1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/datailB",
    exact: false,
    children: <Page1DetailB />
  }
];
