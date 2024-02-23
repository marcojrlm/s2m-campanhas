import Banner from '@/components/Banner';
import Db from '@/components/Db';
import Faq from '@/components/faq/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LabsSelection from '@/components/LabsSelection';
import MainContent from '@/components/MainContent';
import S2Promoter from '@/components/promoter/S2Promoter';
import SocialData from '@/components/socialData/SocialData';
import Slogan from '@/components/Slogan';

export default function Home() {

    return (
        <main className='w-full font-sans text-neutralDark'>
            <Header/>
            <Banner/>
            <MainContent/>
            <S2Promoter/>
            <SocialData/>
            <LabsSelection/>
            <Db/>
            <Faq/>
            <Slogan/>
            <Footer/>
        </main>
    )
}
