import { useNavigate } from "react-router-dom"

const ErrorPage = ()=>{

    const navigate = useNavigate();

    // this func is to handle btn to get back in previous page by help of usenavigate hook
    const handlebtn = ()=>{
       navigate(-1);
    };
    return(
        <>
        <h1 className="text-2xl text-red-800">404 ERROR PAGE</h1>
        <button className="w-52 h-10 text-base text-white bg-black hover:text-lime-800 " onClick={handlebtn}>Click to go Previous Page</button>
        </>
    )
}
export default ErrorPage