import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function ProfilePage(){
return (
    <Layout>
        <Card >
          <div className= "overflow-hidden">
          <img className= "rounded w-full h-24 justify-center" src="https://images.unsplash.com/photo-1680287327539-9467451a8b81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=" "/>
          </div >
          <div className="mt-2 flex items-center ">
          <Avatar/>
          <div className="p-3 font-semibold flex">
           Debanjan Bandyopadhyay
           </div>
          </div>
           
        </Card>
    </Layout>
)
}