import NeuralBackground from '../NeuralBackground';

export default function NeuralBackgroundExample() {
  return (
    <div className="relative h-96 w-full">
      <NeuralBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-2xl font-bold text-primary">Neural Background</p>
      </div>
    </div>
  );
}
