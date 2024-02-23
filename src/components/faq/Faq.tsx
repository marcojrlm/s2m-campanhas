import Question from '@/components/faq/Question';
import Button from '@/components/Button';

const Faq = () => {
    return (
        <section className='w-10/12 lg:w-8/12 m-auto my-12 flex flex-col gap-4'>
            <div className='my-4 flex flex-col gap-3'>
                <h1 className='font-bold text-xl text-center text-black'>Perguntas <br/> frequentes</h1>
                <p className='text-base text-center'>Tudo que você precisa saber sobre esse procedimento</p>
            </div>

            <Question id={'1'}/>
            <Question id={'2'}/>
            <Question id={'3'}/>
            <Question id={'4'}/>
            <Question id={'5'}/>

            <div className='lg:w-2/5 lg:m-auto mt-16 lg:mt-40'>
                <Button text='Agende o seu exame'/>
            </div>

            <div className='flex flex-col items-center gap-3 mb-8'>
                <p className='font-bold text-[24px] text-dark'>Precisa de ajuda?</p>
                <p>fale com nossa equipe.</p>
                <button className='border-2  border-neutralLight rounded-lg px-6 py-4 text-dark font-semibold'>Entre em
                    contato conosco
                </button>
            </div>
        </section>
    );
}

export default Faq;