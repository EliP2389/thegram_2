import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

// browser
function signin({ providers }) {
  return (
    <>
      <Header />
      <div>
        <img className="" src="https://links.papareact.com/ocw" alt="" />
        <p></p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// server side render
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
export default signin
