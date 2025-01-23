interface Props {
  children: string;
  color?: string;
}

const Button = ({ children, onClick, color= 'primary' }: Props) => {
  return (
    <div>
      <button 
      type="button" 
      className={"btn btn-" + color } 
      onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
