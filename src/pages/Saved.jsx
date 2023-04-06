import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

export default function SavedPostsPage(){
    return(
        <Layout>
            <h1 className="text-3xl mb-4 font-bold text-red-500">Saved Posts</h1>
            <PostCard/>
            <PostCard/>
        </Layout>
    )

}