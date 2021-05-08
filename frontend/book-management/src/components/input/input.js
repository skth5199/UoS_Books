function Input(props) {
  const { placeholder, type } = props;
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        required
        onChange={props.onChange}
        name ={props.name}
        className="w-full border rounded border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-white text-base"
      />
    </div>
  );
}

export default Input;
