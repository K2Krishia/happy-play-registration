import logo from './assets/img/esat-mock-logo.png';
import './App.css';
import { Button, Input, Select, Spinner } from './components';

function App() {
  return (
    <div className='p-10 flex items-center justify-center'>
      <div className='flex min-h-screen shadow-lg h rounded-3xl max-w-[540px] w-full'>
        <div className='bg-[#425FA2] w-40 rounded-l-3xl p-4'> 
          <p className='uppercase'>Registration</p>
        </div>
        <div className='flex flex-col gap-8 p-4 pt-0'>
          <img src={logo}/>
          <hr/>
          <form className='flex flex-col gap-8'>
            <div className='flex flex-col gap-8'>
              <Input color='info' variant='outlined' radius='round' required  label='First Name' placeHolder='First Name'/>
              <Input color='info' variant='outlined' radius='round' required  label='Last Name' placeHolder='Last Name'/>
              <Input color='info' variant='outlined' radius='round' required  label='Birthday' placeHolder='Birthday'/>
              <Input color='info' variant='outlined' radius='round' required  label='Nationality' placeHolder='Nationality' value='Filipino'/>
            </div>
            <div className='text-sm text-default-500'>
              Current Address 
              <span className='text-danger-500'>*</span>
            </div>

            <div className='grid grid-cols-2 gap-8'>
              <Select color='info' variant='outlined' radius='round'  label='Region' placeHolder='Region'/>
              <Select color='info' variant='outlined' radius='round' label='Province' placeHolder='Province'/>
              <Select color='info' variant='outlined' radius='round' label='Municipality' placeHolder='Municipality'/>
              <Select color='info' variant='outlined' radius='round' label='Barangay' placeHolder='Barangay'/>
              <Input color='info' variant='outlined' radius='round'  label='Street/Sitio' placeHolder='Street/Sitio'/>
            </div>
            <div></div>
            <Button block color='info' radius='soft'>Register</Button>
          </form>

        </div>
      </div>
    
    </div>
  );
}

export default App;
