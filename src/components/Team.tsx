import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { teamMembers } from '~/data/teamMembers'

export const Team = () => {
  return (
    <>
      <div>
        <div className="flex flex-col flex-wrap items-center mt-32 text-center">
          <h2 className="text-[39px]">Team</h2>
          <h3 className="text-[19px] text-opacity-75 max-w-[750px] my-6">
            Our Mission at Camvio is to simplify and promote a strong foundation
            for growth through intuitive software solutions.
          </h3>
        </div>
        {/* profiles */}
        <div className="max-w-[750px] w-[80%] mx-auto flex flex-wrap justify-center space-y-24 sxm:space-y-0 sxm:justify-between my-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="size-[120px] rounded-full overflow-hidden">
                <img
                  src={member.imageSrc}
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-[22px] mt-6">{member.name}</p>
              <p className="text-[12px] font-bold text-opacity-75">
                {member.title}
              </p>
              <div className="flex flex-wrap justify-between w-[40%] mt-6">
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="duration-200 cursor-pointer fill-sky-300 size-5 hover:opacity-75" />
                </a>
                <a
                  href={member.socials.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="duration-200 cursor-pointer fill-blue-400 size-5 hover:opacity-75" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
