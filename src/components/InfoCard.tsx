interface InfoCardProps {
  titulo: string;
  puesto: string;
  fecha: string;
  descripcion: string;
  tecnologias?: string[];
}

function InfoCard(props: InfoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4">
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-bold">{props.titulo}</h3>
        <span className="text-sm text-gray-500">{props.fecha}</span>
      </div>
      
      <p className="text-gray-600 mb-3">{props.puesto}</p>
      <p className="text-gray-700 mb-4">{props.descripcion}</p>
      
      {props.tecnologias && (
        <div className="flex flex-wrap gap-2">
          {props.tecnologias.map((tech) => (
            <span key={tech} className="bg-gray-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default InfoCard;