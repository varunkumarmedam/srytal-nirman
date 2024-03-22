import { Trans, useTranslation } from "react-i18next";

const Step1 = () => {
    const { t } = useTranslation();

    return (
        <div>
            <label>{t("name", "Name")}</label>
            <input className="form-field input-lg" placeholder="Enter a name"/>
        </div>
    )
}

export default Step1;