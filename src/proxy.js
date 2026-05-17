import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  // get all session to secure
  const session = await auth.api.getSession({
    headers: await headers(),

  })

  // condition to secure 

  if(!session){
    
    return NextResponse.redirect(new URL('/Login', request.url))
  }


}  

// secure file name blew in config 
 
export const config = {
  matcher: ['/My-Booking','/Add-Destination','/Destination/:path']
}