import React,{ Component } from 'react';
import FormField from './utils/formFields'

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


    render(){
        return(
            <>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <FormField
                                formData={this.state.formData.name}
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