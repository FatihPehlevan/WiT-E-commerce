import { useNavigate } from 'react-router';

export default function ShopHeader({ title, showBack = false }) {
  const navigate = useNavigate();
  return (
    <div className="bg-light-gray-1">
      <div className="py-6 text-text-color flex flex-col items-center lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto">
        <div className="flex items-center gap-8">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="text-h3 cursor-pointer flex items-center gap-2 text-second-text-color"
            >
              <i className="iconify-[bx--arrow-back]"></i>
              <span>Back</span>
            </button>
          )}
          <h3 className="text-h3 py-6">{title}</h3>
        </div>
        <div className="py-2.5 flex flex-row gap-4 items-center">
          <span className="text-link">Home</span>
          <i className="iconify-[akar-icons--chevron-right] text-muted-text-color"></i>
          <span className="text-second-text-color text-h6">{title}</span>
        </div>
      </div>
    </div>
  );
}
