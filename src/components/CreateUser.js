export const CreateUser = ({ user, focusInput, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="username"
        value={user.username}
        placeholder="계정명"
        onChange={onChange}
        ref={focusInput}
      ></input>
      <input
        name="email"
        value={user.email}
        placeholder="이메일"
        onChange={onChange}
      ></input>
      <button onClick={onCreate}>등록</button>
    </div>
  );
};
