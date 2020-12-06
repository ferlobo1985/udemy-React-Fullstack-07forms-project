import React from  'react';


const FormField = ({formData,change,id}) => {

    const showError = () => {
        let errorMessage = null;

        if(
            formData.validation &&
            !formData.valid &&
            formData.validationMessage
        ){
            errorMessage = (
                <div className="error-label">
                    {formData.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }



    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element){
            case('input'):
                formTemplate = (
                    <>
                        <input
                            {...formData.config}
                            value={formData.value}
                            className="form-control"
                            onChange={ (event) => change({event,id,blur:null}) }
                            onBlur={ (event) => change({event,id,blur:true}) }
                        />
                        {showError()}
                    </>
                )
            break;
            default:
                formTemplate = null  
        }

        return formTemplate;
    }


    return(
        <>
            {renderTemplate()}
        </>
    )
}

export default FormField;