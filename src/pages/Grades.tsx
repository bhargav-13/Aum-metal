import { HeroGrades } from '../components/sections/HeroGrades';
import { GradesContent } from '../components/sections/GradesContent';
import { SEO } from '../components/SEO';

export const Grades = () => {
  return (
    <>
      <SEO
        title="Brass Alloy Grades - Download Certificates | AUM Metal Alloys"
        description="Download brass alloy grade certificates for C36000, CuZn38Pb2, CW614N, CZ121, and more. AUM Metal Alloys manufactures to meet domestic and global standards."
        keywords="brass alloy grades, brass certificates, C36000, CuZn38Pb2, CW614N, CZ121, brass specifications, alloy standards, brass material certificates"
        ogTitle="Brass Alloy Grades - Download Certificates | AUM Metal Alloys"
        ogDescription="Download brass alloy grade certificates. Manufactured to meet domestic and global standards."
      />
      <HeroGrades />
      <GradesContent />
    </>
  );
};
