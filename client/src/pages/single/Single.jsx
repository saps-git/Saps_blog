import "./single.css"
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import Write from "../write/Write"

export default function Single() {
    return (
        <div className="single">
            <Write />
            <Sidebar />
        </div>
    )
}
