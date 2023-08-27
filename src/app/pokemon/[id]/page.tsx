import Link from 'next/link';
import './page.scss';

const Page = () => {
  return (
    <div className='contents pokemon-detail-contents'>
      <div className='pokemon-detail'>
        <div className='pokemon-detail__header'>
          <div className='pokemon-detail__header__inner'>
            <span className='size-20'>
              <Link href='/'>PokeDex</Link>
            </span>
          </div>
        </div>
        <div className='pokemon-detail__slider'></div>
        <div className='pokemon-detail__profile'></div>
        <div className='pokemon-detail__stats'></div>
        <div className='pokemon-detail__style'></div>
        <div className='pokemon-detail__evolutions'></div>
        <div className='pokemon-detail__back'></div>
      </div>
    </div>
  );
};

export default Page;
