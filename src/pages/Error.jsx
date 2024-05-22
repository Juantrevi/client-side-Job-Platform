import {Link, useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error</h1>
            <p>{error.status}</p>
            <p>{error.error.message}</p>
            <Link to={"/"}>Go back to home</Link>
        </div>
    )
}

export default Error