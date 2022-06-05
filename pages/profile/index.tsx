import { getSession, UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);

    if (session?.user.email !== 'thomas.zerr@gmail.com') {
      ctx.res.statusCode = 302;
      ctx.res.setHeader('Location', '/');
      return {redirect: { permanent: false, destination: "/"}};
    }

    return { props: { customProp: JSON.stringify(session) } };
  }
});

const Profile = ({user, customProp}: {user: UserProfile, customProp: string}) => {
  if (user?.picture === null) user.picture = undefined;
  if (user?.name === null) user.name = undefined;

  console.log(customProp);

  return (
    user && (
      <div>
        {user.picture && <Image src={user.picture} alt={user.name} width={32} height={32}/>}
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}

export default Profile;