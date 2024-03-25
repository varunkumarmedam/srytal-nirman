import { useContext, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const Step1 = ({ onSubmitStep }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ interviewer_name: "", farmer_number: "", is_farmer_org_member: "" });

    const [formKey, setFormKey] = useState(0);
    const [dirty, setDirty] = useState(false);

    const markFormDirty = () => setDirty(true);

    const resetState = () => {
        setFormKey((key) => key + 1);
        setFormData({});
        setDirty(false);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitStep(formData)
        resetState();
    };

    return (
        <>
            <form
                key={formKey}
                onChange={markFormDirty}
                onSubmit={submitHandler}
            >
                <div>
                    <br />
                    <label>{t("step1_qn_1", "Name of the Interviewer: ")}</label>
                    <input className="form-field input-lg" value={formData.interviewer_name} onChange={(e) => setFormData({ ...formData, interviewer_name: e.target.value })} />
                </div>
                <div>
                    <br />
                    <label>{t("step1_qn_2", "Date of the Interview: ")}</label>
                    <input className="form-field input-lg" />
                </div>
                <div>
                    <br />
                    <label>{t("step1_qn_3", "Farmer Number: ")}</label>
                    <input className="form-field input-lg" value={formData.farmer_number} onChange={(e) => setFormData({ ...formData, farmer_number: e.target.value })} />
                </div>
                <div>
                    <h3><u><label>{t("step1_heading", "A. Pradhamika Information")}</label></u></h3>
                </div>
                <div>
                    <label>{t("step1_qn_4", "Full name of the farmer: ")}</label>
                    <input className="form-field input-lg" />
                </div>
                <div onChange={(e) => {
                    setFormData({ ...formData, is_farmer_org_member: e.target.value })
                }}>
                    <br />
                    <label>{t("step1_qn_5", "Are you a member of a farmer organization ?")}</label>
                    <br />
                    <input type="radio" id="step1_qn_5_1" name="step1_qn_5" value="1" checked={formData.is_farmer_org_member === "1"} />
                    <label for="step1_qn_5_1">YES</label>

                    <input type="radio" id="step1_qn_5_2" name="step1_qn_5" value="0" checked={formData.is_farmer_org_member === "0"} />
                    <label for="step1_qn_5_2">NO</label>
                </div>
                <div>
                    <br />
                    <label>{t("step1_qn_6", "In 2022 year, did you or a household member accessed or accessing any government scheme ? ")}</label>
                    <br />
                    <input type="radio" id="step1_qn_6_1" name="step1_qn_6" value="Yes" />
                    <label for="step1_qn_6_1">YES</label>

                    <input type="radio" id="step1_qn_6_2" name="step1_qn_6" value="No" />
                    <label for="step1_qn_6_2">NO</label>
                </div>
                <div>
                    <br />
                    <table>
                        <tr>
                            <th></th>
                            <th><label>{t("step1_qn_7_1", "Raitu Bandhu ")}</label></th>
                            <th><label>{t("step1_qn_7_2", "Agriculture Machinery Subsidy scheme")}</label></th>
                            <th><label>{t("step1_qn_7_3", "MNREGA Scheme")}</label></th>
                            <th><label>{t("step1_qn_7_4", "Others")}</label></th>
                            <th><label>{t("step1_qn_7_5", "Others")}</label></th>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_7_6", "If yes, what was the name of the scheme ?")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_7_6_1" name="step1_qn_7_6_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_7_6_2" name="step1_qn_7_6_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_7_6_3" name="step1_qn_7_6_1" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_7_6_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_7_6_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                <label>{t("step1_qn_8_1", "For the schemes that you accessed, what benefits have you received in the past 2 years?")}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_2", "Access to low-cost inputs")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_2_1" name="step1_qn_8_2_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_2_2" name="step1_qn_8_2_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_2_3" name="step1_qn_8_2_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_2_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_2_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_3", "Training")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_3_1" name="step1_qn_8_3_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_3_2" name="step1_qn_8_3_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_3_3" name="step1_qn_8_3_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_3_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_3_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_4", "Access to financing / Agricultural loan")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_4_1" name="step1_qn_8_4_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_4_2" name="step1_qn_8_4_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_4_3" name="step1_qn_8_4_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_4_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_4_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_5", "Access to markets")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_5_1" name="step1_qn_8_5_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_5_2" name="step1_qn_8_5_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_5_3" name="step1_qn_8_5_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_5_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_5_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_6", "Access to Inputs")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_6_1" name="step1_qn_8_6_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_6_2" name="step1_qn_8_6_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_6_3" name="step1_qn_8_6_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_6_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_6_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_7", "Access to Inputs")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_7_1" name="step1_qn_8_7_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_7_2" name="step1_qn_8_7_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_7_3" name="step1_qn_8_7_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_7_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_7_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_8", "Machinery services")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_8_1" name="step1_qn_8_8_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_8_2" name="step1_qn_8_8_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_8_3" name="step1_qn_8_8_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_8_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_8_5" className="form-field input-lg" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{t("step1_qn_8_9", "Others, please specify")}</label>
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_9_1" name="step1_qn_8_9_1" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_9_2" name="step1_qn_8_9_2" value="Yes" />
                            </td>
                            <td>
                                <input type="checkbox" id="step1_qn_8_9_3" name="step1_qn_8_9_3" value="Yes" />
                            </td>
                            <td>
                                <input id="step1_qn_8_9_4" className="form-field input-lg" />
                            </td>
                            <td>
                                <input id="step1_qn_8_9_5" className="form-field input-lg" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <br />
                    <label>{t("step1_qn_9", " If no access to any scheme, what were the main 1-2 reasons why you did not access any schemes?")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_1" name="step1_qn_9_1" value="Yes" />
                    <label for="step1_qn_9_1">{t("step1_qn_9_1", "I did not know it was available")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_2" name="step1_qn_9_2" value="Yes" />
                    <label for="step1_qn_9_2">{t("step1_qn_9_2", "I did not think it was open to me")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_3" name="step1_qn_9_3" value="Yes" />
                    <label for="step1_qn_9_3">{t("step1_qn_9_3", "I do not understand how to access the scheme")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_4" name="step1_qn_9_4" value="Yes" />
                    <label for="step1_qn_9_4">{t("step1_qn_9_4", "The schemes are too complicated to access")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_5" name="step1_qn_9_5" value="Yes" />
                    <label for="step1_qn_9_5">{t("step1_qn_9_5", "I tried before and was not successful")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_6" name="step1_qn_9_6" value="Yes" />
                    <label for="step1_qn_9_6">{t("step1_qn_9_6", "I tried before and was not worth the effort/complexity")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_7" name="step1_qn_9_7" value="Yes" />
                    <label for="step1_qn_9_7">{t("step1_qn_9_7", "It’s too far to go to access it")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_8" name="step1_qn_9_8" value="Yes" />
                    <label for="step1_qn_9_8">{t("step1_qn_9_8", "I do not have the necessary personal information to access it")}</label>
                    <br />
                    <input type="checkbox" id="step1_qn_9_9" name="step1_qn_9_9" value="Yes" />
                    <label for="step1_qn_9_9">{t("step1_qn_9_9", "Others, please specify")}</label>
                    <input id="step1_qn_9_10" className="form-field input-lg" />
                </div>
                <button type="submit" disabled={!dirty}>Submit</button>
            </form>
        </>
    )
}

export default Step1;