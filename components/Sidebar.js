import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import Categoria from './Categoria';

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
      <Image
        width={150}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
        className="mx-auto pb-10 2xl:pb-20"
      />
      {categorias.map((categoria) => (
        <Categoria key={categoria.id} categoria={categoria} />
      ))}
    </>
  );
};

export default Sidebar;
