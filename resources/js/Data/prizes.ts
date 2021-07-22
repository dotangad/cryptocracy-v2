export interface IPrizeEntry {
  tier: string;
  color: string;
  highlight?: string;
  content: string[];
}

const prizes: IPrizeEntry[] = [
  {
    tier: "1st",
    color: "#ffd700",
    highlight:
      "&#8377;30,000 or &#36;400 cash",
    content: [
      "Direct acceptance into the Slingshot internship program",
      "Free .xyz domain to flaunt your website",
      "Taskade lifetime membership",
      "Interview Cake membership for 30 days"
    ]
  },
  {
    tier: "2nd",
    color: "#c0c0c0",
    highlight:
      "&#8377;20,000 or &#36;250 cash",
    content: [
      "Direct acceptance into the Slingshot internship program",
      "Free .xyz domain to flaunt your website",
      "Taskade lifetime membership",
      "Interview Cake membership for 30 days"
    ]
  },
  {
    tier: "3rd",
    color: "#cd7f32",
    highlight:
      "&#8377;15,000 or &#36;200 cash",
    content: [
      "Direct acceptance into the Slingshot internship program",
      "Free .xyz domain to flaunt your website",
      "Taskade lifetime membership",
      "Interview Cake membership for 30 days"
    ]
  },
  {
    tier: "Top 15",
    color: "#bbbbbb",
    highlight:
      "&#8377;1,000 or &#36;15 cash",
    content: [
      "Free .xyz domain to flaunt your website",
      "Taskade lifetime membership",
      "Interview Cake membership for 30 days"
    ]
  },
  {
    tier: "Top 150",
    color: "#aaaaaa",
    content: [
      "Free .xyz domain for one year",
      "Taskade 1-year membership",
      "Interview Cake membership for 30 days"
    ]
  },
  {
    tier: "All Participants",
    color: "#888888",
    content: [
      "Certificate of Particpation with rank and username",
      "Taskade 1-year membership",
      "Interview Cake membership for 30 days",
      "Exciting internship opportunities with Slingshot"
    ]
  },
];

export default prizes;
