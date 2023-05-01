import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import './App.css'


const Userinfo = zod.object({
  name: zod.string().min(1, 'Digite Pelomenos uma letra'),
  Age: zod.number().min(1).max(16)
})


type UserProps = zod.infer<typeof Userinfo>

function App() {
  const { register, handleSubmit, watch, reset } = useForm<UserProps>({
    resolver: zodResolver(Userinfo),
    defaultValues: {
      name: '',
      Age: 1
    }
  })
  
  function handleTest(data: UserProps) {
    console.log(data)
    reset();
  }

const name = watch('name')
const isSubmitDisable = !name


  return (
    <>
     <div className='Title'>
      <h1>React Form Controlled</h1>
     </div>
     <form onSubmit={handleSubmit(handleTest)} action="">
      <label className='lName' htmlFor="name">Nome</label>
      <input id='name' placeholder='digite seu nome' {...register('name')} />

      <label className='lAge' htmlFor="Age">Digite sua idade</label>
      <input type="number" id="Age"  placeholder='write your age' step={1} min={1} max={16} {...register('Age',  {valueAsNumber: true})} />

      {isSubmitDisable ?  <></> : <button type='submit' >Enviar</button>}
     </form>
    </>
  )
}

export default App
