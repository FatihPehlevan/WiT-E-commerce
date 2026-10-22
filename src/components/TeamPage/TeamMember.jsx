import { Link } from 'react-router';
export default function TeamMember({ teamMember }) {
  const { image, name, profession, facebook, instagram, twitter, linkedin } =
    teamMember;
  return (
    <div className="flex flex-col gap-2.5 lg:flex-1">
      <div className="flex flex-col gap-5 pb-5">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover rounded-md"
        />
        <h3 className="text-h5 text-center text-text-color">{name}</h3>
        <p className="text-h6 text-center text-second-text-color">
          {profession}
        </p>
      </div>
      <div className="flex w-full text-muted-color gap-9 justify-center">
        <Link to={facebook} className="cursor-pointer">
          <i className="iconify-[ant-design--facebook-filled] size-7.5"></i>
        </Link>
        <Link to={instagram} className="cursor-pointer">
          <i className="iconify-[akar-icons--instagram-fill] size-7.5"></i>
        </Link>
        <Link to={twitter} className="cursor-pointer">
          <i className="iconify-[akar-icons--twitter-fill] size-7.5"></i>
        </Link>
        <Link to={linkedin} className="cursor-pointer">
          <i className="iconify-[akar-icons--linkedin-box-fill] size-7.5"></i>
        </Link>
      </div>
    </div>
  );
}
