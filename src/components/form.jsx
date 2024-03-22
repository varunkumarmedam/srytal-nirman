import MultiStep from 'react-multistep'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';

const MainForm = () => {
    return (
        <MultiStep activeStep={0} prevButton={()=>{}} nextButton={()=>{}}>
            <Step1 title="Step 1"/>
            <Step2 title="Step 2"/>
            <Step3 title="Step 3"/>
            <Step4 title="Step 4"/>
            <Step5 title="Step 5"/>
        </MultiStep>
    )
}

export default MainForm;