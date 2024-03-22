import LanguageSelector from "./components/language-selector";
import { useTranslation } from "react-i18next";
import MainForm from "./components/form";
import "./App.css";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <MainForm />
    </div>
  );
};

export default App;
