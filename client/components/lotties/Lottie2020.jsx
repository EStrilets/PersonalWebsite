import Lottie from 'react-lottie';
import WebsiteBuild from '../../assets/WebsiteBuild.json'

export default function Lottie2020() {
  const options = {
    animationData: WebsiteBuild,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={options} speed={1.3} height={200} width={300} />
  );
}
