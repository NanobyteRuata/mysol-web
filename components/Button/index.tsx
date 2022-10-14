interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <a className="group bg-cyan-500 hover:bg-blue-700 self-center rounded-md p-3 cursor-pointer text-center">
      {text}
    </a>
  );
};

export default Button;
