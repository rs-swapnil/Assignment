export default function Cell({index,clickFunction,value})
{
    return(
        <div onClick={() => clickFunction(index)}className="cell bg-secondary border d-flex justify-content-center align-items-center">
            <p >{value}</p>
        </div>
    )
}