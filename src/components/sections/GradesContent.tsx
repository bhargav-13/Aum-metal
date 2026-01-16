import downloadIcon from '../../assets/download.svg';

// Import all certificate PDFs
import C33500 from '../../assets/Certificate/C33500.pdf';
import C36000 from '../../assets/Certificate/C36000.pdf';
import C3604 from '../../assets/Certificate/C3604.pdf';
import C37700 from '../../assets/Certificate/C37700.pdf';
import C38500 from '../../assets/Certificate/C38500.pdf';
import CuZn35Pb2 from '../../assets/Certificate/CuZn35Pb2 (CW601N).pdf';
import CuZn38Pb1_5 from '../../assets/Certificate/CuZn38Pb1.5 (Ms60P).pdf';
import CuZn38Pb1 from '../../assets/Certificate/CuZn38Pb1.pdf';
import CuZn38Pb2 from '../../assets/Certificate/CuZn38Pb2.pdf';
import CuZn39Pb2 from '../../assets/Certificate/CuZn39Pb2.pdf';
import CuZn39Pb3 from '../../assets/Certificate/CuZn39Pb3 (Ms58).pdf';
import CuZn40Pb2 from '../../assets/Certificate/CuZn40Pb2.pdf';
import CuZn40Pb3 from '../../assets/Certificate/CuZn40Pb3.pdf';
import CW508L from '../../assets/Certificate/CW508L.pdf';
import CW607N from '../../assets/Certificate/CW607N.pdf';
import CW612N from '../../assets/Certificate/CW612N.pdf';
import CW614N from '../../assets/Certificate/CW614N.pdf';
import CW617N from '../../assets/Certificate/CW617N.pdf';
import CZ121 from '../../assets/Certificate/CZ121.pdf';
import CZ122 from '../../assets/Certificate/CZ122.pdf';
import CZ124 from '../../assets/Certificate/CZ-124.pdf';
import CZ131 from '../../assets/Certificate/CZ-131.pdf';
import DTD627 from '../../assets/Certificate/DTD627.pdf';
import HPB59_1 from '../../assets/Certificate/HPB59-1.pdf';

interface GradeItem {
  name: string;
  displayName: string;
  certificate: string;
}

const grades: GradeItem[] = [
  { name: 'C-36000', displayName: 'C-36000', certificate: C36000 },
  { name: 'BS218', displayName: 'BS218', certificate: CZ121 },
  { name: 'BS229-Type1', displayName: 'BS229 - Type 1', certificate: CZ122 },
  { name: 'BS2874C109', displayName: 'BS2874C109', certificate: CZ124 },
  { name: 'C3604', displayName: 'C3604', certificate: C3604 },
  { name: 'C38500', displayName: 'C38500', certificate: C38500 },
  { name: 'C3770', displayName: 'C3770', certificate: C37700 },
  { name: 'C37700', displayName: 'C37700', certificate: C37700 },
  { name: 'CDA360', displayName: 'CDA360', certificate: C36000 },
  { name: 'CuZn35Pb1', displayName: 'CuZn35Pb1', certificate: CuZn35Pb2 },
  { name: 'CuZn35Pb2', displayName: 'CuZn35Pb2', certificate: CuZn35Pb2 },
  { name: 'CuZn36PB3', displayName: 'CuZn36PB3', certificate: CuZn39Pb3 },
  { name: 'CuZn37', displayName: 'CuZn37', certificate: CuZn38Pb1 },
  { name: 'CuZn38Pb1.5', displayName: 'CuZn38Pb1.5', certificate: CuZn38Pb1_5 },
  { name: 'CuZn38Pb1', displayName: 'CuZn38Pb1', certificate: CuZn38Pb1 },
  { name: 'CuZn38Pb2', displayName: 'CuZn38Pb2', certificate: CuZn38Pb2 },
  { name: 'CuZn39Pb3', displayName: 'CuZn39Pb3', certificate: CuZn39Pb3 },
  { name: 'CuZn39Pb2', displayName: 'CuZn39Pb2', certificate: CuZn39Pb2 },
  { name: 'CuZn40Pb2', displayName: 'CuZn40Pb2', certificate: CuZn40Pb2 },
  { name: 'CuZn40Pb3', displayName: 'CuZn40Pb3', certificate: CuZn40Pb3 },
  { name: 'CW508L', displayName: 'CW508L', certificate: CW508L },
  { name: 'CWG07N', displayName: 'CWG07N', certificate: CW607N },
  { name: 'CWG09N', displayName: 'CWG09N', certificate: CW607N },
  { name: 'CW612N', displayName: 'CW612N', certificate: CW612N },
  { name: 'CW614N', displayName: 'CW614N', certificate: CW614N },
  { name: 'CW617N', displayName: 'CW617N', certificate: CW617N },
  { name: 'CZ108', displayName: 'CZ108', certificate: CZ121 },
  { name: 'CZ121', displayName: 'CZ121', certificate: CZ121 },
  { name: 'CZ122', displayName: 'CZ122', certificate: CZ122 },
  { name: 'CZ124', displayName: 'CZ124', certificate: CZ124 },
  { name: 'CZ124-2', displayName: 'CZ124', certificate: CZ124 },
  { name: 'CZ131', displayName: 'CZ131', certificate: CZ131 },
  { name: 'DTD-627-1', displayName: 'DTD-627', certificate: DTD627 },
  { name: 'DTD-627-2', displayName: 'DTD-627', certificate: DTD627 },
  { name: 'EN12164', displayName: 'EN12164', certificate: CW614N },
  { name: 'FLB6912', displayName: 'FLB6912', certificate: CW612N },
  { name: 'IS319', displayName: 'IS319', certificate: CZ121 },
  { name: 'HPb59-1', displayName: 'HPb59-1', certificate: HPB59_1 },
  { name: 'IS320', displayName: 'IS320', certificate: CZ122 },
  { name: 'CIS6912FLB', displayName: 'C IS6912 FLB', certificate: CW612N },
  { name: 'IS737MOD', displayName: 'IS737MOD', certificate: C36000 },
  { name: 'C33500', displayName: 'C33500', certificate: C33500 },
  { name: 'IS1264', displayName: 'IS1264', certificate: CZ121 },
];

const GradeCard = ({ grade }: { grade: GradeItem }) => {
  const handleDownload = () => {
    // Open the certificate in a new tab
    window.open(grade.certificate, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-[8px] border border-[#98012E]/20 hover:border-[#98012E]/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
      style={{
        minHeight: '120px',
      }}
    >
      <img
        src={downloadIcon}
        alt="Download"
        className="w-10 h-10 sm:w-12 sm:h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-[#98012E] font-['DM_Sans'] font-medium text-[13px] sm:text-[14px] md:text-[15px] text-center">
        {grade.displayName}
      </span>
    </button>
  );
};

export const GradesContent = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="content-padding">
        {/* Section Title */}
        <h2 className="text-[#98012E] font-['DM_Sans'] font-bold text-[20px] sm:text-[22px] md:text-[24px] mb-8 sm:mb-10 md:mb-12">
          Download Grades
        </h2>

        {/* Grades Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {grades.map((grade) => (
            <GradeCard key={grade.name} grade={grade} />
          ))}
        </div>
      </div>
    </section>
  );
};
