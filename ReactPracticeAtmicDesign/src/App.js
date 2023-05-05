import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "天孝",
  image: "https://source.unsplash.com/v3-zcCWMjgM",
  email: "123@gmail.com",
  phone: "09012345678",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
