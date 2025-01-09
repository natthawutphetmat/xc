"use client";



import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();


  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    // router.push("/login");
    return null;
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" }); 
  };

  return (
    
      < >
             {!session ? (
                <>
               
                
                </>
             ):(
                <>
                    <div className="dropdown" >
                        <a className="dropbtn"> 
                       <div className="imguser"><img src="/img/user.png" alt="" /></div>
                        </a>
                       <div className="dropdown-content">
                       <a onClick={() => signOut()} className='btn btn-danger' >ออกระบบ</a>
                      </div>
                       </div>




                </>
             )}
         
      </>
     
  );
}
