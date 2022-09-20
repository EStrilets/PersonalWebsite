import Lottie from 'react-lottie';
import WorkingCoop from '../../assets/WorkingCoop.json'

export default function Lottie2021() {
  const options = {
    animationData: WorkingCoop,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={options} speed={1.3} height={200} width={250} />
  );
}
