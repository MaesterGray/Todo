const TextField = ({
  label,
  error,
  helperText,
  ...rest
}) => {
  return (
    <div className="w-full">
      <p className="text-sm mb-2 font-bold capitalize text-gray-700">{label}</p>

      <input
        type="text"
        {...rest}
        className="border border-gray-400 w-full rounded-md p-2 outline-none focus:border-gray-600"
      />

      {helperText && <p className="text-sm mt-1">{helperText}</p>}
    </div>
  );
};

export default TextField;
