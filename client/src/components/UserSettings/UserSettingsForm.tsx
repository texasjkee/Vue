import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface UserSettingsFormProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  nameError: string | undefined;
  emailError: string | undefined;
  name: Path<T>;
  email: Path<T>;
}

function UserSettingsForm<T extends FieldValues>(
  props: UserSettingsFormProps<T>
) {
  const { nameError, emailError, name, email, register } = props;

  return (
    <form className="w-[24.75rem] bg-green">
      <label className="text-lightGray500 text-mm ml-1">Email</label>
      <input
        className={`${emailError ? 'border-rose focus:border-none p-1' : 'text-black'}`}
        {...register(email)}
      />
      <p className="text-rose mt-1">{emailError}</p>
      <label className="text-lightGray500 text-mm ml-1">Full name</label>
      <input
        className={`${nameError ? 'border-rose focus:border-none p-1' : ' text-black'}`}
        {...register(name)}
      />
      <p className="text-rose mt-1">{nameError}</p>
    </form>
  );
}

export default UserSettingsForm;
