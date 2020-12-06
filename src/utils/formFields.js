import React from  'react';


const FormField = ({formData,id}) => {


    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element){
            case('input'):
                formTemplate = (
                    <>
                        <input
                            {...formData.config}
                        />
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