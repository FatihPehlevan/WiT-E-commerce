import { teamMembers } from '@/data/data';
import TeamMember from '@/components/TeamPage/TeamMember';

export default function TeamPage() {
  return (
    <section className="flex flex-col py-12 px-10 gap-12">
      <div className="flex flex-col gap-3">
        <h2 className="text-h2 text-center text-text-color items-center">
          Meet Our Team
        </h2>
        <p className="text-paragraph text-center text-second-text-color lg:max-w-150 mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:max-w-275 lg:mx-auto">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} teamMember={member} />
        ))}
      </div>
    </section>
  );
}
