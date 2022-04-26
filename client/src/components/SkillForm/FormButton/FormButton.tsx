interface propTypes {
  className?: string;
  title: string;
  onClick?: () => void;
}

const FormButton = ({ className, onClick, title }: propTypes) => {
  return (
    <button className={`${className} sm:px-3 sm:py-2 px-2 py-1 rounded-lg`} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default FormButton;
