interface PrimaryButtonProps {
  texto: string;
  onClick?: () => void;
}

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button 
      onClick={props.onClick}
      className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors">
      {props.texto}
    </button>
  );
}

export default PrimaryButton;