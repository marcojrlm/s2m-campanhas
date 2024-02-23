import Image from 'next/image';
import Box from '@/components/promoter/Box';
import Button from '@/components/Button';

const S2Promoter = () => {
    return (
        <section className='w-11/12 lg:w-10/12 m-auto'>
            <div className='flex flex-col justify-between items-center lg:flex-row'>
                <Image
                    width={500}
                    height={300}
                    src='/assets/images/promoter.png'
                    alt='Comodidades'
                    className='my-12'
                />
                <div className='flex flex-col lg:w-1/2'>
                    <p className='text-lg lg:text-xl font-bold'>Comodidades, facilidades <br/> e benefícios de comprar
                        com a S2.
                    </p>
                    <p className='text-base mt-4'>No ritmo frenético da vida moderna, cuidar de si mesma muitas vezes
                        fica em
                        segundo plano. <br/><br/>
                        Para a mulher que está buscando cuidar da saúde de forma abrangente, o check-up feminino é uma
                        excelente opção.<br/><br/>
                        No ritmo frenético da vida moderna, cuidar de si mesma muitas vezes fica em segundo plano.
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-14 lg:gap-4 my-14'>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>

            <div className='w-full lg:w-2/5 m-auto'>
                <Button text='Encontre um laboratório parceiro'/>
            </div>
        </section>
    );

}

export default S2Promoter;