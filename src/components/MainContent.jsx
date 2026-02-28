import Carousel from './Carousel';
import Recommendations from './Recommendations';

import { bannerData } from '../data/bannerData';

export default function MainContent() {
    return(
        <main>
            <Carousel showIndicators>
                {bannerData.map((item) => {
                return (
                    <img src={ item.src } alt={ item.alt } key={ item.id} />
                );
            })}
            </Carousel>
            <div className='py-10 bg-amber-500'>
                <Recommendations RecommId="1" />
                <Recommendations RecommId="2" />
                <Recommendations RecommId="3" />
            </div>
        </main>
    );
}