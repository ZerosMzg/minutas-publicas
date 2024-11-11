import { Form, Formik } from "formik"
import {InputSelect} from "./components/inputs/InputSelect"



function App() {


  return (
    <>
      <div className="bg-gradient-to-r from-[#ebf9f6] to-[#00c6a0] h-screen w-screen flex items-center justify-center"  >
        <div className="flex bg-slate-50 w-4/5 h-[600px] rounded-lg  border shadow-lg border-slate-100">

          <div className="w-1/2 h-full bg-jun-green" >
            <div className="flex flex-col items-center justify-center h-full text-left p-4 line-clamp-4">
              <h1 className="text-3xl font-bold font-gob-slab ">Conoce las minutas de alimentación diaria</h1>
              <p className="">A través de esta plataforma podrás conocer los desayunos y almuerzos que niñas, niños y jóvenes reciben en escuelas y colegios de todo el país.
              </p>
            </div>

          </div>

          <div className="w-1/2 h-full bg-slate-50  rounded-lg">
            
            <Formik
              initialValues={{
                region: '',
                comuna: '',
                establecimiento: '',
                nivel: '',
                periodo: '',
              }}
              onSubmit={(values) => {
                console.log(values)
              }}
            >
              {({ values, handleChange, handleSubmit, errors, touched, setFieldValue}) => {
                return (
                  <Form>
                    
                    <InputSelect
                      id="region"
                      name="region"
                      label="Región"
                      value={values.region}
                      onChange={(option) => { setFieldValue('region', option?.value || '') }}
                      options={[
                        { value: '1', label: 'Región Metropolitana' },
                        { value: '2', label: 'Región de Valparaíso' },
                        { value: '3', label: 'Región de OHiggins' },
                      ]}
                    />
                    
                  </Form>
                )}}


            </Formik>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
