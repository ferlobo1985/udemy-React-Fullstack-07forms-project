import React,{ Component } from 'react';
import FormField from './utils/formFields'
import { validate } from './utils/validate';

class FormFour extends Component {

    state = { 
        loading: false,
        formData:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched: false,
                validationMessage:''
            }
        }
    }

    updateForm = (element) => {
        const newFormData = { ...this.state.formData }
        const newElement = { ...newFormData[element.id] }

        newElement.value = element.event.target.value;

        /// validation
        let validateData = validate(newElement);
        newElement.valid = validateData[0];
        newElement.validationMessage = validateData[1];

        /// blur
        if(element.blur){
            newElement.touched = element.blur
        }

        newFormData[element.id] = newElement;
        this.setState({
            formData: newFormData
        })
    }


    render(){
        //console.log(this.state.formData.name)

        return(
            <>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <FormField
                                formData={this.state.formData.name}
                                change={ (element) => this.updateForm(element) }
                                id="name"
                                
                            />
                        </div>

                    </form>
                </div>
            </>
        )
    }
}

export default FormFour;