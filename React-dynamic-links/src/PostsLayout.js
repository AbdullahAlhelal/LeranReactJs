
import { Outlet } from "react-router-dom";
export default function PostsLayout() {
    return (
        <> <div style={{ background: "orange", width: "100%" }}>
            <h1>Posts Layout</h1>

        </div>
            <div>
                <Outlet />
            </div>
            <div style={{ background: "orange", width: "100%" }}>
                <h1>Posts Layout</h1>
            </div>
        </>
    )
}