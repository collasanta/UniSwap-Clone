import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

const style = {
   wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#f7edf5] text-white select-none flex flex-col justify-between`
}



export default function Home() {
  return (
   <div className={style.wrapper}> 
      <Header />
      <Main />
      <TransactionHistory />
   </div>
  )
}
