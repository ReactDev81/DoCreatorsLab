import Hero from '../components/home/hero/hero';
import BuildYourDream from '../components/home/build-your-dream/index';
import Community from '../components/home/community';
import Review from '../components/home/review';
import Network from '../components/home/network/index';
import LaunchFeature from '../components/home/launch-feature';
import BuildYourBusiness from '../components/home/build-your-business';
import Visiion from '../components/home/vision';
import Founder from '../components/home/founder';
import ModeSwtichButton from '../components/home/ui/mode-switch-button';

const App = () => {
  return (
    <>
      <div className="absolute top-0 right-0">
        <img src="/assets/images/home/hero-bg-shape.png" />
      </div>
      <Hero />
      <BuildYourDream />
      <Community />
      <Review />
      <Network />
      <LaunchFeature />
      <BuildYourBusiness />
      <Visiion />
      <Founder />
      <ModeSwtichButton />
    </>
  );
};

export default App
