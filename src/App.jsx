import LanguageSelector from "./components/language-selector";
import { useTranslation } from "react-i18next";
import MainForm from "./components/form";
import "./App.css";
import LoadingContext from "./state/LoadingContext";
import { useState } from "react";

const App = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        {isLoading && <div>
          <div className="loading-indicator-bg"></div>
          <div className="loading-indicator">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        </div>}

        <div className="container">
          <LanguageSelector />
          <h1>{t("greeting")}</h1>
          <MainForm />
        </div>
      </LoadingContext.Provider>
    </>
  );
};

export default App;
