import Link from "next/link";
import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import { useRouter } from "next/router";

export default function ProfilePage(){
    const router = useRouter();
    const {asPath:pathname} = router;
    const isPosts = pathname.includes('posts') || pathname=='/profile'
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos = pathname.includes('photos');
    const tabClasses = 'p-3 font-semibold hover:bg-teal-500 hover:text-white rounded '
    const activetabClasses = 'p-3 border-blue-500 border-b-4 font-semibold  '
return (
    
    <Layout>
        <Card >
          <div className= "overflow-hidden">
          <img className= "rounded w-full h-24 justify-center" src="https://images.unsplash.com/photo-1680287327539-9467451a8b81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=" "/>
          </div >
          <div className="mt-1 flex items-center ">
          <Avatar/>
          <div className="p-3 font-semibold flex -mt-4">
           Debanjan Bandyopadhyay 
           </div>
          
           <div className="mt-10">
            <Link href="/profile/posts" className={isPosts ? activetabClasses : tabClasses}>
               Posts
            </Link>
            <Link href="/profile/about" className={isAbout ? activetabClasses : tabClasses}>
               About
            </Link>
            <Link href="/profile/friends" className={isFriends ? activetabClasses : tabClasses}>
               Friends
            </Link>
            <Link href="/profile/photos" className={isPhotos ? activetabClasses : tabClasses}>
               Photos
            </Link>
           </div>
          </div>
        </Card>
        {isPosts && (
         <div className="mt-4">
         <PostCard/>
         </div>
        )}
        {
         isAbout &&(
            <div className = "font-semibold text-xl">
               <Card>
                  <h2>About me</h2>
               </Card>
            </div>
         )
        }
        {
         isFriends &&(
            <div>
               <Card>
                  <h2 className="mb-2 text-xl font-semibold">Friends</h2>
                  <div className="grid flex gap-2 mt-1">
                     <div className="flex gap-2 font-semibold">
                        <Avatar/>
                        <h3>Debanjan Bandopadhyay</h3>
                     </div>
                  </div>
                  <div>
                     <div className="flex gap-2 font-semibold">
                        <Avatar/>
                        <h3>Debanjan Bandopadhyay</h3>
                     </div>
                  </div>
                  <div>
                     <div className="flex gap-2 font-semibold">
                        <Avatar/>
                        <h3>Debanjan Bandopadhyay</h3>
                     </div>
                  </div>
                  <div>
                     <div className="flex gap-2 font-semibold">
                        <Avatar/>
                        <h3>Debanjan Bandopadhyay</h3>
                     </div>
                  </div>
               </Card>
            </div>
         )
        }
        {isPhotos && (
         <div>
            <Card>
               <div className="grid grid-cols-2 gap-2">
               <div>
                  <img src="https://images.unsplash.com/photo-1679978677453-9452668cb867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = ""/>
               </div>
               <div>
                  <img src="https://images.unsplash.com/photo-1679238391464-295a8f5597f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
               </div>
               <div>
                  <img src="https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
               </div>
               <div>
                  <img src="https://images.unsplash.com/photo-1679100572626-aba3120a0c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
               </div>
               </div>
              
            </Card>
         </div>
        )}
    </Layout>
)
}