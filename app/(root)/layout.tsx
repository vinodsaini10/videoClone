import StreamVideoProvider from "@/providers/StreamVideoProvider"
import React from 'react';
interface Roots {
    children:React.ReactNode
}
 const RootLayout = ({children}:Roots)=>{
    

return(
    <main>
        <StreamVideoProvider>

        {children}
        </StreamVideoProvider>
    </main>
)

}
export default RootLayout