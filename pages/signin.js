import styles from '../styles/signin.module.css';
import { getProviders , signIn } from 'next-auth/react';


function signin({providers}) {
  
  return (
    <div className={styles.container}>
     {Object.values(providers).map((provider)=> (
      <div key={provider.id}>
        <button className={styles.sign} onClick={()=> signIn(provider.id , {callbackUrl:'/'})}>Sign up with {provider.name}</button>
      </div>
     ))}
     
    </div>
  )
}
export default signin

export async function getServerSideProps(){
  const providers = await getProviders();
  return({
    props:{
      providers,
    }
  })
}