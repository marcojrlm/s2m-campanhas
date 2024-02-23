import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-white w-full p-6">
            <div className='lg:w-11/12 m-auto'>
                <Image
                    width={150}
                    height={100}
                    src='assets/logos/logo-s2.svg'
                    alt="Logo s2"
                />
            </div>
        </header>
    );
}

export default Header;