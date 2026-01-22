import { HeroGrades } from '../components/sections/HeroGrades';
import { GradesContent } from '../components/sections/GradesContent';
import { SEO } from '../components/SEO';

export const Grades = () => {
  return (
    <>
      <SEO
        title="Brass Alloy Grades & Certificates - C36000, CuZn38Pb2, CW614N, CZ121 | Aum Metal Alloys"
        description="Download brass alloy grade certificates from Aum Metal Alloys. We manufacture brass products in international standards: C36000 (Free Cutting Brass), CuZn38Pb2, CW614N, CZ121, IS 319, ASTM B16, EN 12164. Quality certifications and material test reports available."
        keywords="brass alloy grades, brass certificates, C36000 brass, CuZn38Pb2 brass alloy, CW614N brass specification, CZ121 free cutting brass, brass specifications, alloy standards, brass material certificates, IS 319 brass, ASTM B16 brass, EN 12164 brass, brass chemical composition, brass mechanical properties, material test certificate brass, brass quality certificates, leaded brass grades, free machining brass, Aum Metal grades, brass standards India"
        ogTitle="Brass Alloy Grades & Certificates | Aum Metal Alloys"
        ogDescription="Download brass alloy grade certificates. C36000, CuZn38Pb2, CW614N, CZ121 and more. Manufactured to meet IS, ASTM, EN and global standards."
        canonicalUrl="/grades"
        pageType="website"
      />
      <HeroGrades />
      <GradesContent />
    </>
  );
};
