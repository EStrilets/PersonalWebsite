import Lottie from 'react-lottie';
import LearningCode from '../../assets/LearningCode.json'

export default function Lottie2022() {
  const options = {
    animationData: LearningCode,
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
