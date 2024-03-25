import MultiStep from 'react-multistep'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import axios from 'axios';
import { API } from './constants';
import LoadingContext from "../state/LoadingContext";
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';

const MainForm = () => {
    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const [activeS, setActiveStep] = useState(0);
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const res = await axios.post(`${API.BASE_URL}/records`, data);
            toast("Created Record successfully", {
                "type": "success"
            })
            setIsLoading(false);
        } catch (error) {
            toast("Something went wrong", {
                "type": "error"
            })
            setIsLoading(false);
        }
    }
    return (
        <MultiStep activeStep={activeS} prevButton={() => { }} nextButton={() => { }}>
            <Step1 title="Section A" onSubmitStep={onSubmit} />
            <Step2 title="Section B" />
            <Step3 title="Step 3" />
            <Step4 title="Step 4" />
            <Step5 title="Step 5" />
        </MultiStep>
    )
}

export default MainForm;