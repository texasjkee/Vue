interface UserInformationProps {
  email: string;
  name: string;
}

function UserInformation({ email, name }: UserInformationProps) {
  return (
    <div className="w-[24.75rem] bg-green mb-9">
      <label className="text-lightGray500 text-mm ml-1">Email</label>
      <p className="text-ml p-1">{email}</p>
      <label className="text-lightGray500 text-mm ml-1">Full name</label>
      <p className="text-ml p-1">{name}</p>
    </div>
  );
}

export default UserInformation;
