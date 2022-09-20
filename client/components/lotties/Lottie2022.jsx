import Lottie from 'react-lottie';
import ProgrammingComputer from '../../assets/ProgrammingComputer.json';

export default function Lottie2022() {
  const options = {
    animationData: ProgrammingComputer,
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
