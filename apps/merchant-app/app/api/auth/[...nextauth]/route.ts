import NextAuth from "next-auth"
import { authOptions } from "../../../../lib/auth"

const handler:any = NextAuth(authOptions)

export { handler as GET, handler as POST }