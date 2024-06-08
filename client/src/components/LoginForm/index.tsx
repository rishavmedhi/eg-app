import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LoginForm() {
  return (
    <form action="#" className='mt-10 grid grid-cols-1 gap-y-8'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>

      <Button className='bg-blue-600'>Sign In</Button>
    </form>
  )
}

export default LoginForm;