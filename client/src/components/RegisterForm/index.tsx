import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { checkValidPassword } from "@/utils/password.utils";
import { useState } from "react"
import PasswordHelpHover from "../PasswordHelpHover";
import { clientApiFetch } from "@/utils/api.utils";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";


function RegisterForm() {

  const navigate = useNavigate();

  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string|undefined>(undefined);

  async function formSubmit() {
    if (name && name.length > 0 && email && email.length > 0 && password && checkValidPassword(password)) {
      setIsLoading(true);
      setApiError('');
      const res = await clientApiFetch("http://localhost:3000/api/signup", {
        method: 'POST',
        body: {
          name: name,
          email: email,
          password: password
        }
      })
      if (!res.error) {
        navigate('/app');
      }
      else{
        setApiError(res.message);
      }
      setIsLoading(false);
    }
    if (!checkValidPassword(password)) {
      setPasswordValid(false)
    }
  }

  return (
    <form action="#" className='mt-10 grid grid-cols-1 gap-y-8'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" required onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">
          Password
          <PasswordHelpHover />
        </Label>
        <Input type="password" id="password" onChange={(e) => {
          setPasswordValid(true);
          setPassword(e.target.value)
        }} required />
        {
          !passwordValid && <p className="text-red-500 text-sm">Incorrect Password format.<br/>Please enter the password in the proper format</p>
        }
      </div>

      <Button className='bg-blue-600 hover:bg-blue-500' onClick={formSubmit} type="submit">Register
        {
          isLoading && <LoaderCircle className="animate-spin ml-2 w-5" />
        }
      </Button>
        
        <p className="text-red-500 text-sm">{apiError}</p>
        
    </form>
  )
}

export default RegisterForm;