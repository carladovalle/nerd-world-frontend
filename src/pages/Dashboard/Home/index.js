import { Slider } from '../../../components/Home/Slider';
import { Benefits } from '../../../components/Home/Benefits';
import { Categories } from '../../../components/Home/Categories';
import { BestSellers } from '../../../components/Home/BestSellers';

export default function Home() {
  return (
    <>
      <Slider />
      <Categories />
      
      <Benefits />  
    </>
  );
}