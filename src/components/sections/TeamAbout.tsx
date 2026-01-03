export const TeamAbout = () => {
  const team = [
    {
      name: 'Mr. Rajesh Patel',
      role: 'Managing Partner',
      image: '/src/assets/AboutPage/Mr. Rajesh Patel.png',
    },
    {
      name: 'Mr. Aum Patel',
      role: 'Partner',
      image: '/src/assets/AboutPage/Mr. Aum Patel.png',
    },
  ];

  return (
    <section className="relative w-full h-screen min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] font-black text-[#98012E] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 leading-tight">
            Our Valuable team
          </h2>
          <p className="font-['Sansation'] font-normal text-[#7D7D7D] text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl mx-auto">
            A Committed Partner Ensuring Quality of Service for Made to Order Brass Metal Products
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              {/* Image */}
              <div className="w-full max-w-sm mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Name and Role */}
              <h3 className="font-['DM_Sans'] font-bold text-[#98012E] text-[24px] sm:text-[28px] mb-2">
                {member.name}
              </h3>
              <p className="font-['Sansation'] font-normal text-[#A05370] text-[16px] sm:text-[18px]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

