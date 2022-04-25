interface propTypes {
  className?: string;
  title: string;
  onClick?: () => void;
}

const FormButton = ({ className, onClick, title }: propTypes) => {
  return (
    <button className={`${className} px-3 py-2 rounded-lg`} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default FormButton;
