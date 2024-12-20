'use client'

import Button from "@/components/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return <div className='h-screen bg-main-1 flex items-center justify-center'>
    <Button
      className="bg-accent-1 w-48"
      onClick={() => signIn('google', {
        redirect: '/admin'
      })
    }>
      Iniciar con Google
    </Button>
  </div>
};
