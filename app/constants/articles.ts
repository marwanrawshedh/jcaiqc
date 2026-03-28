export const articles: {
  [key: string]: {
    published: string;
    title: string;
    articleSrc: string;
    authors: string[];
    abstract: string;
    keywords: string[];
    coverImageSrc: string;
    firstPage: number;
    lastPage: number;
    references: string[];
    affiliation?: string[];
    coverImage?: string;
    citationDescription?: string;
    doi?: string;
  }[];
} = {
  "volume-2025-1": [
    {
      title: `Cybersecurity threats, countermeasures and mitigation techniques on the IoT: Future research directions`,
      published: "2025/01/22",
      citationDescription: `Almuqren, A. A. (2025). Cybersecurity threats, countermeasures and mitigation techniques on
the IoT: Future research directions. Journal of Cybersecurity in AI and Quantum Computing, 1(1), 1–11. `,
      firstPage: 1,
      lastPage: 11,
      articleSrc: "/articles/paper-one.pdf",
      keywords: [
        "Internet of Things (IoT)",
        "Cybersecurity",
        "Cyber-attacks",
        "IoT Assets and Threats",
      ],
      coverImageSrc: "/cover-images/cover-one.jpeg",
      authors: ["Almaha Adel Almuqren"],
      doi: "https://doi.org/10.63180/jcaiqc.thestap.2025.1.1",
      abstract: `The Internet of Things (IoT) has gotten a lot of interest from the information and communication
  technology community. The availability of tools afforded by this paradigm, such as environmental
  monitoring using user data and everyday items, is one of the key reasons. In addition, the IoT
  infrastructure's capabilities enable the creation of a wide range of new business models and
  applications such as smart homes, smart cities and e-health. However, there are still concerns over
  the security issues that need addressing to ensure an appropriate deployment. With the increasing
  threat of cyber-attacks, cybersecurity has emerged as one of the most critical aspects on the IoT.
  IoT cybersecurity aims to secure IoT assets and privacy while lowering cybersecurity risks for
  enterprises and consumers. In addition, new cybersecurity tools and technology have the potential
  to improve IoT security management. This paper aims to provide a comprehensive analysis of the
  classification of cyber threats, attacks in IoT layers. The study’s findings show that viruses, spyware
  and malware attacks were the most prevalent technical threats in IoT application layer, each
  accounting for 30% of incidents. Malicious code attacks were identified as the second rank of main
  threats and attacks that representing 20% of incidents. While, phishing attacks was identified as the
  third level of main threats and attacks that representing 15% of incidents. In fourth classification
  was cross-site scripting and Botnet attacks, with 10% of incidents in IoT application layer. The
  results from this research could help organizations in understanding the main types of cyber-attacks
  in IoT applications in order to develop robust methods against these types of these attacks.`,
      references: [
        "Yang, Y., Wu, L., Yin, G., Li, L., & Zhao, H. (2017). A survey on security and privacy issues in Internet-of-Things. IEEE Internet of Things Journal, 4(5), 1250-1258.",
        "Rejeb, A., Rejeb, K., Treiblmaier, H., Appolloni, A., Alghamdi, S., Alhasawi, Y., & Iranmanesh, M. (2023). The Internet of Things (IoT) in healthcare: Taking stock and moving forward. Internet of Things, 22, 100721.",
        "Sengupta, J., Ruj, S., & Bit, S. D. (2020). A comprehensive survey on attacks, security issues and blockchain solutions for IoT and IIoT. Journal of network and computer applications, 149, 102481.",
        "Hassija, V., Chamola, V., Saxena, V., Jain, D., Goyal, P., & Sikdar, B. (2019). A survey on IoT security: application areas, security threats, and solution architectures. IEEE Access, 7, 82721-82743.",
        "Dai, H. N., Zheng, Z., & Zhang, Y. (2019). Blockchain for Internet of Things: A survey. IEEE Internet of Things Journal, 6(5), 8076-8094.",
        "Farooq, M. S., Riaz, S., Abid, A., Abid, K., & Naeem, M. A. (2019). A Survey on the Role of IoT in Agriculture for the Implementation of Smart Farming. IEEE Access, 7, 156237-156271.",
        "Hassan, W. H. (2019). Current research on Internet of Things (IoT) security: A survey. Computer networks, 148, 283-294.",
        "Khraisat, A., & Alazab, A. (2021). A critical review of intrusion detection systems in the internet of things: techniques, deployment strategy, validation strategy, attacks, public datasets and challenges. Cybersecurity, 4, 1-27.",
        "Ammar, M., Russello, G., & Crispo, B. (2018). Internet of Things: A survey on the security of IoT frameworks. Journal of Information Security and Applications, 38, 8-27.",
        "Omolara, A. E., Alabdulatif, A., Abiodun, O. I., Alawida, M., Alabdulatif, A., & Arshad, H. (2022). The internet of things security: A survey encompassing unexplored areas and new insights. Computers & Security, 112, 102494.",
        "Mohanta, B. K., Jena, D., Satapathy, U., & Patnaik, S. (2020). Survey on IoT security: Challenges and solution using machine learning, artificial intelligence and blockchain technology. Internet of Things, 11, 100227.",
        "Rana, M., Mamun, Q., & Islam, R. (2022). Lightweight cryptography in IoT networks: A survey. Future Generation Computer Systems, 129, 77-89.",
        "Ravi, N., & Shalinie, S. M. (2020). Learning-driven detection and mitigation of DDoS attack in IoT via SDN-cloud architecture. IEEE Internet of Things Journal, 7(4), 3559-3570.",
        "Lee, E., Seo, Y. D., Oh, S. R., & Kim, Y. G. (2021). A Survey on Standards for Interoperability and Security in the Internet of Things. IEEE Communications Surveys & Tutorials, 23(2), 1020-1047.",
        "Mohanta, B. K., Jena, D., Ramasubbareddy, S., Daneshmand, M., & Gandomi, A. H. (2020). Addressing security and privacy issues of IoT using blockchain technology. IEEE Internet of Things Journal, 8(2), 881-888.",
        "Grammatikis, P. I. R., Sarigiannidis, P. G., & Moscholios, I. D. (2019). Securing the Internet of Things: Challenges, threats and solutions. Internet of Things, 5, 41-70.",
        "Kumar, R. L., Khan, F., Kadry, S., & Rho, S. (2022). A survey on blockchain for industrial internet of things. Alexandria Engineering Journal, 61(8), 6001-6022.",
        "Rao, P. M., & Deebak, B. D. (2023). Security and privacy issues in smart cities/industries: technologies, applications, and challenges. Journal of Ambient Intelligence and Humanized Computing, 14(8), 10517-10553.",
        "Sharma, P., Jain, S., Gupta, S., & Chamola, V. (2021). Role of machine learning and deep learning in securing 5G-driven industrial IoT applications. Ad Hoc Networks, 123, 102685.",
        "Santhosh Kumar, S. V. N., Selvi, M., & Kannan, A. (2023). A Comprehensive Survey on Machine Learning‐Based Intrusion Detection Systems for Secure Communication in Internet of Things. Computational Intelligence and Neuroscience, 2023(1), 8981988.",
        "Younan, M., Houssein, E. H., Elhoseny, M., & Ali, A. A. (2020). Challenges and recommended technologies for the industrial internet of things: A comprehensive review. Measurement, 151, 107198.",
        "Yugha, R., & Chithra, S. (2020). A survey on technologies and security protocols: Reference for future generation IoT. Journal of Network and Computer Applications, 169, 102763.",
        "Nikou, S. (2019). Factors driving the adoption of smart home technology: An empirical assessment. Telematics and Informatics, 45, 101283.",
        "Ande, R., Adebisi, B., Hammoudeh, M., & Saleem, J. (2020). Internet of Things: Evolution and technologies from a security perspective. Sustainable Cities and Society, 54, 101728.",
        "Hajiheidari, S., Wakil, K., Badri, M., & Navimipour, N. J. (2019). Intrusion detection systems in the Internet of things: A comprehensive investigation. Computer Networks, 160, 165-191.",
        "Manzoor, A., Braeken, A., Kanhere, S. S., Ylianttila, M., & Liyanage, M. (2021). Proxy re-encryption enabled secure and anonymous IoT data sharing platform based on blockchain. Journal of Network and Computer Applications, 176, 102917.",
        "Zhu, Q., Loke, S. W., Trujillo-Rasua, R., Jiang, F., & Xiang, Y. (2019). Applications of distributed ledger technologies to the internet of things: A survey. ACM computing surveys (CSUR), 52(6), 1-34.",
        "Haghi, M., Neubert, S., Geissler, A., Fleischer, H., Stoll, N., Stoll, R., & Thurow, K. (2020). A flexible and pervasive IoT-based healthcare platform for physiological and environmental parameters monitoring. IEEE Internet of Things Journal, 7(6), 5628-5647.",
        "NV, R. K., & E, B. (2022). Detection and monitoring of the asymptotic COVID-19 patients using IoT devices and sensors. International Journal of Pervasive Computing and Communications, 18(4), 407-418.",
        "Shahin, M., Maghanaki, M., Hosseinzadeh, A., & Chen, F. F. (2024). Advancing network security in industrial IoT: a deep dive into AI-enabled intrusion detection systems. Advanced Engineering Informatics, 62, 102685.",
        "Zhang, J., Li, L., Lin, G., Fang, D., Tai, Y., & Huang, J. (2020). Cyber resilience in healthcare digital twin on lung cancer. IEEE Access, 8, 201900-201913.",
        "Shirvanimoghaddam, M., Shirvanimoghaddam, K., Abolhasani, M. M., Farhangi, M., Barsari, V. Z., Liu, H., ... & Naebe, M. (2019). Towards a green and self-powered Internet of Things using piezoelectric energy harvesting. IEEE Access, 7, 94533-94556.",
        "Rao, P. M., & Deebak, B. D. (2023). A comprehensive survey on authentication and secure key management in internet of things: Challenges, countermeasures, and future directions. Ad Hoc Networks, 146, 103159.",
      ],
    },

    {
      title: `Applying risk analysis for determining threats and countermeasures in workstation domain`,
      doi: "https://doi.org/10.63180/jcaiqc.thestap.2025.1.2",
      citationDescription: `Mousa, R. S., & Shehab, R. (2025). Applying risk analysis for determining threats and
countermeasures in workstation domain. Journal of Cybersecurity in AI and Quantum Computing, 2025(1), 12–21. `,
      firstPage: 12,
      lastPage: 21,
      articleSrc: "/articles/paper-two.pdf",
      coverImageSrc: "/cover-images/cover-three.jpeg",
      keywords: [
        "Workstation Domain",
        "Cyber threats",
        "Vulnerabilities",
        "Countermeasures",
        "Risk Management",
      ],
      authors: ["Rama Soliman Mousa", "Rami Shehab"],
      abstract: `The main purpose of this research is to perform a comprehensive analysis of cyber risks in workstation
  domain, including classifying threats, vulnerabilities, impacts, and countermeasures. This classification
  helps to identify suitable security controls to mitigate cyber risks for each type of attack. Additionally,
  this study aims to explore the main vulnerabilities based on the type of attack in workstation domain.
  This study employs the content analysis technique to collect, analyze, and classify data in terms of types
  of threats, vulnerabilities, and countermeasures. The methodology comprises four primary steps: (1)
  identifying key components, (2) threat identification, (3) vulnerability identification, and (4)
  countermeasure identification. The findings indicate that malware attacks and man in middle attacks
  were the most prevalent attacks in workstation domain, each accounting for 27% and 25% of incidents.
  The results found that unpatched software and weak access controls were classified as the most critical
  threats in the workstation domain, comprising 21% and 20% of incidents, respectively. The results also
  indicated that encryption methods, access controls mechanisms and firewall malware protection are the
  most significant and effective countermeasures for protecting the workstation domain environment. The
  findings of this study provides valuable recommendations for academic research in classifying the
  different types of cyber threats and understanding the significant security controls against cyber-attacks
  in workstation domain.`,
      published: "2025/01/25",
      references: [
        "Omolara, A. E., Alabdulatif, A., Abiodun, O. I., Alawida, M., Alabdulatif, A., & Arshad, H. (2022). The internet of things security: A survey encompassing unexplored areas and new insights. Computers & Security, 112, 102494.",
        "Mohanta, B. K., Jena, D., Satapathy, U., & Patnaik, S. (2020). Survey on IoT security: Challenges and solution using machine learning, artificial intelligence and blockchain technology. Internet of Things, 11, 100227.",
        "Rana, M., Mamun, Q., & Islam, R. (2022). Lightweight cryptography in IoT networks: A survey. Future Generation Computer Systems, 129, 77-89.",
        "Ravi, N., & Shalinie, S. M. (2020). Learning-driven detection and mitigation of DDoS attack in IoT via SDN-cloud architecture. IEEE Internet of Things Journal, 7(4), 3559-3570.",
        "Lee, E., Seo, Y. D., Oh, S. R., & Kim, Y. G. (2021). A Survey on Standards for Interoperability and Security in the Internet of Things. IEEE Communications Surveys & Tutorials, 23(2), 1020-1047.",
        "Mohanta, B. K., Jena, D., Ramasubbareddy, S., Daneshmand, M., & Gandomi, A. H. (2020). Addressing security and privacy issues of IoT using blockchain technology. IEEE Internet of Things Journal, 8(2), 881-888.",
        "Grammatikis, P. I. R., Sarigiannidis, P. G., & Moscholios, I. D. (2019). Securing the Internet of Things: Challenges, threats and solutions. Internet of Things, 5, 41-70.",
        "Kumar, R. L., Khan, F., Kadry, S., & Rho, S. (2022). A survey on blockchain for industrial internet of things. Alexandria Engineering Journal, 61(8), 6001-6022.",
        "Rao, P. M., & Deebak, B. D. (2023). Security and privacy issues in smart cities/industries: technologies, applications, and challenges. Journal of Ambient Intelligence and Humanized Computing, 14(8), 10517-10553.",
        "Sharma, P., Jain, S., Gupta, S., & Chamola, V. (2021). Role of machine learning and deep learning in securing 5G-driven industrial IoT applications. Ad Hoc Networks, 123, 102685.",
        "Santhosh Kumar, S. V. N., Selvi, M., & Kannan, A. (2023). A Comprehensive Survey on Machine Learning‐Based Intrusion Detection Systems for Secure Communication in Internet of Things. Computational Intelligence and Neuroscience, 2023(1), 8981988.",
        "Younan, M., Houssein, E. H., Elhoseny, M., & Ali, A. A. (2020). Challenges and recommended technologies for the industrial internet of things: A comprehensive review. Measurement, 151, 107198.",
        "Yugha, R., & Chithra, S. (2020). A survey on technologies and security protocols: Reference for future generation IoT. Journal of Network and Computer Applications, 169, 102763.",
        "Nikou, S. (2019). Factors driving the adoption of smart home technology: An empirical assessment. Telematics and Informatics, 45, 101283.",
        "Ande, R., Adebisi, B., Hammoudeh, M., & Saleem, J. (2020). Internet of Things: Evolution and technologies from a security perspective. Sustainable Cities and Society, 54, 101728.",
        "Hajiheidari, S., Wakil, K., Badri, M., & Navimipour, N. J. (2019). Intrusion detection systems in the Internet of things: A comprehensive investigation. Computer Networks, 160, 165-191.",
        "Manzoor, A., Braeken, A., Kanhere, S. S., Ylianttila, M., & Liyanage, M. (2021). Proxy re-encryption enabled secure and anonymous IoT data sharing platform based on blockchain. Journal of Network and Computer Applications, 176, 102917.",
        "Zhu, Q., Loke, S. W., Trujillo-Rasua, R., Jiang, F., & Xiang, Y. (2019). Applications of distributed ledger technologies to the internet of things: A survey. ACM computing surveys (CSUR), 52(6), 1-34.",
        "Haghi, M., Neubert, S., Geissler, A., Fleischer, H., Stoll, N., Stoll, R., & Thurow, K. (2020). A flexible and pervasive IoT-based healthcare platform for physiological and environmental parameters monitoring. IEEE Internet of Things Journal, 7(6), 5628-5647.",
        "NV, R. K., & E, B. (2022). Detection and monitoring of the asymptotic COVID-19 patients using IoT devices and sensors. International Journal of Pervasive Computing and Communications, 18(4), 407-418.",
        "Shahin, M., Maghanaki, M., Hosseinzadeh, A., & Chen, F. F. (2024). Advancing network security in industrial IoT: a deep dive into AI-enabled intrusion detection systems. Advanced Engineering Informatics, 62, 102685.",
        "Zhang, J., Li, L., Lin, G., Fang, D., Tai, Y., & Huang, J. (2020). Cyber resilience in healthcare digital twin on lung cancer. IEEE access, 8, 201900-201913.",
        "Shirvanimoghaddam, M., Shirvanimoghaddam, K., Abolhasani, M. M., Farhangi, M., Barsari, V. Z., Liu, H., ... & Naebe, M. (2019). Towards a green and self-powered Internet of Things using piezoelectric energy harvesting. Ieee Access, 7, 94533-94556.",
        "Rao, P. M., & Deebak, B. D. (2023). A comprehensive survey on authentication and secure key management in internet of things: Challenges, countermeasures, and future directions. Ad Hoc Networks, 146, 103159.",
      ],
    },

    {
      title: `Risk auditing for Digital Twins in cyber physical systems: A systematic review`,
      keywords: [
        "Digital Twins",
        "Cybersecurity",
        "Risk Auditing",
        "Vulnerabilities",
        "Risk Management",
      ],
      coverImageSrc: "/cover-images/cover-five.jpeg",
      articleSrc: "/articles/paper-three.pdf",
      doi: "https://doi.org/10.63180/jcaiqc.thestap.2025.1.3",
      citationDescription: `Otoom, S. (2025). Risk auditing for Digital Twins in cyber physical systems: A systematic
review. Journal of Cybersecurity in AI and Quantum Computing, 2025(1), 22–35. `,
      firstPage: 22,
      lastPage: 35,
      published: "2025/01/29",
      authors: ["Shahed Otoom"],
      abstract: `Digital Twins are emerging as a transformative technology within Cyber-Physical Systems (CPS),
offering enhanced optimization, predictive maintenance, and real-time monitoring. However, their
integration also introduces significant security challenges. These include vulnerabilities such as data
breaches, unauthorized access, and cyber-attacks that disrupt real-time data flow between their physical
and digital components. The involvement of IoT devices, sensors, and complex networked environments
expands the attack surface, making Digital Twins susceptible to threats like Distributed Denial-ofService (DDoS) attacks, malware infiltration, and insider sabotage. Effective risk management and
assessment are crucial in identifying vulnerabilities, evaluating risks, and implementing mitigation
strategies. Securing Digital Twins ensures data integrity, system reliability, and the continued
functionality of the physical assets they represent. This paper aims to classify the various security threats
associated with Digital Twins and propose structured risk management approaches to enhance their
security within CPS. By addressing these challenges, organizations can ensure the dependability and
trustworthiness of Digital Twin implementations across industries such as manufacturing, healthcare,
smart cities, and IoT ecosystems.`,
      references: [
        "Alcaraz, C., & Lopez, J. (2022). Digital twin: A comprehensive survey of security threats. IEEE Communications Surveys & Tutorials, 24(3), 1475-1503.",
        "Suhail, S., Jurdak, R., & Hussain, R. (2022). Security attacks and solutions for digital twins. arXiv preprint arXiv:2202.12501.",
        "Varghese, S. A., Ghadim, A. D., Balador, A., Alimadadi, Z., & Papadimitratos, P. (2022, March). Digital twin-based intrusion detection for industrial control systems. In 2022 IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops) (pp. 611-617). IEEE.",
        "Carr, C., Wang, S., Wang, P., & Han, L. (2022). Attacking digital twins of robotic systems to compromise security and safety. arXiv preprint arXiv:2211.09507.",
        "Wang, Y., Su, Z., Guo, S., Dai, M., Luan, T. H., & Liu, Y. (2023). A survey on digital twins: Architecture, enabling technologies, security and privacy, and future prospects. IEEE Internet of Things Journal, 10(17), 14965-14987.",
        "Khan, L. U., Han, Z., Saad, W., Hossain, E., Guizani, M., & Hong, C. S. (2022). Digital twin of wireless systems: Overview, taxonomy, challenges, and opportunities. IEEE Communications Surveys & Tutorials, 24(4), 2230-2254.",
        "Sarker, I. H., Janicke, H., Mohsin, A., Gill, A., & Maglaras, L. (2024). Explainable AI for cybersecurity automation, intelligence and trustworthiness in digital twin: Methods, taxonomy, challenges and prospects. ICT Express.",
        "Jeremiah, S. R., El Azzaoui, A., Xiong, N. N., & Park, J. H. (2024). A Comprehensive Survey of Digital Twins: Applications, Technologies and Security Challenges. Journal of Systems Architecture, 103120.",
        "Psaltikidis, T. (2024). Digital twins security, privacy and safety: threats, risks and measures.",
        "Sifat, M. M. H., Choudhury, S. M., Das, S. K., Ahamed, M. H., Muyeen, S. M., Hasan, M. M., ... & Das, P. (2023). Towards electric digital twin grid: Technology and framework review. Energy and AI, 11, 100213.",
      ],
    },
    {
      title: `Machine Learning for Cybersecurity Issues : A systematic Review`,
      coverImageSrc: "/cover-images/cover-two.jpeg",
      articleSrc: "/articles/paper-four.pdf",
      published: "2025/02/20",
      keywords: [
        "Internet of Things (IoT)",
        "Cybersecurity",
        "Cyber-attacks",
        "IoT Assets and Threats",
      ],
      doi: "https://doi.org/10.63180/jcaiqc.thestap.2025.1.4",
      citationDescription: `Alshuaibi, A., Almaayah, M., & Ali, A. (2025). Machine Learning for Cybersecurity Issues : A
systematic Review. Journal of Cybersecurity in AI and Quantum Computing, 2025(1), 36–46. `,
      firstPage: 36,
      lastPage: 46,
      authors: ["Aseel Alshuaibi", "Mohammed Almaayah", "Aitizaz Ali"],
      abstract: `With growing of the usage of the Information technologies and social networks, the identification of
    different network attacks, especially those not previously discovered, is an important concern that needs
    to be addressed. This paper is reviewing recent studies on security incidents and related security issues.
    The aim of the study is to clarify how Machine Learning techniques can influence cybersecurity.
    Moreover, this study aims to analyze and review previous studies related to machine learning (ML) and
    how could ML techniques improve the security. In addition, it will discuss and highlight different
    applications of ML in cybersecurity. As well as understand the use of ML in addressing some of
    cybersecurity problems. After reviewing previous studies and analyzing the results, the results show
    that machine learning are positively change the cybersecurity field. By mapping major machine learning
    algorithms with cyber-attacks and discuss the effectiveness of each algorithm for corresponding attack.`,
      references: [
        "Hassija, V., Chamola, V., Saxena, V., Jain, D., Goyal, P., & Sikdar, B. (2019). A survey on IoT security: application areas, security threats, and solution architectures. IEEE Access, 7, 82721-82743.",
        "Dai, H. N., Zheng, Z., & Zhang, Y. (2019). Blockchain for Internet of Things: A survey. IEEE Internet of Things Journal, 6(5), 8076-8094.",
        "Farooq, M. S., Riaz, S., Abid, A., Abid, K., & Naeem, M. A. (2019). A Survey on the Role of IoT in Agriculture for the Implementation of Smart Farming. IEEE Access, 7, 156237-156271.",
        "Hassan, W. H. (2019). Current research on Internet of Things (IoT) security: A survey. Computer Networks, 148, 283-294.",
        "Khraisat, A., & Alazab, A. (2021). A critical review of intrusion detection systems in the internet of things: techniques, deployment strategy, validation strategy, attacks, public datasets and challenges. Cybersecurity, 4, 1-27.",
        "Ammar, M., Russello, G., & Crispo, B. (2018). Internet of Things: A survey on the security of IoT frameworks. Journal of Information Security and Applications, 38, 8-27.",
        "Omolara, A. E., Alabdulatif, A., Abiodun, O. I., Alawida, M., Alabdulatif, A., & Arshad, H. (2022). The internet of things security: A survey encompassing unexplored areas and new insights. Computers & Security, 112, 102494.",
        "Mohanta, B. K., Jena, D., Satapathy, U., & Patnaik, S. (2020). Survey on IoT security: Challenges and solution using machine learning, artificial intelligence and blockchain technology. Internet of Things, 11, 100227.",
        "Rana, M., Mamun, Q., & Islam, R. (2022). Lightweight cryptography in IoT networks: A survey. Future Generation Computer Systems, 129, 77-89.",
        "Ravi, N., & Shalinie, S. M. (2020). Learning-driven detection and mitigation of DDoS attack in IoT via SDN-cloud architecture. IEEE Internet of Things Journal, 7(4), 3559-3570.",
        "Lee, E., Seo, Y. D., Oh, S. R., & Kim, Y. G. (2021). A Survey on Standards for Interoperability and Security in the Internet of Things. IEEE Communications Surveys & Tutorials, 23(2), 1020-1047.",
        "Mohanta, B. K., Jena, D., Ramasubbareddy, S., Daneshmand, M., & Gandomi, A. H. (2020). Addressing security and privacy issues of IoT using blockchain technology. IEEE Internet of Things Journal, 8(2), 881-888.",
        "Grammatikis, P. I. R., Sarigiannidis, P. G., & Moscholios, I. D. (2019). Securing the Internet of Things: Challenges, threats and solutions. Internet of Things, 5, 41-70.",
        "Kumar, R. L., Khan, F., Kadry, S., & Rho, S. (2022). A survey on blockchain for industrial internet of things. Alexandria Engineering Journal, 61(8), 6001-6022.",
        "Rao, P. M., & Deebak, B. D. (2023). Security and privacy issues in smart cities/industries: technologies, applications, and challenges. Journal of Ambient Intelligence and Humanized Computing, 14(8), 10517-10553.",
        "Sharma, P., Jain, S., Gupta, S., & Chamola, V. (2021). Role of machine learning and deep learning in securing 5G-driven industrial IoT applications. Ad Hoc Networks, 123, 102685.",
        "Santhosh Kumar, S. V. N., Selvi, M., & Kannan, A. (2023). A Comprehensive Survey on Machine Learning‐Based Intrusion Detection Systems for Secure Communication in Internet of Things. Computational Intelligence and Neuroscience, 2023(1), 8981988.",
        "Younan, M., Houssein, E. H., Elhoseny, M., & Ali, A. A. (2020). Challenges and recommended technologies for the industrial internet of things: A comprehensive review. Measurement, 151, 107198.",
        "Yugha, R., & Chithra, S. (2020). A survey on technologies and security protocols: Reference for future generation IoT. Journal of Network and Computer Applications, 169, 102763.",
        "Nikou, S. (2019). Factors driving the adoption of smart home technology: An empirical assessment. Telematics and Informatics, 45, 101283.",
        "Ande, R., Adebisi, B., Hammoudeh, M., & Saleem, J. (2020). Internet of Things: Evolution and technologies from a security perspective. Sustainable Cities and Society, 54, 101728.",
        "Hajiheidari, S., Wakil, K., Badri, M., & Navimipour, N. J. (2019). Intrusion detection systems in the Internet of things: A comprehensive investigation. Computer Networks, 160, 165-191.",
        "Manzoor, A., Braeken, A., Kanhere, S. S., Ylianttila, M., & Liyanage, M. (2021). Proxy re-encryption enabled secure and anonymous IoT data sharing platform based on blockchain. Journal of Network and Computer Applications, 176, 102917.",
        "Zhu, Q., Loke, S. W., Trujillo-Rasua, R., Jiang, F., & Xiang, Y. (2019). Applications of distributed ledger technologies to the internet of things: A survey. ACM Computing Surveys (CSUR), 52(6), 1-34.",
      ],
    },
    {
      title: `Assessment of cybersecurity threats and defense mechanisms in wireless sensor networks`,
      keywords: [
        "Wireless Sensor Networks",
        "Cybersecurity",
        "Threat",
        "DOS",
        "Sybil",
        "Wormhole",
        "Sinkhole",
      ],
      coverImageSrc: "/cover-images/cover-four.jpeg",
      published: "2025/02/20",
      doi: `https://doi.org/10.63180/jcaiqc.thestap.2025.1.5`,
      citationDescription: `Alotaibi, E., Bin Sulaiman, R., & Almaiah, M. (2025). Assessment of cybersecurity threats and
defense mechanisms in wireless sensor networks. Journal of Cybersecurity in AI and Quantum Computing,
2025(1), 47–59.`,
      firstPage: 47,
      lastPage: 59,
      articleSrc: "/articles/paper-five.pdf",
      authors: ["Elham Alotaibi", "Rejwan Bin Sulaiman", "Mohammed Almaiah"],
      abstract: `Wireless sensor networks (WSNs) are a rapidly advancing technology and serve as a foundational
    component for the Internet of Things (IoT) and various other domains, including healthcare, education,
    surveillance, military applications, and more. These networks possess unique characteristics such as
    limited memory, battery life, and processing power, as well as the ability to be deployed in remote or
    inaccessible areas. While these features enable their widespread use, they also impose significant
    constraints, making the implementation of robust security and protection mechanisms a complex
    challenge. This research paper examines a collection of recent scientific studies and proposals aimed at
    enhancing the security of wireless sensor networks against diverse types of attacks. The primary objective
    of this study is to explore the common challenges faced by WSNs as an emerging technology. Through
    a comprehensive review of existing research and practical implementations, it identifies potential risks
    and threats, evaluates current security measures, and analyzes the outcomes of these studies to provide
    insights for future advancements in the field.`,
      references: [
        "Boni, K. R. C., Xu, L., Chen, Z., & Baddoo, T. D. (2020). A security concept based on scaler distribution of a novel intrusion detection device for wireless sensor networks in a smart environment. Sensors, 20(17), 4717.",
        "London School of Economics and Political Science, Dept. of Accounting and Finance and ESRC, Centre for Analysis of Risk and Reg.,2019 The risk management of nothing q Michael Power, www.elsevier.com/locate/aos .",
        "Subrato Bharati1, Prajoy Podder2, M. Rubaiyat Hossain Mondal3, Md. Robiul Alam Robel4 (11.jun, 2020) Threats and Countermeasures of Cyber Security in Direct and Remote Vehicle Communication Systems.(arxiv.org)",
        "Balasem Al-Isawi, University of Babylon(oct,2021) wireless sensor network performance analysis under sinkhole attacks.( https://www.researchgate.net/publication/355615212 )",
        "Reza Fotohi1 Somayyeh Firoozi Bari2 Mehdi Yusefi3 (27.nov,2020) Securing Wireless Sensor Networks Against Denial-of-Sleep Attacks Using RSA Cryptography Algorithm and Interlock Protocol (arxiv.org).",
        "Zhang Huanan*, Xing Suping, Wang Jiannan (2020) Security and application of wireless sensor network, at www.sciencedirect.com .",
        "Tin yang and outhers (19 nov 2021) Design of a secure and efficient authentication protocol for real-time accesses of multiple users in PIoT-oriented multi-gateway WSNs , https://www.sciencedirect.com/ .",
        "Shariq Aziz Butt (19 th 2019) IoT Smart Health Security Threats, www.researchgate.net",
        "Waleed Kh. Alzubaidi (2018) Methods of Secure Routing Protocol in Wireless Sensor Networks, http://qu.edu.iq/ .",
        "Reza Fotohi and outhrers (2020) Securing Wireless Sensor Networks Against Denial-of-Sleep Attacks Using RSA Cryptography Algorithm and Interlock Protocol, arxiv.org.",
        "Subrato Bharati and others (2020) Threats and Countermeasures of Cyber Security in Direct and Remote Vehicle Communication Systems, arxiv.org.",
        "Mohammad Nafis Ul Islam (2021) Denial-of-Service Attacks on Wireless Sensor Network and Defense Techniques, arxiv.org",
        "HUDA A. BABAEER and others( 29 may 2020) Efficient and Secure Data Transmission and Sinkhole Detection in a MultiClustering Wireless Sensor Network Based on Homomorphic Encryption and Watermarking, https://ieeexplore.ieee.org/",
        "WATEEN A. ALIADY and others(July 12 ,2019) Energy Preserving Secure Measure Against Wormhole Attack in Wireless Sensor Networks, https://ieeexplore.ieee.org/ .",
        "Stalin David and 2 T. Joseph George (2020) Identity-Based Sybil Attack Detection and Localization, Artech Journals.",
        "JINGZE DING and others (February 5,2021) The DPC-Based Scheme for Detecting Selective Forwarding in Clustered Wireless Sensor Networks, https://ieeexplore.ieee.org/ .",
        "Mukaram Safaldin and others (13 june ,2020) Improved binary gray wolf optimizer and SVM for intrusion detection system in wireless sensor networks, https://doi.org/10.1007/s12652-020-02228-z .",
        "Suresh Kumar Jha and others (13 august2021) Security Threat Analysis and Countermeasures on Consensus-Based Time Synchronization Algorithms for Wireless Sensor Network, https://link.springer.com/",
        "Akashah Arshad and others (September 22,2021) A survey of Sybil attack countermeasures in IoT-based wireless sensor networks, arxiv.org.",
        "Golden Julie and others (march 25 ,2021) FBDR-Fuzzy based DDoS attack Detection and Recovery mechanism for wireless sensor networks, https://orcid.org/0000-0002-3905-2460",
        "Shailesh Pramod Bendale and others (2018) Security Threats and Challenges in Future Mobile Wireless Networks , https://ieeexplore.ieee.org/",
        "Chundong Wang and others (march 15, 2018) Accurate Sybil Attack Detection Based on Fine-Grained Physical Channel Information, mdpi.com",
        "Opeyemi Osanaiye anf others (24 may 2018) A Statistical Approach to Detect Jamming Attacks in Wireless Sensor Networks",
        "Guang Yang and others (13 Nov 2018) Challenges, Threats, Security Issues and New Trends of Underwater Wireless Sensor Networks, mdpi.com",
        "Muhammad Adil and others (18 Apr 2018) An Anonymous Channel Categorization Scheme of Edge Nodes to Detect Jamming Attacks in Wireless Sensor Networks",
        "Salmah Fattah and others ( 21 September 2020) A Survey on Underwater Wireless Sensor Networks: Requirements, Taxonomy, Recent Advances, and Open Research Challenges, ; https://doi.org/10.3390/s20185393 .",
        "Mubashir Ali (2020) Detection and Isolation Technique for Sinkhole Attack in WSN, , arxiv.org.",
        "Xintao Huan and others(2021) NISA: Node Identification and Spoofing Attack Detection Based on Clock Features and Radio Information for Wireless Sensor Networks, https://ieeexplore.ieee.org/ .",
        "YALI YUAN and others (June 5, 2018) Secure APIT Localization Scheme Against Sybil Attacks in Distributed Wireless Sensor Networks, https://ieeexplore.ieee.org/ .",
        "OHIDA RUFAI AHUTU (April 15,2020) Centralized Routing Protocol for Detecting Wormhole Attacks in Wireless Sensor Networks, https://ieeexplore.ieee.org/",
        "MUHAMMAD NUMAN and others (march 1,2020) A Systematic Review on Clone Node Detection in Static Wireless Sensor Networks, , https://ieeexplore.ieee.org/",
        "Guiyun Liu and others (3 jul 2020) Differential Games of Rechargeable Wireless Sensor Networks against Malicious Programs Based on SILRD Propagation Mode, https://doi.org/10.1155/2020/5686413 .",
        "Hitesh Mohapatra and others (5 may , 2020) Handling of Man-In-The-Middle Attack in WSN Through Intrusion Detection System, http://www.warse.org/IJETER/static/pdf/file/ijeter05852020.pdf",
        "Ruby Bhatt and others( 5 september 2019) implementation of Fruit Fly Optimization Algorithm (FFOA) to escalate the attacking efficiency of node capture attack in Wireless Sensor Networks (WSN), https://doi.org/10.1016/j.comcom.2019.09.007 .",
        "Guiyun Liu and others ( 14 sep 2020) Attack-Defense Game between Malicious Programs and Energy-Harvesting Wireless Sensor Networks Based on Epidemic Modeling, https://doi.org/10.1155/2020/3680518 .",
        "Elham alotaibi and others (2019) Securing Cyber-Physical Systems,psu.edu.sa",
        "Bangashand others (2017) Security Issues and Challenges in Wireless Sensor Network,",
        "Periyanayagi and others (2018) Swarm-based defense technique for tampering and cheating attack in WSN using CPHS , https://link.springer.com/",
        "Da-WenHuang (2021) Data tampering attacks diagnosis in dynamic wireless sensor networks, https://www.sciencedirect.com .",
        "George William Kibirige and others (2020) Attacks in Wireless Sensor Networks, arxiv.org.",
      ],
    },
  ],
  "volume-2025-2": [
    {
      authors: ["Malath Riyadh Alboalebrah", "Salam Al-augby"],
      published: "2025/04/02",
      firstPage: 1,
      lastPage: 11,
      title:
        "Unveiling the Causes of Fatal Road Accidents in Iraq: An Association Rule Mining Approach Using the Apriori Algorithm",
      keywords: [
        "Data mining",
        "Association rule",
        "Apriori",
        "Iraq",
        "Fatal road accident",
      ],
      abstract: `With the increase in fatal accidents in Iraq, they have become a source of concern for both authorities
and the public. Therefore, it has become necessary to conduct an analysis of these road accidents. This
study aims to provide recommendations to responsible authorities after assessing the frequency of fatal
traffic accidents and identifying the most common causes. This will provide actionable insights for
decision-makers to formulate laws that allow for the reduction of these accidents and the reduction of
human and economic losses. This paper applied data mining algorithms to three years of traffic fatal
accident data in Iraq, excluding the Kurdistan Region. The results showed that people without driver's
licenses and with primary school certificates were more likely to fail to wear seatbelts, making them a
dangerous group. Married individuals aged 36-41 were also associated with fatal accidents. Based on the
results, some recommendations were made to reduce these accidents.`,
      articleSrc: "/articles/v-2025-i-2-p-1.pdf",
      coverImageSrc: "/cover-images/cover-one.jpeg",
      affiliation: [
        "Faculty of Computer Science and Mathematics, University of Kufa, Najaf, Iraq",
      ],
      references: [
        "World Health Organization(WHO), Road traffic injuries.” Accessed: Oct. 29, 2024. [Online]. Available: https://www.who.int/publications/i/item/9789241565684",
        "Republic of Iraq - Ministry of Planning, Increase in traffic accidents.” Accessed: Oct. 29, 2024. [Online]. Available: https://mop.gov.iq/archives/23786",
        "H. H. Joni, A. A. Mohammed, and A. A. Shakir, “Classification of traffic accidents datasets between 2003–2017 in Iraq,” Data Brief, vol. 28, Feb. 2020, doi: 10.1016/j.dib.2019.104902.",
        "J. Han, M. Kamber, and J. Pei, “Data Mining. Concepts and Techniques, 3rd Edition (The Morgan Kaufmann Series in Data Management Systems),” 2011.",
        "S. S. Bhowmick, “Association Rule Mining: A Survey,” 2003. [Online]. Available: https://www.researchgate.net/publication/244235958",
        "P. Abdullah and T. Sipos, “Drivers’ Behavior and Traffic Accident Analysis Using Decision Tree Method,” Sustainability (Switzerland), vol. 14, no. 18, Sep. 2022, doi: 10.3390/su141811339.",
        "C. Xu, J. Bao, C. Wang, and P. Liu, “Association rule analysis of factors contributing to extraordinarily severe traffic crashes in China,” J Safety Res, vol. 67, pp. 65–75, Dec. 2018, doi: 10.1016/j.jsr.2018.09.013.",
        "I. Mohamad, R. Kasemsri, V. Ratanavaraha, and S. Jomnonkwao, “Application of the Apriori Algorithm for Traffic Crash Analysis in Thailand,” Safety, vol. 9, no. 3, Sep. 2023, doi: 10.3390/safety9030058.",
        "R. Tamakloe, K. Zhang, A. Hossain, I. Kim, and S. H. Park, “Critical risk factors associated with fatal/severe crash outcomes in personal mobility device rider at-fault crashes: A two-step inter-cluster rule mining technique,” Accid Anal Prev, vol. 199, May 2024, doi: 10.1016/j.aap.2024.107527.",
        "M. Tariq, N. Q. Mehmood, and S. Z. Mahfooz, “Discovering associated factors behind road accidents using association rule mining: A case study from Gujarat, Pakistan,” World Journal of Advanced Research and Reviews, vol. 15, no. 3, pp. 001–011, Sep. 2022, doi: 10.30574/wjarr.2022.15.3.0885.",
        "M. Shahin, M. R. Heidari Iman, M. Kaushik, R. Sharma, T. Ghasempouri, and D. Draheim, “Exploring Factors in a Crossroad Dataset Using Cluster-Based Association Rule Mining,” in Procedia Computer Science, Elsevier B.V., 2022, pp. 231–238. doi: 10.1016/j.procs.2022.03.032.",
        "A. Ziakopoulos, E. Michelaraki, D. Nikolaou, K. Folla, and G. Yannis, “Association Rule Mining for Island and Mainland Road Crash Injuries in Greece,” Transportation Research Procedia, vol. 72, pp. 163–170, 2023, doi: https://doi.org/10.1016/j.trpro.2023.11.390.",
        "T. J. Sun, X. F. Huang, F. K. Xie, J. Zhang, X. H. Jiang, and A. Y. Yu, “Road traffic mortality in Zunyi city, China: A 10 – year data analysis (2013–2022),” Chinese Journal of Traumatology, Nov. 2023, doi: 10.1016/J.CJTEE.2023.09.007.",
        "X. Zhang, Y. Bian, X. Zhao, J. Huang, and Z. Liu, “The association of road, traffic, and environmental factors with wrong-way riding behavior on shared e-bikes,” J Clean Prod, vol. 470, Sep. 2024, doi: 10.1016/j.jclepro.2024.143294.",
        "T. A. Kumbhare Santosh V Chobe, “An Overview of Association Rule Mining Algorithms.” [Online]. Available: www.ijcsit.com",
        "M. H. Santoso, “Application of Association Rule Method Using Apriori Algorithm to Find Sales Patterns Case Study of Indomaret Tanjung Anom,” Brilliance: Research of Artificial Intelligence, vol. 1, no. 2, pp. 54–66, Dec. 2021, doi: 10.47709/brilliance.v1i2.1228.",
        "V. Kotu and B. Deshpande, “Association Analysis,” in Predictive Analytics and Data Mining, Elsevier, 2015, pp. 195–216. doi: 10.1016/b978-0-12-801460-8.00006-9.",
        "Y. Liu, “Application and practice of data mining techniques,” Applied and Computational Engineering, vol. 4, no. 1, pp. 237–241, May 2023, doi: 10.54254/2755-2721/4/20230456.",
        "T. M. Alam et al., “A novel framework for prognostic factors identification of malignant mesothelioma through association rule mining,” Biomed Signal Process Control, vol. 68, Jul. 2021, doi: 10.1016/j.bspc.2021.102726.",
        "J. Han, J. Pei, and H. Tong, “Data Mining: Concepts and Techniques,” 2023.",
        "W. Zhong, J. Yuan, Y. Ren, and L. Du, “Characterization of Urban Road Traffic Accidents based on Data Mining,” in 2022 12th International Workshop on Computer Science and Engineering, WCSE 2022, International Workshop on Computer Science and Engineering (WCSE), 2022, pp. 117–125. doi: 10.18178/wcse.2022.06.018.",
        "S. K. Sivasankaran, P. Natarajan, and V. Balasubramanian, “Identifying Patterns of Pedestrian Crashes in Urban Metropolitan Roads in India using Association Rule Mining,” in Transportation Research Procedia, Elsevier B.V., 2020, pp. 3496–3507. doi: 10.1016/j.trpro.2020.08.102.",
        "P.-Nin. Tan, Michael. Steinbach, and Vipin. Kumar, Introduction to data mining. Pearson, 2018.",
      ],
      citationDescription: `Riyadh Alboalebrah, M., & Al-augby, S. (2025). Unveiling the Causes of Fatal Road Accidents in
Iraq: An Association Rule Mining Approach Using the Apriori Algorithm. Journal of Cyber
Security and Risk Auditing, 2025(2), 1–11.`,
      doi: `https://doi.org/10.63180/jcaiqc.thestap.2025.2.1`,
    },
    {
      abstract: `Due to the increasing frequency and complexity of cyberattacks in recent years, cybersecurity
management has received significant attention, particularly concerning the critical infrastructure of
targeted countries. Such infrastructure contains several vulnerabilities that may be readily exploited if
not adequately managed. National cybersecurity regulators require critical infrastructure organizations
to regularly monitor and report their cybersecurity activities. This study assesses whether the NIST
framework can effectively address most threats facing critical infrastructure and identifies any notable
gaps within the framework. In this literature review, most threats reported in critical infrastructure will
be discussed and mapped according to the NIST cybersecurity functions, concluding with a discussion
of the findings. The findings indicates that human vulnerabilities with (12 instances) represent one of
the leading threats to critical infrastructure, appearing prominently in reviewed sources. Human errors,
negligence, lack of awareness, insufficient training, and susceptibility to social engineering significantly
increase the risk of successful cyberattacks.`,
      authors: [
        "Osama Aljumaiah",
        "Weiwei Jiang",
        "Santosh Reddy Addula",
        "Mohammed Amin Almaiah",
      ],
      firstPage: 12,
      lastPage: 26,
      doi: `https://doi.org/10.63180/jcaiqc.thestap.2025.2.2`,
      citationDescription: `Aljumaiah, O., Jiang, W., Reddy Addula, S., & Amin Almaiah, M. (2025). Analyzing
Cybersecurity Risks and Threats in IT Infrastructure based on NIST Framework. Journal of Cyber
Security and Risk Auditing, 2025(2), 12–26.`,
      keywords: [
        "Cyberattacks",
        "NIST framework",
        "IT Infrastructure",
        "Risk Analysis",
      ],
      published: "2025/04/04",
      title:
        "Analyzing Cybersecurity Risks and Threats in IT Infrastructure based on NIST Framework",
      affiliation: [
        "Department of Computer Networks and Communications, King Faisal University, Al-Ahsa 31982, Saudi Arabia",
        "Beijing University of Posts and Telecommunications, Beijing, China",
        "Department of Information Technology, University of the Cumberlands, Williamsburg, Kentucky, USA",
        "King Abdullah the II IT School, The University of Jordan, Amman 11942, Jordan",
      ],
      coverImageSrc: "",
      articleSrc: "/articles/v-2025-i-2-p-2.pdf",
      references: [
        "Herzog, S. (2017). Ten years after the Estonian cyberattacks: Defense and adaptation in the age of digital insecurity. Geo. J. Int'l Aff., 18, 67.",
        "Qin, W., Chen, S., & Peng, M. (2020). Recent advances in Industrial Internet: insights and challenges. Digital Communications and Networks, 6(1), 1-13.",
        "Abdelkader, S., Amissah, J., Kinga, S., Mugerwa, G., Emmanuel, E., Mansour, D. E. A., ... & Prokop, L. (2024). Securing modern power systems: Implementing comprehensive strategies to enhance resilience and reliability against cyber-attacks. Results in engineering, 102647.",
        "Alrumaih, T. N., & Alenazi, M. J. (2025). ERINDA: A novel framework for Enhancing the Resilience of Industrial Networks against DDoS Attacks with adaptive recovery. Alexandria Engineering Journal, 121, 248-262.",
        "Balta, D. D., Kaç, S. B., Balta, M., Oğur, N. B., & Eken, S. (2025). Cybersecurity-aware log management system for critical water infrastructures. Applied Soft Computing, 169, 112613.",
        "Remili, K. D., Bouzourine, N., Hartani, R., & Belouchrani, A. (2025). Tech diplomacy and Critical Technologies: Case of the LEO satellite internet. Telecommunications Policy, 102947.",
        "Goranin, N., Čeponis, D., & Čenys, A. (2025). A Systematic Literature Review of Current Research Trends in Operational and Related Technology Threats, Threat Detection, and Security Insurance. Applied Sciences, 15(5), 2316.",
        "Atıcı, S., & Tuna, G. (2025). Impact of cybersecurity attacks on electrical system operation. In Cyber Security Solutions for Protecting and Building the Future Smart Grid (pp. 117-160). Elsevier.",
        "Dai, J., Dai, Z., Thing, V. L., & Engineering, S. T. (2025). Cyber-Resilience Enhancement with Cross-Domain Software-Defined Network for Cyber-Physical Microgrids against Denial of Service Attacks. IEEE Transactions on Industrial Cyber-Physical Systems.",
        "Said, D. (2022). A survey on information communication technologies in modern demand-side management for smart grids: Challenges, solutions, and opportunities. IEEE engineering management review, 51(1), 76-107.",
        "Möller, D. P. (2023). NIST cybersecurity framework and MITRE cybersecurity criteria. In Guide to Cybersecurity in Digital Transformation: Trends, Methods, Technologies, Applications and Best Practices (pp. 231-271). Cham: Springer Nature Switzerland.",
        "Toussaint, M., Krima, S., & Panetto, H. (2024). Industry 4.0 data security: A cybersecurity frameworks review. Journal of Industrial Information Integration, 100604.",
        "Gomarga, C., Winata, G. J., Thungriallu, J. E., & Wiputra, R. (2024, December). Smart Contract Security Vulnerability Through The NIST Cybersecurity Framework 2.0 Perspective. In 2024 25th International Arab Conference on Information Technology (ACIT) (pp. 1-8). IEEE.",
        "Harish, V. S. K. V., Gupta, S., Bhatt, J. G., & Bansal, M. (2025). International standards, regulations, and best practices for cyber security of smart grid. In Cyber Security Solutions for Protecting and Building the Future Smart Grid (pp. 321-348). Elsevier.",
        "Gündüz, M. Z., Demirol, D., Daş, R., & Hanbay, K. (2025). Frameworks for smart grid cyber security analysis. In Cyber Security Solutions for Protecting and Building the Future Smart Grid (pp. 191-214). Elsevier.",
        "Busetti, S., & Scanni, F. M. (2025). Evaluating incident reporting in cybersecurity. From threat detection to policy learning. Government Information Quarterly, 42(1), 102000.",
        "Ramezan, C. A. (2025). Understanding the Chief Information Security Officer: Qualifications and Responsibilities for Cybersecurity Leadership. Computers & Security, 104363.",
        "Padmavathi, V., & Saminathan, R. (2025). Security for the Internet of Things. In Computer and Information Security Handbook (pp. 353-368). Morgan Kaufmann.",
        "Latsiou, A. C., Nygård, A. R., Katsikas, S., & Lambrinoudakis, C. (2025). Never Trust-Always Verify: Assessing the cybersecurity trustworthiness of suppliers in the Digital Supply Chain. Procedia Computer Science, 254, 98-107.",
        "Parmar, M., & Miles, A. (2024, May). Cyber Security Frameworks (CSFs): An Assessment Between the NIST CSF v2. 0 and EU Standards. In 2024 Security for Space Systems (3S) (pp. 1-7). IEEE.",
        "Gomarga, C., Winata, G. J., Thungriallu, J. E., & Wiputra, R. (2024, December). Smart Contract Security Vulnerability Through The NIST Cybersecurity Framework 2.0 Perspective. In 2024 25th International Arab Conference on Information Technology (ACIT) (pp. 1-8). IEEE.",
        "Molnar, V., & Sabodashko, D. (2024). Comparative analysis of cybersecurity in leading cloud platforms based on the NIST framework. Social Development and Security, 14(6), 68-80.",
        "Lund, B. D. (2024). Blockchain Applications in Higher Education Based on the NIST Cybersecurity Framework. Journal of Cybersecurity Education, Research and Practice, 2024(1).",
        "Lopes, S., Leite, P., Carvalho, S., & Teixeira, P. (2024, April). Using ITIL as part of the NIST Cybersecurity Framework. In 2024 12th International Symposium on Digital Forensics and Security (ISDFS) (pp. 1-6). IEEE.",
        "Khaleefah, A. D., & Al-Mashhadi, H. M. (2024). Methodologies, requirements, and challenges of cybersecurity frameworks: A review. Iraqi Journal of Science, 468-486.",
        "Krumay, B., Bernroider, E. W., & Walser, R. (2018). Evaluation of cybersecurity management controls and metrics of critical infrastructures: A literature review considering the NIST cybersecurity framework. In Secure IT Systems: 23rd Nordic Conference, NordSec 2018, Oslo, Norway, November 28-30, 2018, Proceedings 23 (pp. 369-384). Springer International Publishing.",
        "Möller, D. P. (2023). NIST cybersecurity framework and MITRE cybersecurity criteria. In Guide to Cybersecurity in Digital Transformation: Trends, Methods, Technologies, Applications and Best Practices (pp. 231-271). Cham: Springer Nature Switzerland.",
        "White, G. B., & Sjelin, N. (2022). The NIST cybersecurity framework. In Research anthology on business aspects of cybersecurity (pp. 39-55). IGI Global.",
        "Almuhammadi, S., & Alsaleh, M. (2017). Information security maturity model for NIST cyber security framework. Computer Science & Information Technology (CS & IT), 7(3), 51-62.",
        "Delgado, M. F., Esenarro, D., Regalado, F. F. J., & Reátegui, M. D. (2021). Methodology based on the NIST cybersecurity framework as a proposal for cybersecurity management in government organizations. 3 c TIC: cuadernos de desarrollo aplicados a las TIC, 10(2), 123-141.",
        "Alshar'e, M. (2023). Cyber security framework selection: Comparision of NIST and ISO27001. Applied computing Journal, 245-255.",
        "Kwon, R., Ashley, T., Castleberry, J., Mckenzie, P., & Gourisetti, S. N. G. (2020, October). Cyber threat dictionary using mitre att&ck matrix and nist cybersecurity framework mapping. In 2020 Resilience Week (RWS) (pp. 106-112). IEEE.",
        "Rohan, R., Papasratorn, B., Chutimaskul, W., Hautamäki, J., Funilkul, S., & Pal, D. (2023, December). Enhancing cybersecurity resilience: A comprehensive analysis of human factors and security practices aligned with the NIST cybersecurity framework. In Proceedings of the 13th International Conference on Advances in Information Technology (pp. 1-16).",
        "Roy, P. P. (2020, February). A high-level comparison between the nist cyber security framework and the iso 27001 information security standard. In 2020 National Conference on Emerging Trends on Sustainable Technology and Engineering Applications (NCETSTEA) (pp. 1-3). IEEE.",
        "Taherdoost, H. (2022). Understanding cybersecurity frameworks and information security standards—a review and comprehensive overview. Electronics, 11(14), 2181.",
        "Koza, E. (2022). Semantic analysis of ISO/IEC 27000 standard series and NIST cybersecurity framework to outline differences and consistencies in the context of operational and strategic information security. Med. Eng. Themes, 2, 26-39.",
        "Goodwin, S. (2022, March). The need for a financial sector legal standard to support the NIST Cybersecurity Framework. In SoutheastCon 2022 (pp. 89-95). IEEE.",
        "Khaleefah, A. D., & Al-Mashhadi, H. M. (2024). Methodologies, requirements, and challenges of cybersecurity frameworks: A review. Iraqi Journal of Science, 468-486.",
        "Udroiu, A. M., Dumitrache, M., & Sandu, I. (2022, June). Improving the cybersecurity of medical systems by applying the NIST framework. In 2022 14th International Conference on Electronics, Computers and Artificial Intelligence (ECAI) (pp. 1-7). IEEE.",
        "Alexander, R. D., & Panguluri, S. (2017). Cybersecurity terminology and frameworks. Cyber-Physical Security: Protecting Critical Infrastructure at the State and Local Level, 19-47.",
        "Cybersecurity, C. I. (2018). Framework for improving critical infrastructure cybersecurity. URL: https://nvlpubs. nist. gov/nistpubs/CSWP/NIST. CSWP, 4162018(7).",
        "Maclean, D. (2017). The NIST risk management framework: Problems and recommendations. Cyber Security: A Peer-Reviewed Journal, 1(3), 207-217.",
        "Moreira, F. R., Da Silva Filho, D. A., Nze, G. D. A., de Sousa Júnior, R. T., & Nunes, R. R. (2021). Evaluating the performance of NIST's framework cybersecurity controls through a constructivist multicriteria methodology. Ieee Access, 9, 129605-129618.",
        "Giuca, O., Popescu, T. M., Popescu, A. M., Prostean, G., & Popescu, D. E. (2021). A survey of cybersecurity risk management frameworks. In Soft Computing Applications: Proceedings of the 8th International Workshop Soft Computing Applications (SOFA 2018), Vol. I 8 (pp. 240-272). Springer International Publishing.",
        "Toussaint, M., Krima, S., & Panetto, H. (2024). Industry 4.0 data security: A cybersecurity frameworks review. Journal of Industrial Information Integration, 100604.",
      ],
    },
    {
      title: "Classification of threats and countermeasures of cloud computing",
      abstract: `This article focuses on the study of cloud computing, it’s various models, and cloud service types such
as SaaS, PaaS, and IaaS. It emphasizes the security challenges and cyber threats associated with cloud
environments, while also proposing methods and solutions to protect these systems. The study underlines
the advantages of cloud computing in offering rapid, cost-effective access to technology and services,
but also points out the vulnerabilities of multi-tenant architectures and the need for robust security
measures to address these risks. Additionally, the article presents a detailed analysis of major security
threats such as data loss, forgery, man-in-the-middle attacks, and denial of service (DoS) attacks—and
explores detection and prevention techniques. These include the use of advanced tools for threat
monitoring and pattern analysis, aimed at strengthening security and boosting user trust in cloud
computing systems.`,
      authors: [
        "Rasha Almanasir",
        "Deyaa Al-solomon",
        "Saif Indrawes",
        "Mohammed Almaiah",
        "Umar Islam",
        "Marwan Alshar'e",
      ],
      firstPage: 27,
      lastPage: 42,
      published: "2025/04/08",
      keywords: [
        "Cloud computing",
        "Security of cloud services",
        "Risk assessment",
        "SaaS",
        "PaaS",
        "IaaS",
      ],
      articleSrc: "/articles/v-2025-i-2-p-3.pdf",
      coverImageSrc: "",
      affiliation: [
        "King Abdullah the II IT School, The University of Jordan, Amman 11942, Jordan",
        "Department of Computer Science, IQRA National University, Swat Campus, Swat 19220, Pakistan",
        "Faculty of Computing and IT, Sohar University, Sohar, Oman",
      ],
      references: [
        "Dawood, M., Tu, S., Xiao, C., Alasmary, H., Waqas, M., & Rehman, S. U. (2023). Cyberattacks and security of cloud computing: a complete guideline. Symmetry, 15(11), 1981.",
        "Zbořil, M. (2022). Risk Assessment Method of Cloud Environment. Computing and Informatics, 41(5), 1186-1206.",
        "Shajan, A., & Rangaswamy, S. (2021). Survey of security threats and countermeasures in cloud computing. United International Journal for Research & Technology, 2(7), 201-207.",
        "Hashim, W., & Hussein, N. A. H. K. (2024). Securing Cloud Computing Environments: An Analysis of Multi-Tenancy Vulnerabilities and Countermeasures. SHIFRA, 2024, 9-17",
        "Tahirkheli, A. I., Shiraz, M., Hayat, B., Idrees, M., Sajid, A., Ullah, R., ... & Kim, K. I. (2021). A survey on modern cloud computing security over smart city networks: Threats, vulnerabilities, consequences, countermeasures, and challenges. Electronics, 10(15), 1811.",
        "Kumar, A., & Kumar, K. A. (2022). A Survey on Cloud Computing Security Threats, Attacks and Countermeasures: A Review. International Journal of Human Computations & Intelligence, 1(3), 13-18",
        "Abdullayeva, F. (2023). Cyber resilience and cyber security issues of intelligent cloud computing systems. Results in Control and Optimization, 12, 100268.",
        "Fadhil, I. S. M., Nizar, N. B. M., & Rostam, R. J. (2023). Security and privacy issues in cloud computing. Authorea Preprints.",
        "Al Nafea, R., & Almaiah, M. A. (2021, July). Cyber security threats in cloud: Literature review. In 2021 international conference on information technology (ICIT) (pp. 779-786). IEEE",
        "Journal of Computers and Applications, 46(5), 348-361.Rani, P., Singh, S., & Singh, K. (2024). Cloud computing security: a taxonomy, threat detection and mitigation techniques. International Journal of Computers and Applications, 46(5), 348-361.",
        "Pericherla, S. S. (2023). Cloud Computing Threats, Vulnerabilities and Countermeasures: A State-of-the-Art. ISC Int. J. Inf. Secur., 15(1), 1-5.",
        "Ali, T., Al-Khalidi, M., & Al-Zaidi, R. (2024). Information security risk assessment methods in cloud computing: Comprehensive review. Journal of Computer Information Systems, 1-28.",
        "Wang, Y., Zhu, M., Yuan, J., Wang, G., & Zhou, H. (2024). The intelligent prediction and assessment of financial information risk in the cloud computing model. arXiv preprint arXiv:2404.09322.",
        "Yanamala, A. K. Y. (2024). Emerging challenges in cloud computing security: A comprehensive review. International Journal of Advanced Engineering Technologies and Innovations, 1(4), 448-479.",
        "Devi, T. A., & Jain, A. (2024, May). Enhancing Cloud Security with Deep Learning-Based Intrusion Detection in Cloud Computing Environments. In 2024 2nd International Conference on Advancement in Computation & Computer Technologies (InCACCT) (pp. 541-546). IEEE.",
        "Sanagana, D. P. R., & Tummalachervu, C. K. (2024, May). Securing Cloud Computing Environment via Optimal Deep Learningbased Intrusion Detection Systems. In 2024 Second International Conference on Data Science and Information System (ICDSIS) (pp. 1-6). IEEE.",
        "Aljuaid, W. A. H., & Alshamrani, S. S. (2024). A deep learning approach for intrusion detection systems in cloud computing environments. Applied Sciences, 14(13), 5381.",
        "Alsadie, D. (2024). Artificial intelligence techniques for securing fog computing environments: trends, challenges, and future directions. IEEE Access.",
        "Alam, M., Shahid, M., & Mustajab, S. (2024). Security challenges for workflow allocation model in cloud computing environment: a comprehensive survey, framework, taxonomy, open issues, and future directions. The Journal of Supercomputing, 80(8), 11491-11555.",
        "Prakash, S., Malaiyappan, J. N. A., Thirunavukkarasu, K., & Devan, M. (2024). Achieving regulatory compliance in cloud computing through ML. AIJMR-Advanced International Journal of Multidisciplinary Research, 2(2).",
        "Awan, I. A., Sumra, I. A., Mahmood, K., Akram, M., Mujahid, S. K., & Zaman, M. I. (2024). A Reliable Approach For Data Security Framework In Cloud Computing Network. Migration Letters, 21(S11), 923-934.",
        "Hassan, O. F., Fatai, F. O., Aderibigbe, O., Akinde, A. O., Onasanya, T., Sanusi, M. A., & Odukoya, O. (2024). Enhancing Cybersecurity through Cloud Computing Solutions in the United States. Intelligent Information Management, 16(4), 176-193.",
        "Kirti, M., Maurya, A. K., & Yadav, R. S. (2024). Fault‐tolerance approaches for distributed and cloud computing environments: A systematic review, taxonomy and future directions. Concurrency and Computation: Practice and Experience, 36(13), e8081.",
      ],
      citationDescription: `Almanasir, R., Al-solomon, D., Indrawes, S., Amin Almaiah, M., Islam, U., & Alshar’e, M. (2025).
Classification of threats and countermeasures of cloud computing. Journal of Cyber Security and Risk
Auditing, 2025(2), 27–42.`,
      doi: "https://doi.org/10.63180/jcaiqc.thestap.2025.2.3",
    },
    {
      title:
        "Secure IoT-Based Real-Time Water Level Monitoring System Using ESP32 for Critical Infrastructure",
      abstract: `Many sectors rely on accurate tank levels, including those dealing with water management, farming,
and industry. For effective use, overflow prevention, planning, and resource management, accurate
water level measurement is essential. One of the main goals of this research is to find a way to use
high- tech sensors to determine how much water is in a tank. In order to gauge how long it takes for
sound waves to travel from the water’s surface to return to the sensor, the suggested system makes
use of ultrasonic sensors. The technology determines the precise measurement of the water level by
analyzing the reflected waves, which in turn determine the distance between the sensor and the
water level. We will construct a prototype and test it in a controlled laboratory setting to ensure the
system works as intended. An ESP32 microcontroller, an ultrasonic sensor, and a display device
showing the water level in real-time will make up the prototype. This study is important because it
has the ability to improve water management methods and encourage the efficient use of resources.
In order to maximize efficiency, minimize waste, and guarantee sustainable practices, enterprises
rely on precise water level assessments. In addition, the system can help find problems with the tank
quickly, so maintenance can be done when it’s needed and accidents can be avoided.`,
      authors: [
        "Mahmood A. Al-Shareeda",
        "Ahmed Mohammed Ali",
        "Mustafa Adel Hammoud",
        "Zaid Haider Muhammad Kazem",
        "Muslim Aqeel Hussein",
      ],

      firstPage: 43,
      lastPage: 52,
      keywords: [
        "ESP32 Microcontroller",
        "Real-Time Monitoring",
        "Tank Water Levels System",
        "Microcontroller Tank",
        "Measuring Tank Water Levels System",
      ],
      published: "2025/04/10",
      affiliation: [
        "Basra Technical Institute Southern Technical University Basra, Iraq",
        "Communication Engineering, Iraq University College Basra, Iraq",
      ],
      articleSrc: "/articles/v-2025-i-2-p-4.pdf",
      coverImageSrc: "",

      references: [
        "Al-Shareeda, M. A., Anbar, M., Alazzawi, M. A., Manickam, S., & Hasbullah, I. H. (2020). Security schemes based conditional privacy-preserving in vehicular ad hoc networks. Indonesian Journal of Electrical Engineering and Computer Science, 21(1).",
        "Al-Shareeda, M. A., Anbar, M., Manickam, S., Hasbullah, I. H., Abdullah, N., Hamdi, M. M., & Al-Hiti, A. S. (2020). NE-CPPA: A new and efficient conditional privacy-preserving authentication scheme for vehicular ad hoc networks (VANETs). Applied Mathematics, 14(6), 1–10.",
        "Al-Shareeda, M. A., Gaber, T., Alqarni, M. A., Alkinani, M. H., Almazroey, A. A., & Almazroi, A. A. (2025). Chebyshev polynomial based emergency conditions with authentication scheme for 5G-assisted vehicular fog computing. IEEE Transactions on Dependable and Secure Computing.",
        "Al-Shareeda, M. A., Manickam, S., Saare, M. A., & Arjuman, N. C. (2023). Proposed security mechanism for preventing fake router advertisement attack in IPv6 link-local network. Indonesian Journal of Electrical Engineering and Computer Science, 29, 518–526.",
        "Almazroi, A. A., Alqarni, M. A., Al-Shareeda, M. A., Alkinani, M. H., Almazroey, A. A., & Gaber, T. (2024). FCA-VBN: Fog computing-based authentication scheme for 5G-assisted vehicular blockchain network. Internet of Things, 25, 101096.",
        "AlMetwally, S. A. H., Hassan, M. K., & Mourad, M. H. (2020). Real-time Internet of Things (IoT)-based water quality management system. Procedia CIRP, 91, 478–485.",
        "Baballe, M. A., Muhammad, A. S., Usman, F. A., Mustapha, N. K., Naisa, A. H. K., & Shehu, A. K. (2022). A review of an automatic water level indicator. GJR Publication, Global Journal of Research in Engineering and Computer Science, 2(03). Retrieved from https://gjrpublication.com/gjrecs",
        "Barbade, G., Shreyas, C., Vedant, S., Vaibhav, N., & Umesh, P. (2021). Automatic water tank filling system with water level indicator. Indian Journal of Microprocessors and Microcontroller (IJMM).",
        "Chalchisa, D., Megersa, M., & Beyene, A. (2018). Assessment of the quality of drinking water in storage tanks and its implication on the safety of urban water supply in developing countries. Environmental Systems Research, 6, 1–6.",
        "Djalilov, A., Sobirov, E., Nazarov, O., Urolov, S., & Gayipov, I. (2023). Study on automatic water level detection process using ultrasonic sensor. In IOP Conference Series: Earth and Environmental Science (Vol. 1142, p. 012020). IOP Publishing.",
        "Jan, F., Min-Allah, N., Saeed, S., Iqbal, S. Z., & Ahmed, R. (2022). IoT-based solutions to monitor water level, leakage, and motor control for smart water tanks. Water, 14(3), 309.",
        "Johari, A., Abd Wahab, M. H., Latif, N. S. A., Ayob, M. E., Ayob, M. I., Ayob, M. A., & Mohd, M. N. H. (2011). Tank water level monitoring system using GSM network. International Journal of Computer Science and Information Technologies, 2(3), 1114–1120.",
        "Kulkarni, S. A., Raikar, V. D., Rahul, B., Rakshitha, L., Sharanya, K., & Jha, V. (2020). Intelligent water level monitoring system using IoT. In 2020 IEEE International Symposium on Sustainable Energy, Signal Processing and Cyber Security (iSSSC) (pp. 1–5). IEEE.",
        "Pandey, A., Andhale, G., Sonawane, A., Amrutkar, A., & Andhare, T. (2022). Automatic water level indicator and controller. International Journal for Research in Applied Science & Engineering Technology (IJRASET), 10(11), 1043–1047.",
        "Pereira, G. P., Chaari, M. Z., & Daroge, F. (2023). IoT-enabled smart drip irrigation system using ESP32. IoT, 4(3), 221–243.",
        "Rachel, P. N., Sophia, D., Rani, G. S., Rishika, J. J., & Annapurna, P. S. (2019). Automatic water level indicator and controller by using Arduino. International Journal of Research in Engineering and Technology, eISSN: 2319–1163.",
        "Rizzolo, S., Périsse, J., Boukenter, A., Ouerdane, Y., Marin, E., Macé, J. R., Cannas, M., & Girard, S. (2017). Real-time monitoring of water level and temperature in storage fuel pools through optical fibre sensors. Scientific Reports, 7(1), 8766.",
        "Sheng, J. (2019). Real-time DC water tank level control using Arduino Mega 2560. In 2019 IEEE 28th International Symposium on Industrial Electronics (ISIE) (pp. 635–640). IEEE.",
        "Singh, R., Baz, M., Gehlot, A., Rashid, M., Khurana, M., Akram, S. V., Alshamrani, S. S., & AlGhamdi, A. S. (2021). Water quality monitoring and management of building water tank using industrial internet of things. Sustainability, 13(15), 8452.",
        "Hajjaj, S. S. H., Sultan, M. T. H., Moktar, M. H., & Lee, S. H. (2020). Utilizing the Internet of Things (IoT) to develop a remotely monitored autonomous floodgate for water management and control. Water, 12(2), 502.",
        "Pasika, S., & Gandla, S. T. (2020). Smart water quality monitoring system with cost-effective using IoT. Heliyon, 6(7).",
        "Olisa, S. C., Asiegbu, C. N., Olisa, J. E., Ekengwu, B. O., Shittu, A. A., & Eze, M. C. (2021). Smart two-tank water quality and level detection system via IoT. Heliyon, 7(8).",
        "Pereira, G. P., Chaari, M. Z., & Daroge, F. (2023). IoT-enabled smart drip irrigation system using ESP32. IoT, 4(3), 221–243. https://doi.org/10.3390/iot4030013",
      ],
      citationDescription: `A. Al-Shareeda, M., Mohammed Ali, A., Adel Hammoud, M., Haider Muhammad Kazem, Z., &
Aqeel Hussein, M. (2025). Secure IoT-Based Real-Time Water Level Monitoring System Using
ESP32 for Critical Infrastructure. Journal of Cybersecurity in AI and Quantum Computing, 2025(2), 44–52.
`,
      doi: "https://doi.org/10.63180/jcaiqc.thestap.2025.2.4",
    },
  ],
};
