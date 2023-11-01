import { useCounter, useFecth } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

  const {counter, increment} = useCounter();

  const {data, isLoading, hasError} = useFecth('https://api.breakingbadquotes.xyz/v1/quotes/' + counter)
  
  const {author, quote} = !!data && data[0];
  
  return (
    <>
        <h1>Breaking bad quotes</h1>

        <hr />
         {
             isLoading 
             ? <LoadingQuote></LoadingQuote>
             : <Quote author={author} quote={quote}></Quote>
          
         }

         <button disabled={isLoading} onClick={increment} className="btn btn-primary">
            Next Quote
         </button>
    
    </>
  )
} 
