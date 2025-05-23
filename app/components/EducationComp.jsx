import ExpandableCards from "./ui/ExpandableCardStandard";

export const EducationComp = () => {

    return (
        <ExpandableCards cards={EducationCard}/>
    );
}

const EducationCard = [
 {
    description: "Computer Science and Engineering (Artifical Intelligence and Machine Learning)",
    title: "KIET Group of Institutions, Delhi NCR",
    src: "/KIETLogo.png",
    duration:"2021 - 2025"
  },
];
