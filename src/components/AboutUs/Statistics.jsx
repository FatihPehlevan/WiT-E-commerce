import { statistics } from '@/data/data';

export default function Statistics() {
  return (
    <div className="flex flex-col gap-9 items-center lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto lg:w-full lg:py-10">
      {statistics.map((stat) => (
        <div key={stat.id} className="flex flex-col gap-2 items-center ">
          <span className="text-h1 text-text-color">
            {new Intl.NumberFormat('en', { notation: 'compact' }).format(
              stat.value,
            )}
            <span>{stat.suffix || ''}</span>
          </span>
          <span className="text-h5 text-second-text-color">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
