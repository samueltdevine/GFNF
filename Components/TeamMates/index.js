import useTeamMates from "../../hooks/useTeamMates";


const TeamMate = ({ img, name, bio, handle, counter }) => {
  const teamMates = useTeamMates();
  return (
            <div className="w-full flex relative">
              {teamMates.map(({ name, bio, img, handle }, index) => (
                <TeamMate
                  name={name}
                  bio={bio}
                  img={img}
                  handle={handle}
                  counter={`0${index + 1}`}
                ></TeamMate>
              ))}
            </div>
    );
  };
  
  export default TeamMate;