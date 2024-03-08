import { Footer } from './_components/footer';
import { Heading } from './_components/heading';
import { Heroses } from './_components/heroes';

const MarketingPage = () => {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-t-8 flex-1 px-6 pb-10'>
        <Heading />
        <Heroses />
      </div>
      <Footer />
    </div>
  );
}
 
export default MarketingPage;