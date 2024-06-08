import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
  return (
    <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className='relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28'>
        <main className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
          <h2 className='mt-20 text-lg font-semibold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-sm text-gray-700'>
            Don't have an account? <a className='text-blue-600 hover:underline cursor-pointer'>Sign up</a>
          </p>
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
        </main>
      </div>
    </div>
  )
}

export default Login;