export default function AdditionalInfo({ additionalInfo }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-h3 text-text-color">Additional Information</h3>
        <p className="text-paragraph text-second-text-color">
          {additionalInfo}
        </p>
      </div>
    </div>
  );
}
