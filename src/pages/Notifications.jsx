import Link from "next/link";
import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Notifications(){
    return (
        <Layout>
            <h1 className="text-3xl font-bold text-red-500 mb-5">Notifications</h1>
            <Card noPadding={true}>
                <div className="">
                <div className="flex gap-3 items-center font-semibold text-teal-600 border-b border-b-gray-300 ">
                    <Link href="/profile">
                    <Avatar/>
                    </Link>
                    <div>
                        <Link href="" className="hover:underline">Debanjan</Link> liked your <Link  href="{}"className="text-blue-500 hover:underline">Post</Link>
                    </div>
                </div>
                <div className="mt-3 flex gap-3 items-center font-semibold text-teal-600 border-b border-b-gray-300 ">
                    <Avatar/>
                    <div>
                        <Link href="" className="hover:underline">Debanjan</Link> liked your <Link href="{}" className="text-blue-500 hover:underline">Post</Link>
                    </div>
                </div>
                </div>
            </Card>
        </Layout>
    )
}