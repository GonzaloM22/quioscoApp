import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;
  const { categoriaActual, handleClickCategoria } = useQuiosco();

  return (
    <div
      className={`${
        categoriaActual?.id === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border p-5 2xl:p-8 hover:bg-amber-400`}
    >
      <Image
        src={`/assets/img/icono_${icono}.svg`}
        width={45}
        height={45}
        alt="Imagen Icono"
      />
      <button
        type="button"
        onClick={() => handleClickCategoria(id)}
        className="text-2xl font-bold hover:cursor-pointer"
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
