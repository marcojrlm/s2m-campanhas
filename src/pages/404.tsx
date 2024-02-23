import {NextPage} from 'next';
import Image from 'next/image';
import Router from 'next/router';

const NotFound: NextPage = () => {
    return (
        <section className='flex flex-col justify-center gap-2 items-center h-screen py-20'>
            <Image src='/assets/images/404.png' width={500} height={400} alt='Recurso não encontrado'/>
            <p className='text-[4rem] font-bold text-primary'>Erro 404</p>
            <p className='text-neutral-30'>Página não encontrada</p>
            <button onClick={() => Router.push('/')}
                    className='mt-6 bg-primary px-10 py-2 rounded-md text-white font-bold'>Ir para página inicial
            </button>
        </section>
    );
}

export default NotFound;