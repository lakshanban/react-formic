import React from 'react'
import {useFormik, Form} from 'formik'


function Test(){


const initialValues ={
    name:'',
    email:'',
    channel:''
}

const onSubmit = values=>{
    console.log('Handle change values',values)
}

const validate = values=>{

    let errors = {}

    if(!values.name){
        errors.name = 'required'
    }

    if(!values.email){
        errors.email = 'required'
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email = 'format not valid'
    }


    if(!values.channel){
        errors.channel= 'required'
    }

    return errors;
}


    const Formic = useFormik({

        initialValues,
        onSubmit,
        validate
    })

    console.log(Formic.values)
    console.log('formic touched',Formic.touched)

    return (<div>

<form onSubmit={Formic.handleSubmit}>

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={Formic.handleChange} value={Formic.values.name} onBlur={Formic.handleBlur} />
        {Formic.errors.name  && Formic.touched.name ? <div>{Formic.errors.name}</div>: null}

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' onChange={Formic.handleChange} value={Formic.values.email} onBlur={Formic.handleBlur} />
        {Formic.errors.email && Formic.touched.email ? <div>{Formic.errors.email}</div>: null}

        <label htmlFor='channel'>Name</label>
        <input type='text' id='channel' name='channel' onChange={Formic.handleChange} value={Formic.values.channel} onBlur={Formic.handleBlur} />
        {Formic.errors.channel && Formic.touched.channel ? <div>{Formic.errors.channel}</div>: null}

        <button>Submit</button>

        </form>
    </div>)
}

export default Test;
