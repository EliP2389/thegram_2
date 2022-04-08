import { getProviders, signIn } from 'next-auth/react'

// browser
function signin() {
  return <div>I am the signin page</div>
}

// server side render
export async function getServerSideProps() {
  const providers = getProviders()

  return {
    props: {
      providers,
    },
  }
}
export default signin;
