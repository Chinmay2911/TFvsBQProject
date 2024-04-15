'use client'
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

interface TeamMember {
    name: string;
    image: string;
    bio: string;
    linkedin?: string;
    github?: string;
    website?: string;
}

const TeamMembers: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
        {
            name: 'Cedrick Andrade',
            image: 'images/Cedrick.jpg',
            bio: 'A dedicated graduate student pursuing a Masters in Big Data Analytics at Trent University, possesses a stellar academic background and technical prowess.Graduating with distinction from Pune University, he earned recognition as the Best Outgoing Student of 2023 in the Department of Computer Engineering. Cedricks capstone project, Sign Language Detection and Translation, garnered accolades at Project Mania 2k23 and NCMRPE-23, showcasing his expertise in Data Science and Deep Learning. Beyond academia, Cedrick actively contributes to real-world experiences. His role as a Student Marker for AMOD 5240H Statistical Aspects of Modelling at Trent University highlights his dedication to academic excellence and fostering student engagement. Additionally, his tenure as an Administrative Assistant at Kay 5 Consultants and leadership as the Team Project Lead during a Data Science Internship at Smartknower Edtech highlight his proficiency in data analysis and project management. Cedricks recent contribution includes his involvement in a comparative analysis project between TensorFlow and Google BigQuery. Utilizing his Python programming skills and expertise in TensorFlow, he meticulously assessed the performance and efficiency of these platforms in handling small and large datasets. Cedricks insights into the strengths and limitations of each tool provide valuable guidance for data analysts and researchers. His meticulous approach and analytical skills significantly enhanced the projects outcomes, establishing him as a valuable asset in the realm of Big Data analytics.',
            linkedin: 'https://www.linkedin.com/in/cedrick-andrade/',
        },
        {
            name: 'Chinmay Pradhan',
            image: 'images/Chinmay.png',
            bio: 'Chinmay is a dedicated and ambitious individual who has embarked on a journey in the field of data analytics, driven by a passion for leveraging technology to solve real-world problems. His educational background and professional experiences have equipped him with a diverse skill set and a strong foundation in both theoretical knowledge and practical application. From Mumbai, India, Chinmay pursued his academic aspirations by obtaining a Master of Science in Computer Science from Somaiya Vidyavihar University, reflecting his dedication and hard work with a CGPA of 9.5. In 2023, Chinmay decided to further his education by enrolling in the Master of Science in Big Data Analytics program at Trent University, demonstrating his commitment to staying at the forefront of the rapidly evolving tech industry. In the first semester at the University, Chinmay achieved a CGPA of 86%, reflecting his ability to adapt to new environments and excel academically. In professional experience, Chinmay has held notable positions at reputable organizations, where he has made meaningful contributions to projects spanning data analysis, software development, and web enhancement. As a Senior Executive Metaverse at TheSmallBigIdea, he played a pivotal role in developing visualizations and reports to enhance Web3 business operations. His role as an Auditor at Hampton Inn by Hilton reflects his attention to detail and maintaining compliance auditing standards in the field of data analytics. Additionally, Chinmay actively seeks skill expansion through projects like the “College Chatbot” and the “Drivers Drowsiness Detection System.” His internship in Risk Consulting with Price Waterhouse and Coopers & Lybrand (PwC) provided insights into IT governance and control testing, while internships at Iha Consulting Services Pvt. Ltd. and KPMG enriched his experience in data analysis and visualization. Throughout his academic journey, Chinmay has showcased a strong command of programming languages like Python and JavaScript, alongside tools including Tableau, Power BI, and MongoDB, enabling him to effectively analyze large datasets. He also possesses proficiency in audit frameworks like SOX and COBIT. Moreover, his hands-on experience with frameworks such as React.js and libraries like TensorFlow highlights his versatility in adopting new technologies to address evolving challenges in the field. In extracurricular activities, Chinmay excelled as the Chief Information Technology at Rotary International District 3142, winning “Best District Council Member” twice, showcasing strong leadership and teamwork skills. Chinmay seeks dynamic, fulfilling growth in specializing in IT audit or data analysis. In this project, his contributions include the implementation of TensorFlow algorithms, testing Google BigQuery, and using his TypeScript skills to build the website, demonstrating his proficiency in applying cutting-edge technologies to enhance data analysis and web development processes.',
            linkedin: 'https://www.linkedin.com/in/chinmaypradhan2911/',
            github: 'https://github.com/chinmay2911',
            website: 'https://chinmay-pradhan.netlify.app/',
        },
        {
            name: 'Hanyang Wei',
            image: 'images/Han.jpg',
            bio: 'Hanyang Wei is a graduate student in the Applied Modelling & Quantitative Methods (AMOD) program at the Trent University. He has a master of business administration degree from the Central University of Finance and Economics (Beijing, China). In addition, he holds an bachelor degree of science in business administration with specialization in finance and real estate from the Ohio State University (Ohio, the U.S.). He is embracing the second curve with a passion for data-driven solutions. He has ten years of working experience in consumer finance and wholesale banking. In pursuit of his second curve, Hanyang was employed as a student marker for Statistical Aspects of Modelling at Trent University. In his previous professional experience, he has lead several consumer finance funding projects from scratch to implementation. His project management skills are built for complex and lengthy projects. During his career at Guazi.com, he was the front to back owner of the B Bank funding project. B Bank later became the second strategic partner to Guazi.com contributing monthly revenue of 160 thousand dollars. In this current comparative analysis project between TensorFlow and Google BigQuery, Hanyang is responsible for 4 tasks. First, he chose a proper dataset that has both numerical and categorical variables with more than 10,000 samples from Kaggle to compare with an extracted smaller subset to evaluate the scalability of Google BigQuery. Second, he set up Google BigQuery environment, then he wrote queries to pre-process the dataset and build a logistic regression model. Third, he summarized key performance indicators of training logistic regression model in Google BigQuery. In conclusion, his approaches and techniques have moved this project one step further to the finished product.',
            linkedin: 'https://www.linkedin.com/in/hanyang-wei/'
        },
        {
            name: 'Khushal Vanani',
            image: 'images/Khushal.jpg',
            bio: 'Khushal Vanani is a dedicated student at Trent University, currently pursuing his academic journey in the field of statistics and modeling. Originally from Surat, India, Khushal began his educational pursuit at the Pacific School of Engineering, where he honed his skills and passion for technology. During his time there, Khushal actively participated in various projects, showcasing his innovative spirit and problem-solving abilities. Notably, his involvement in projects such as the Beach Cleaning System using Robotics and the development of aesthetically pleasing websites with Advanced Sass and CSS earned him recognition, including a runner-up position for the former project. With an inherent enthusiasm for learning, Khushal consistently seeks opportunities to expand his knowledge and contribute to meaningful initiatives. Currently, Khushal is actively engaged as a student marker in the course AMOD 5240 at Trent University. In this role, he plays a pivotal role in assisting students in understanding the statistical aspects of modeling. Whether clarifying course content or providing guidance on coursework, Khushal is committed to supporting his peers in their academic endeavors. His dedication to helping others navigate complex concepts reflects his passion for education and his belief in the power of collaboration to achieve success.',
            linkedin: 'https://www.linkedin.com/in/khushal-vanani-8419a7212/',
            github: 'https://github.com/khushalvanani'
        }
    ]);

    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const handleCloseBio = () => {
        setSelectedMember(null);
    };

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 mb-4">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Team</span></h2>
                        <p className="text-xl text-gray-600" data-aos="zoom-y-out">Meet our team evaluating TensorFlow and Google BigQuery for big data solutions.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4" >
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center justify-center cursor-pointer relative" onClick={() => handleMemberClick(member)}>
                                <div className="w-40 h-40 overflow-hidden rounded-lg transition duration-300 transform hover:scale-105">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
                                <div className="flex space-x-2 mt-2">
                                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-6 h-6 text-blue-500" /></a>}
                                    {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-gray-700" /></a>}
                                    {member.website && <a href={member.website} target="_blank" rel="noopener noreferrer"><FaGlobe className="w-6 h-6 text-gray-700" /></a>}
                                </div>
                            </div>
                        ))}
                        {selectedMember && (
                            <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75" data-aos="zoom-y-out">
                                <div className="bg-white p-8 rounded-lg max-h-full overflow-y-auto">
                                    <h3 className="text-lg font-semibold">{selectedMember.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{selectedMember.bio}</p>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCloseBio}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;
