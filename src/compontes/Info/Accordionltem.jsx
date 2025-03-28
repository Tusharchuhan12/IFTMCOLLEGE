import React, { useState } from 'react';
import './FAQSection.css'
// AccordionItem Component
const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div
                onClick={toggleAccordion}
                style={{
                    cursor: 'pointer',
                    padding: '20px',
                    background: isOpen ? '#004080' : '#f1f1f1',
                    color: isOpen ? '#fff' : '#000',
                    borderBottom: '1px solid #ccc',
                    display:'flex',
                    justifyContent:'center',
                     font: '1.25rem'
                    
                }}
            >
                {title} {isOpen ? '-' : '+'}
            </div>
            {isOpen && <div style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>{content}</div>}
        </div>
    );
};

// Main Component
const FAQSection = () => {
    const items = [
        {
            title: 'College of Agriculture',
            content: `
School of Agricultural Sciences & Engineering
School of Agricultural Sciences and Engineering (SASE) offers high quality education with well qualified, experienced and highly trained and dedicated team of faculty members attracting talented youth to face the complex challenges of the Indian agriculture. School of Agricultural Sciences and Engineering has well designed magnificent building, with state-of-art facilities. School provides a platform for strong learning environment that nurtures and enhances the personality of our students. Alumni of the School of Agricultural Sciences are well placed in Teaching profession and Research, Manufacturing Units and corporate sectors. Some of the students are acting as successful entrepreneur and giving their valuable contributions in agriculture sector. With the kind of faculty and facilities, SASE is the right place for the prospective students, who desire to pursue studies in the area of Agriculture.`
        },
        {
            title: 'College of Computing Scince & IT',
            content: `School of Computer Science & Applications
The School of Computer Science & Applications is well equipped with high end computers, latest software & state of the art IT infrastructure. All computing resources are interconnected with high speed internet. The School has well qualified faculty, having sound academic background. A good number of alumni are associated working with notable and well established companies across the country and abroad. The course structure is carefully redesigned and updated by the University from time to time keeping in view the ever changing trends in IT industry. The course focuses not only on syllabus coverage but also emphasizes on students hands on experience by making projects on current technology. School is having air-conditioned laboratories equipped with high-end machines for each individual student with internet, web application facilities accessible on LAN to provide students hands on experience on latest software and technology tools used in the Industries. All the laboratories are equipped with Printers & other equipment. Eminent academicians, renowned scientists and researchers are invited for interaction and knowledge sharing with the students.`
        },
        {
            title: 'College of Pharmacy',
            content: `School of Pharmaceutical Sciences
School of Pharmaceutical Sciences is one of the best Pharmacy College in the country and known for its academic excellence. The school was established in 1999 with the aim of developing professionals in the field of pharmaceutical sciences. It has played a very important role in developing the innovative technology and pharmaceuticals to solve the medical problems of the nation. It represents a richly diverse range of experienced faculty who share a commitment to innovation and thorough preparation of their students for future leadership and outcome based research in the field of healthcare. The School prides itself in its multifaceted, collaborative and translational research enterprise by excellent infrastructure including well equipped laboratories and modern instruments. School of Pharmaceutical Sciences had an excellent placement record of students in reputed companies like: Sunpharma, Novartis, Torrent, Lupin pharmaceuticals etc. and in Govt. sector with good salary package. Having renowned faculty and excellent research labs, School of Pharmaceutical Sciences is the right place where the students pursue the studies in pharmaceutical sciences though various programs.`
        },
        {
            title: 'College of Low',
            content: `
School of Law
School of Law (SOL) emphasizes on learning through application and practice and provides opportunities to study law through practical exposure. Students are encouraged to learn skills essential for the legal profession, legal communications, litigation technicalities, effective negotiations, mediation & conciliation procedures and processes, and best global legal practices. The faculty encourages students to have spirited discussions and debates in classrooms, common rooms, and moot court. Students become conversant with the complexities of law at the Legal Aid Clinic and a Social Consultancy Centre. The School, in a short span of time since inception, has become a recognized name in legal education. At the School, a career-based approach is adopted that delivers client focused lawyers eager to make a mark in litigation, judicial services, teaching, research, and social advocacy. School of Law is providing adequate facilities for higher studies in law, and is running full time two year LLM programme in three different streams i.e. Constitutional Law, Criminal Law and Intellectual Property Law and also Ph.D. in Law. Many students are doing research work in the areas like Law of Taxation, Constitutional Law, Personal law, Intellectual Property Rights, International Law and many more emerging and contemporary legal subjects.`
        },
        {
            title: 'Diploma polytechnic',
            content: `University Polytechnic
University Polytechnic (UP) aims to provide complete understanding of engineering skills to the students desirous to build their career as diploma engineers. This aim is fulfilled with the assistance of simulation, analysis, and understanding of the practical based approach in core areas of engineering and allied subjects. It is expected that the students of science and maths background will be able to meet the new challenges, if they are provided good exposure of the technical skills. The University Polytechnic has a number of well talented and experienced faculty having academic qualifications from premier central and state universities of repute. The faculty members of University Polytechnic have good academic, research and administrative experience. Few of them are having experience of working in very good laboratories. The academic and infrastructure facilities of the University Polytechnic are unique in Moradabad region..`
        },
       
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: 'auto' }} className="cource">
            <h1 className='h1'>IFTM University Cource</h1>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content}  />
            ))}
        </div>
    );
};

export default FAQSection;