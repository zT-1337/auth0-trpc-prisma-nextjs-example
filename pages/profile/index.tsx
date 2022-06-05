import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

const Profile = () => {
  const {user, error, isLoading} = useUser();

  if (user?.picture === null) user.picture = undefined;
  if (user?.name === null) user.name = undefined;

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

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